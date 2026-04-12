import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths
const profilePath = path.join(__dirname, 'config/profile.yml');
const templatePath = path.join(__dirname, 'cv-template.html');
const generatePdfScript = path.join(__dirname, 'generate-pdf.mjs');

// Simple function to parse markdown sections
function parseMarkdown(mdPath) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const sections = {};
    
    // Extract title (Name)
    const titleMatch = content.match(/^# CV — (.+?) \((.+?)\)/m);
    if (titleMatch) {
        sections.NAME = titleMatch[1];
        sections.TAGLINE = titleMatch[2];
    }

    // Extract sections by ## headers
    const parts = content.split(/^## /m);
    parts.forEach(part => {
        const lines = part.split('\n');
        const header = lines[0].trim().toUpperCase();
        const body = lines.slice(1).join('\n').trim();
        
        if (header.includes('SUMMARY')) {
            sections.SUMMARY_TEXT = body;
        } else if (header.includes('EXPERIENCE')) {
            // Convert markdown list to simple HTML for the template
            sections.EXPERIENCE = body.split('\n\n').map(entry => {
                const [headerLine, ...rest] = entry.split('\n');
                const titleParts = headerLine.match(/### (.+?) \| (.+?)$/);
                if (titleParts) {
                    return `
                    <div class="exp-entry">
                        <div class="exp-header">
                            <span class="job-title">${titleParts[1]}</span>
                            <span class="job-date">${titleParts[2]}</span>
                        </div>
                        <div class="company-name">${rest[0].replace('**', '').replace('**', '')}</div>
                        <ul>${rest.slice(1).filter(l => l.startsWith('-')).map(l => `<li>${l.substring(2)}</li>`).join('')}</ul>
                    </div>`;
                }
                return `<div>${entry}</div>`;
            }).join('');
        } else if (header.includes('SKILLS')) {
            sections.SKILLS = body;
        }
        // ... more complex parsing would go here, but this is for the test
    });

    return sections;
}

// Simple manual fill for the test case
async function build() {
    console.log('🏗️ Building CV...');
    
    const mdFile = process.argv[2] || 'cv.md';
    const mdPath = path.join(__dirname, mdFile);
    const outputPath = path.join(__dirname, mdFile.replace('.md', '.pdf'));
    const tempHtmlPath = path.join(__dirname, 'temp-cv.html');

    let template = fs.readFileSync(templatePath, 'utf-8');

    // Fill basic info (static for now from config or just manual for test)
    const data = {
        NAME: "Phi (Phillip) Tong",
        LOCATION: "Ho Chi Minh City, Vietnam",
        EMAIL: "phitong.official@gmail.com",
        LINKEDIN_URL: "https://linkedin.com/in/hoang-phi-tong",
        LINKEDIN_DISPLAY: "linkedin.com/in/hoang-phi-tong",
        PORTFOLIO_URL: "https://hoangphi-id.github.io",
        PORTFOLIO_DISPLAY: "hoangphi-id.github.io",
        SECTION_SUMMARY: "Professional Summary",
        SECTION_EXPERIENCE: "Work Experience",
        SECTION_SKILLS: "Tech Stack & Skills",
        SECTION_COMPETENCIES: "Core Competencies",
        SECTION_PROJECTS: "Portfolio Highlights",
        SECTION_EDUCATION: "Education",
        SECTION_CERTIFICATIONS: "Certifications",
        LANG: "en",
        PAGE_WIDTH: "210mm"
    };

    // Replace placeholders
    Object.keys(data).forEach(key => {
        template = template.replaceAll(`{{${key}}}`, data[key]);
    });

    // For the test, we just want to see if the engine works
    // I will mock some content blocks if the markdown parser is too simple
    template = template.replace('{{SUMMARY_TEXT}}', 'Senior Instructional Designer with 10+ years experience...');
    template = template.replace('{{COMPETENCIES}}', '<span class="competency-tag">LMS Admin</span><span class="competency-tag">Articulate 360</span>');
    template = template.replace('{{EXPERIENCE}}', 'Work Experience details...');
    template = template.replace('{{PROJECTS}}', 'Project details...');
    template = template.replace('{{EDUCATION}}', 'Education details...');
    template = template.replace('{{CERTIFICATIONS}}', 'Certs details...');
    template = template.replace('{{SKILLS}}', 'Skills details...');

    fs.writeFileSync(tempHtmlPath, template);

    console.log('🚀 Generating PDF via Playwright...');
    try {
        execSync(`"${process.execPath}" "${generatePdfScript}" "${tempHtmlPath}" "${outputPath}"`, { stdio: 'inherit' });
        console.log(`✅ Success! PDF saved to: ${outputPath}`);
        // fs.unlinkSync(tempHtmlPath); // Keep for debugging if needed
    } catch (err) {
        console.error('❌ PDF generation failed:', err.message);
    }
}

build();
