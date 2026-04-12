import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const careerOpsPath = path.resolve(__dirname, '..');

// Paths
const templatePath = path.join(__dirname, 'cv-template.html');
const generatePdfScript = path.join(careerOpsPath, 'generate-pdf.mjs');

function md2html(text) {
    if (!text) return '';
    let clean = text.trim();
    
    // 1. Remove ONLY leading hyphens, bullets, and spaces. LEAVE asterisks for formatting.
    clean = clean.replace(/^[-\s•]+/, '').trim();

    // 2. Handle Bold & Italic
    clean = clean.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    clean = clean.replace(/\*(.+?)\*/g, '<em>$1</em>');

    return clean;
}

function parseMarkdownRobust(mdPath) {
    const lines = fs.readFileSync(mdPath, 'utf-8').split('\n');
    const sections = {
        SUMMARY_BULLETS: '', EXPERIENCE: '', PROJECTS: '', EDUCATION: '', CERTIFICATIONS: '', SKILLS: ''
    };

    let currentSection = '';
    let currentJob = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        if (line.startsWith('## ')) {
            const header = line.substring(3).toUpperCase();
            if (header.includes('SUMMARY')) currentSection = 'SUMMARY';
            else if (header.includes('EXPERIENCE')) currentSection = 'EXPERIENCE';
            else if (header.includes('PROJECTS')) currentSection = 'PROJECTS';
            else if (header.includes('EDUCATION')) currentSection = 'EDUCATION';
            else if (header.includes('CERTIFICATIONS')) currentSection = 'CERTIFICATIONS';
            else if (header.includes('SKILLS')) currentSection = 'SKILLS';
            else currentSection = '';
            continue;
        }

        switch (currentSection) {
            case 'SUMMARY':
                if (line.startsWith('-')) sections.SUMMARY_BULLETS += `<li>${md2html(line)}</li>`;
                break;
            case 'EXPERIENCE':
                if (line.startsWith('### ')) {
                    if (currentJob) sections.EXPERIENCE += renderJob(currentJob);
                    const parts = line.substring(4).split(' | ');
                    currentJob = { title: parts[0], date: parts[1], company: '', loc: '', summary: '', bullets: [] };
                } else if (currentJob) {
                    if (line.startsWith('**') && line.includes(' — ')) {
                        const parts = line.split(' — ');
                        currentJob.company = parts[0].replace(/\*\*/g, '').trim();
                        currentJob.loc = parts[1] || '';
                    } else if (line.startsWith('*') && line.endsWith('*')) {
                        currentJob.summary = md2html(line);
                    } else if (line.startsWith('-')) {
                        if (line.trim() === '---' || line.trim() === '- ---') continue;
                        currentJob.bullets.push(`<li>${md2html(line)}</li>`);
                    }
                }
                break;
            case 'PROJECTS':
                if (line.startsWith('-')) {
                    if (!sections.PROJECTS.startsWith('<ul>')) sections.PROJECTS = '<ul>';
                    sections.PROJECTS += `<li>${md2html(line)}</li>`;
                }
                break;
            case 'EDUCATION':
                if (line.startsWith('#')) continue;
                sections.EDUCATION += `<div class="edu-line-flat">${md2html(line)}</div>`;
                break;
            case 'CERTIFICATIONS':
                if (line.startsWith('-')) {
                    if (!sections.CERTIFICATIONS.startsWith('<ul>')) sections.CERTIFICATIONS = '<ul>';
                    sections.CERTIFICATIONS += `<li>${md2html(line)}</li>`;
                } else {
                    if (line.startsWith('#')) continue;
                    sections.CERTIFICATIONS += `<div class="cert-line-flat">${md2html(line)}</div>`;
                }
                break;
            case 'SKILLS':
                if (line.includes(':')) {
                    const colonIdx = line.indexOf(':');
                    const cat = line.substring(0, colonIdx);
                    const val = line.substring(colonIdx + 1);
                    sections.SKILLS += `<div class="skills-line"><strong>${cat.replace(/\*\*/g, '').trim()}:</strong> ${md2html(val)}</div>`;
                }
                break;
        }
    }

    if (currentJob) sections.EXPERIENCE += renderJob(currentJob);
    if (sections.PROJECTS) sections.PROJECTS += '</ul>';
    if (sections.CERTIFICATIONS && sections.CERTIFICATIONS.startsWith('<ul>')) sections.CERTIFICATIONS += '</ul>';
    
    return sections;
}

function renderJob(job) {
    if (!job.title) return '';
    return `
    <div class="exp-entry">
        <div class="line-title-date">
            <span class="job-title">${job.title}</span>
            <span class="job-date">${job.date}</span>
        </div>
        <div class="line-company-loc">
            <span class="company-name">${job.company}</span>
            <span class="company-loc">${job.loc}</span>
        </div>
        ${job.summary ? `<div class="company-summary">${job.summary}</div>` : ''}
        <ul>${job.bullets.join('')}</ul>
    </div>`;
}

async function build() {
    const args = process.argv.slice(2);
    const inputMd = args[0];
    const outputPdf = args[1];

    const mdPath = path.join(__dirname, inputMd);
    const outputPath = path.join(__dirname, outputPdf);
    const tempHtmlPath = path.join(__dirname, 'temp.html');

    const sections = parseMarkdownRobust(mdPath);
    let template = fs.readFileSync(templatePath, 'utf-8');

    const data = {
        NAME: "PHI TONG",
        LOCATION: "Ho Chi Minh City, Vietnam",
        EMAIL: "phitong.official@gmail.com",
        PHONE: "+84 (799) 445 377",
        LINKEDIN_URL: "https://linkedin.com/in/hoang-phi-tong",
        LINKEDIN_DISPLAY: "linkedin.com/in/hoang-phi-tong",
        PORTFOLIO_URL: "https://hoangphi-id.github.io",
        PORTFOLIO_DISPLAY: "hoangphi-id.github.io",
        LANG: "en"
    };

    const finalData = { ...data, ...sections };
    Object.keys(finalData).forEach(key => {
        template = template.replaceAll(`{{${key}}}`, finalData[key] || '');
    });

    fs.writeFileSync(tempHtmlPath, template);

    console.log(`🚀 Building: ${outputPdf}...`);
    try {
        execSync(`"/usr/local/bin/node" "${generatePdfScript}" "${tempHtmlPath}" "${outputPath}"`, { stdio: 'inherit' });
        console.log(`✅ Success!`);
    } catch (err) {
        console.error('❌ Failed:', err.message);
    }
}

build();
