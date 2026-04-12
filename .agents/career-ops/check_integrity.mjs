import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootPath = path.resolve(__dirname, '../../');
const v3Path = path.join(rootPath, '.agents/career-ops/v3_final_match');

const APPROVED_TITLES = ["Learning Experience Architect", "Instructional Designer", "Learning Experience Designer"];
const FORBIDDEN_TITLES = ["English Teacher", "Academic Supervisor", "Teacher Trainer"];

const filesToCheck = [
    path.join(v3Path, 'Resume_Phi_Tong_Architect.md'),
    path.join(v3Path, 'Resume_Phi_Tong_ID.md'),
    path.join(v3Path, 'Resume_Phi_Tong_LXD.md'),
    path.join(rootPath, 'HOANGPHI_PROTOCOL.md')
];

function checkIntegrity() {
    console.log('🔍 Starting Integrity Audit...');
    let scores = { pass: 0, fail: 0, issues: [] };

    filesToCheck.forEach(filePath => {
        if (!fs.existsSync(filePath)) {
            scores.fail++;
            scores.issues.push(`MISSING FILE: ${path.basename(filePath)}`);
            return;
        }

        const content = fs.readFileSync(filePath, 'utf-8');

        // 1. Check Title Consistency
        if (filePath.endsWith('.md') && !filePath.includes('PROTOCOL')) {
            const hasValidTitle = APPROVED_TITLES.some(title => content.includes(title));
            if (!hasValidTitle) {
                scores.fail++;
                scores.issues.push(`NO VALID ARCHITECT TITLE in ${path.basename(filePath)}`);
            } else {
                scores.pass++;
            }
        }

        // 2. Check for Contact Info
        if (filePath.endsWith('.md') && !filePath.includes('PROTOCOL')) {
            const hasEmail = content.includes('phitong.official@gmail.com');
            const hasLinkedIn = content.includes('linkedin.com/in/hoang-phi-tong');
            if (!hasEmail || !hasLinkedIn) {
                scores.fail++;
                scores.issues.push(`MISSING CONTACT INFO in ${path.basename(filePath)}`);
            }
        }

        // 2. Check for Forbidden Legacy Terms (Job Titles only)
        FORBIDDEN_TITLES.forEach(term => {
            const regex = new RegExp(`### ${term}`, 'i'); 
            if (regex.test(content)) {
                scores.fail++;
                scores.issues.push(`LEGACY LEAK in ${path.basename(filePath)}: Found "${term}" in Job Header`);
            }
        });
    });

    if (scores.fail > 0) {
        console.error('\n❌ INTEGRITY AUDIT FAILED!');
        scores.issues.forEach(issue => console.error(`- ${issue}`));
        process.exit(1);
    } else {
        console.log('\n✅ INTEGRITY AUDIT PASSED: 100% Consistent Across All Core Files.');
        process.exit(0);
    }
}

checkIntegrity();
