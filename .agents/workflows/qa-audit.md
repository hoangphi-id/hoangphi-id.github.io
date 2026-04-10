---
description: Quy trình tự rà soát toàn diện (Visual Audit) để đảm bảo chất lượng, tính nhất quán và giới hạn trang của CV sau mỗi thay đổi hoặc cập nhật thông tin mới.
---

Quy trình này PHẢI được thực hiện sau mỗi lần sửa lỗi hoặc CẬP NHẬT THÔNG TIN MỚI (New entries) để tránh lỗi side-effect và duy trì chuẩn Tier 1.

### Bước 1: Hoàn tất tác vụ cập nhật
- Thực hiện thêm/sửa nội dung theo yêu cầu.
- Luôn ưu tiên nén spacing (line-height, margin) để giữ giới hạn 3 trang.

### Bước 2: Kích hoạt Browser Audit (Đối với CV/Web)
- Mở file bằng công cụ `browser_subagent`.
- Cuộn qua TOÀN BỘ file để kiểm tra theo **TITANIUM LAYOUT RULES**:
    - **Triệt tiêu Flexbox Rendering Bug**: Kiểm tra xem các hàng ngang (`job-title-row`, `company-row`) có đang dùng `display: flex` hay không? (Nếu có -> **LỖI**, đổi sang `display: table`).
    - **Ghim tiêu đề Micro-Anchor (Header-Anchor)**: Tiêu đề `H2` có đang bị mồ côi ở cuối trang không? (Nếu có -> Wrap Header + Desc + First Bullet vào `concrete-block` kèm `break-inside: avoid`).
    - **Tính toàn diện bullet (Bullet-Integrity)**: Có bullet `li` nào bị cắt đôi giữa 2 trang không? (Nếu có -> Áp dụng `break-inside: avoid`).
    - **In nghiêng (Style-Force)**: Kiểm tra Company Description có bị mất in nghiêng khi in PDF không? (Nếu có -> Thêm `!important`).
    - **Giới hạn trang (Page Limit)**: CV có vượt quá 3 trang (ID/LXD) hay không? 
        - Nếu vượt: AI PHẢI tự động tinh chỉnh nén space hoặc lược bỏ thông tin cũ (Tier 4) để ép về đúng số trang.
    - **Khoảng trống (Gap Analysis)**: Kiểm tra khoảng trắng cuối trang 1/2. Nếu trống > 25%, thực hiện nén nội dung trang trên hoặc giãn nội dung trang dưới để lấp đầy diện tích thị giác.
    - **Spacing**: Spacing giữa các mục có đồng nhất không? Kiểm tra kỹ margin-top của các H2.
    - **Liên kết**: Kiểm tra các link LinkedIn, Email xem có bấm được không.

### Bước 3: Chụp ảnh bằng chứng (Proof of Work)
- Chụp ảnh Screenshot tại các điểm nhạy cảm (điểm ngắt trang, các mục vừa thêm mới).
- **Bước 3.1: Technical Backend Capture (Đối với Simulator/Interactive Project)**:
    - Bắt buộc chụp "Nội soi" các thành phần kỹ thuật: Variables Panel, Trigger Logic, và JS Bridge.
    - Phải có bằng chứng **Data Sync**: Ảnh chụp Storyline UI cạnh ảnh chụp Google Sheets/Database để chứng minh logic khớp 100%.
    - Thực hiện **Boundary Testing**: Chụp đủ 3 trạng thái cực hạn (0%, 50/40%, 100%) để làm tư liệu Case Study.
- Mô tả rõ: "Tôi đã nhìn thấy những gì trong ảnh và tôi cam kết mọi thứ đã ổn định."

### Bước 4: Tự động sửa Side-effect
- Nếu phát hiện bất kỳ lỗi lắt nhắc nào phát sinh do thêm thông tin mới -> TỰ ĐỘNG SỬA NGAY.
- Tham khảo file `layout-troubleshooting-log.md` để áp dụng các workflow khắc phục "Hố Đen", "Tiêu Đề Mồ Côi", hay "Lỗi In Nghiêng".
- Lặp lại Bước 2 cho đến khi đạt độ hoàn hảo 100%.

### Bước 5: Bàn giao & Phê duyệt
- Chỉ bàn giao khi đã tự tin 100% vào tính toàn cục của sản phẩm.
- Đề xuất cho Hoàng Phi các phần có thể lược bớt nếu nội dung tương lai trở nên quá dày.

---
// turbo-all
