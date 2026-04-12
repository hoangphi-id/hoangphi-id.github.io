#!/bin/bash
# Chạy trực tiếp từ thư mục chứa script
SCRIPT_DIR=$(dirname "$0")
echo "🛡️ --- SYSTEM SELF-AUDIT STARTING --- 🛡️"
/usr/local/bin/node "$SCRIPT_DIR/check_integrity.mjs"
/usr/local/bin/node "$SCRIPT_DIR/check_campaign.mjs"
echo ""
echo "📂 --- RECENTLY MODIFIED FILES (Last 30 mins) --- 📂"
find "$SCRIPT_DIR/../.." -maxdepth 5 -mmin -30 -type f -not -path '*/.*'
echo ""
echo "🛡️ --- SELF-AUDIT COMPLETE --- 🛡️"
