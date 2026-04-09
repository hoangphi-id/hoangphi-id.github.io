# LAYOUT & PAGINATION TROUBLESHOOTING LOG
Đây là tài liệu ghi nhận các lỗi thường gặp trong quá trình làm CV dạng HTML/CSS để xuất PDF, nhằm rút kinh nghiệm cho các workflow sau này.

## 1. Lỗi "Hố Đen" Cuối Trang (Black Hole Gaps)
- **Căn bệnh:** Khoảng trắng khổng lồ ở cuối trang, thường xuất hiện khi một mục (section) bị đẩy toàn bộ sang trang sau.
- **Nguyên nhân:** Việc lạm dụng class `.concrete-block` với `page-break-inside: avoid !important;` cho CÁC MỤC QUÁ DÀI (chiếm hơn 30-40% trang). Trình duyệt thấy khối này không vừa phần còn lại của trang, nên thà đẩy nó toàn bộ sang trang sau còn hơn là vi phạm luật `avoid`.
- **Giải pháp (Workflow):**
    - **Không dùng** `page-break-inside: avoid` cho những mục Experience dài có nhiều bullet points (ví dụ: EngTalk, ZIM). Hãy để các bullet tự do chảy sang trang sau.
    - **Nên dùng** class bảo vệ cho mục Tóm tắt nhỏ (Summary, Skills, Education) hoặc các nhóm nhỏ gọn để giữ chúng liền mạch.

## 2. Tiêu Đề Mồ Côi (Orphaned Headers)
- **Căn bệnh:** Tiêu đề mục (VD: Đầu mục công việc, tên công ty) nằm đơn độc ở cuối trang trước, còn nội dung (bullet points) nằm trơ trọi ở đầu trang sau.
- **Nguyên nhân:** Thiếu sự kết dính giữa Tiêu đề và khối nội dung. Khi khối nội dung tự do ngắt trang, nó để lại Tiêu đề gốc.
- **Giải pháp (Workflow):**
    - Nhóm các dòng Header (Tên Job/Date/Company) vào một `div` (ví dụ: `<div class="exp-header-group">`).
    - Bổ sung luật CSS thép cho nhóm này:
      ```css
      .exp-header-group {
          page-break-inside: avoid;
          page-break-after: avoid; /* Lệnh quan trọng nhất, bắt buộc dính chặt vào phần tử đứng ngay sau nó (thường là <ul>) */
      }
      ```
    - Nếu cần chắc ăn hơn, có thể dùng `li:first-of-type { page-break-before: avoid; }` để ép bullet point đầu tiên dính vào thẻ `ul` (do đó dính vào Header).

## 3. Lỗi In Nghiêng "Lỳ Lợm" (Stubborn Italics)
- **Căn bệnh:** Đã thêm `font-style: italic` vào CSS nhưng trình duyệt/xuất PDF vẫn hiện chữ thẳng, gây khó phân biệt giữa Company Description và Bullet points.
- **Nguyên nhân:** Sự ghi đè CSS từ các thẻ cha, hoặc font chữ không hỗ trợ native italic dẫn đến trình duyệt bỏ qua nếu ưu tiên class khác.
- **Giải pháp (Workflow):**
    - CSS: Thêm `!important` vào thuộc tính (VD: `font-style: italic !important;`).
    - Hoặc giải pháp vật lý: Bọc trực tiếp nội dung bằng thẻ `<em> Nội dung </em>`. Đừng tin tưởng hoàn toàn vào class CSS nếu không có `!important`.

## 4. Spacing Liên Quan Đến Trang Mục Lục (Pagination Margins)
- **Căn bệnh:** Nội dung nằm quá sát mép hoặc quá cao trên trang mới, hoặc vi phạm limit 3 trang.
- **Nguyên nhân:** Không kiểm soát tốt `margin` hoặc `padding` ở các điểm ngắt trang.
- **Giải pháp (Workflow / Future Proofing):**
    - Mỗi khi có New Entry, phải chủ động giảm `margin-bottom` hoặc `line-height` để nén thiết kế (Compress Layout) hoặc đưa ra cảnh báo cắt bớt Tier 4 Experience.
    - Test trực tiếp bằng màn hình / Browser subagent thay vì chỉ nhìn vào code. Chữ đẹp trong code nhưng ra PDF sẽ toang.

## QUY TRÌNH "HÀN XÌ" MỘT FILE MỚI:
1. Wrap toàn bộ Job/Education vào `<section>`.
2. Tạo `<div class="exp-header-group">` chứa Job Title, Date, Company, Location, Description. Áp dụng `page-break-inside: avoid` và `page-break-after: avoid`.
3. Cho phép `<ul>` tự động dãn cách xuống trang dưới (không bọc `<ul>` trong concrete-block nếu nó quá 3 bullets).
4. Áp dụng `.concrete-block` toàn diện chỉ cho những khối đặc/ngắn như Skills, Education, Certifications.
