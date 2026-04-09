---
description: Quy trình tối ưu hóa CV từng phần một để đảm bảo chiều sâu và độ chính xác cao.
---

# 📄 Workflow: Tối ưu CV (/optimize-cv)

Quy trình này tích hợp trí tuệ từ Adele Doan (Blue Ocean) để "đóng gói" giá trị thương mại của ứng viên.

## 1. TÓM TẮT HỒ SƠ ỨNG VIÊN (CANDIDATE SUMMARY)
- Bóc tách CV gốc: Học vấn, Số năm kinh nghiệm, Kỹ năng cốt lõi.
- Xác định "Khoảng cách" (Gap) giữa CV hiện tại và JD mục tiêu.

## 2. CHẤM ĐIỂM SỰ PHÙ HỢP (MATCHING SCORE & PAUSE)
- Đối chiếu chéo: CV + JD + Insight Công ty.
- Đưa ra điểm số Matching xác đáng (Ví dụ: 72% Match).
- **QUAN TRỌNG**: AI tạm dừng và hỏi ý kiến người dùng: *"Điểm số và nhận định ban đầu này đã phù hợp chưa?"*.
- *Chỉ chạy tiếp khi người dùng xác nhận.*

## 3. VIẾT LẠI CHI TIẾT (DETAILED FEEDBACK & REWRITE)
- Rà soát lỗi trình bày, ngôn ngữ (Mirroring jargon).
- **Viết lại Experience theo cấu trúc PARL/STAR**: Bắt đầu bằng động từ mạnh, chứng minh bằng số liệu KPIs/Metrics.
- **Tối ưu hóa "Titanium Content"**: 
    - Nén (Pruning) các đoạn mô tả công ty súc tích (1-2 dòng) để lấp đầy khoảng trống trang (Filling Gaps).
    - Đảm bảo "Khối bảo vệ Micro-Anchor" (H2 + Title + Desc + 1st Bullet) luôn nằm chung một trang.
- Tối ưu hóa **Summary/Objective** (theo chuẩn 6 giây).

## 4. XUẤT BÁO CÁO (FINAL REPORT)
- Tự động lưu thành file báo cáo hoàn chỉnh tại thư mục `.reports/`.
- Định dạng: `REPORTS/CV_OPTIMIZATION_REPORT_[DATE].md`.
- File này chứa: Điểm số, Feedback chi tiết, và Phiên bản CV đã tối ưu.
