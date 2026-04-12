# 🏗️ TITANIUM WORKSPACE ARCHITECTURE (V1.0)
**Thời gian thiết lập:** 12/04/2026
**Nguyên tắc cốt lõi:** Bảo tồn ADN (Identity) - Tối ưu hóa Sản phẩm (Product) - Minh bạch Lịch sử (Archive).

---

## 1. CẤU TRÚC PHÂN TẦNG (HIERARCHY)

Tất cả các file trong Workspace sẽ được quy hoạch vào 5 khu vực chức năng:

### 📂 `01_IDENTITY_DNA/`
> **Mục đích:** Lưu trữ bản sắc và bối cảnh cá nhân của Phi Tong. AI tuyệt đối không được xóa hoặc di chuyển nếu không có lệnh.
- `Ho_so_ca_nhan.md`: Hành trình và giá trị cốt lõi.
- `Remote CV drafts/`: Các bản nháp lịch sử.
- `INTERVIEW_PREP_TITANIUM.md`: Chiến lược phỏng vấn.

### 📂 `02_PORTFOLIO_HUB/`
> **Mục đích:** Chứa toàn bộ hạ tầng kỹ thuật của trang web Public.
- `index.html`: Trang chủ Portfolio.
- `case-study-*.html`: Các trang Case Study chi tiết.
- Folder `assets/`, `Simulator/`, `Onboarding/`.

### 📂 `03_CV_SUITE/`
> **Mục đích:** Chứa các "Vũ khí" đã được Weaponized để đi săn Job.
- `v3_final_match/`: Chứa các bản PDF/MD Architect, ID, LXD cuối cùng.
- `CAREER_OPS_TITANIUM_UPGRADE_REPORT.md`: Báo cáo nâng cấp v3.

### 📂 `04_ARCHIVES/`
> **Mục đích:** Lưu trữ các cột mốc đã hoàn thành để giảm nhiễu cho thư mục gốc.
- `10_DAY_TITANIUM_COUNTDOWN.md`: (Status: Finished).
- `WORKSPACE_ULTIMATE_AUDIT_REPORT.md`: (Status: Legacy Audit).
- `TECHNICAL_AUDIT_LOG_DAY_01.md`: (Status: History).

### 📂 `PROTOCOLS/`
> **Mục đích:** Chứa các quy tắc vận hành và hiến pháp.
- `HOANGPHI_PROTOCOL.md`

---

## 2. NGUYÊN TẮC VẬN HÀNH CHO AI (RULE ZERO PRIME)

1. **Kiểm toán trước (Audit First)**: Trước khi di chuyển file, AI phải đối soát với danh mục này.
2. **Minh bạch đường dẫn (Source Anchoring)**: Mọi thông tin phản hồi phải đính kèm Link file vật lý.
3. **Cấm di chuyển ADN (Fixed Assets)**: Các file trong `01_IDENTITY_DNA/` là bất biến.
4. **Sạch thư mục Gốc (Clean Root)**: Thư mục Gốc (`/`) chỉ được chứa các file hệ thống (`.cursorrules`, `.gitignore`) và bản thiết kế kiến trúc này.

---

## 3. LỘ TRÌNH THỰC THI (IMPLEMENTATION)
1. Khởi tạo folder structure.
2. Di chuyển file theo đúng danh mục.
3. Kiểm tra tính liên kết của `index.html` (chỉ link tới các Case Study trong cùng folder).
