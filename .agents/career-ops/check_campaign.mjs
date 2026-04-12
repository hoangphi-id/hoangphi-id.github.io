import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootPath = path.resolve(__dirname, '../../');
const calendarPath = path.join(rootPath, '.agents/career-ops/strategy/CONTENT_CALENDAR.md');

function checkCampaign() {
    console.log('📅 Testing Campaign Continuity (Strict Mode)...');
    const today = new Date();
    today.setHours(0,0,0,0);

    if (!fs.existsSync(calendarPath)) {
        process.exit(1);
    }

    const content = fs.readFileSync(calendarPath, 'utf-8');
    const lines = content.split('\n');
    let debtCount = 0;
    let upcomingCount = 0;

    lines.forEach(line => {
        if (line.includes('⏳ Chờ đăng') || line.includes('📝 Đang soạn')) {
            const dateMatch = line.match(/(\d{2})\/(\d{2})\/(\d{4})/);
            if (dateMatch) {
                const postDate = new Date(`${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}`);
                const diffDays = (postDate - today) / (1000 * 60 * 60 * 24);

                if (today >= postDate) {
                    debtCount++;
                    console.error(`🔴 [BÁO ĐỘNG ĐỎ] Mày đang nợ bài đăng ngày ${dateMatch[0]}!`);
                } else if (diffDays <= 2) {
                    upcomingCount++;
                    console.warn(`🟡 [CẢNH BÁO VÀNG] Bài đăng ngày ${dateMatch[0]} sắp đến hạn! (Còn ${diffDays.toFixed(0)} ngày)`);
                } else {
                    console.log(`🟢 [ỔN ĐỊNH] Bài đăng ngày ${dateMatch[0]} (Còn ${diffDays.toFixed(0)} ngày)`);
                }
            }
        }
    });

    if (debtCount > 0) {
        console.error(`\n❌ WORKSPACE LOCKED: Bạn đang nợ ${debtCount} bài đăng. Đăng bài ngay để tiếp tục.`);
        process.exit(1);
    } else {
        console.log('\n✅ Campaign status: OK.');
        process.exit(0);
    }
}

checkCampaign();
