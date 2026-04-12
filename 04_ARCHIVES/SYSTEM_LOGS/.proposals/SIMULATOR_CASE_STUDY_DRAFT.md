# 📊 CASE STUDY: THE DEADLINE CRISIS SIMULATOR
**Project:** Behavioral Branching Simulation & Data Pipeline
**Role:** Learning Experience Architect / Full-Stack ID
**Date:** April 2026
**Tools:** Articulate Storyline 360, JavaScript, Google Apps Script, Google Sheets

---

## 1. THE CHALLENGE (Vấn đề)
Kỹ năng quản trị dự án và giao tiếp trong khủng hoảng (Crisis Management) thường được đào tạo thông qua lý thuyết hoặc video thụ động. Điều này dẫn đến một "khoảng cách năng lực" (Skill Gap): Học viên có thể thuộc lòng quy trình nhưng lại hoảng loạn khi đối mặt với áp lực thực tế từ khách hàng.

**Mục tiêu:** Tạo ra một môi trường an toàn nhưng áp lực cao để ứng viên thực hành ra quyết định và đo lường được "độ tin cậy" (Trust) của họ thông qua các hành vi cụ thể.

## 2. THE SOLUTION (Giải pháp)
Tao đã xây dựng **"The Deadline Crisis Simulator"** — một kịch bản rẽ nhánh (Branching Scenario) với:
- **27 hướng đi tiềm năng:** Mỗi lựa chọn dẫn đến một kết quả khác nhau, mô phỏng sự phức tạp của thực tế.
- **Biến định tính (TrustScore):** Một hệ thống điểm số ẩn để theo dõi mức độ tin tưởng của Giám đốc dự án dành cho người chơi.
- **High-Stakes Feedback:** Phản hồi từ nhân vật Lily (Project Director) thay đổi theo thời gian thực dựa trên điểm số TrustScore.

## 3. THE INNOVATION: THE DATA BRIDGE (Đổi mới kỹ thuật)
Đây là điểm khác biệt lớn nhất giữa dự án này và các khóa học Storyline thông thường.

**Vấn đề kỹ thuật:** Storyline mặc định cần một LMS đắt tiền để lưu điểm. Tao muốn một hệ thống **Serverless & Zero-cost**.
**Giải pháp:**
- **Custom JavaScript:** Sử dụng Fetch API để "bắn" dữ liệu (Tên, Email, TrustScore, Kết quả) trực tiếp từ Storyline.
- **Google Apps Script Webhook:** Tự động nhận dữ liệu, ghi vào Google Sheets và kích hoạt một hệ thống Email tự động.
- **Automated Reporting:** Ngay khi hoàn thành, học viên sẽ nhận được một email báo cáo chi tiết về hiệu suất của mình.

## 4. TECH STACK (Công nghệ sử dụng)
- **Front-end:** Articulate Storyline 360 (Logic & Assets).
- **Middleware:** JavaScript (Asynchronous POST requests).
- **Backend:** Google Apps Script (Webhook logic).
- **Cloud Storage:** Google Sheets (Learning Analytics Dashboard).

## 5. IMPACT & RESULTS (Kết quả)
- **Measurable Behavior:** Lần đầu tiên, chúng ta có thể thấy chính xác ứng viên "ngã" ở đâu trong kịch bản giao tiếp.
- **Zero Cost:** Toàn bộ hạ tầng thu thập dữ liệu là hoàn toàn miễn phí, tiết kiệm hàng ngàn USD chi phí quản lý hàng năm.
- **Scalability:** Hệ thống này có thể áp dụng cho bất kỳ khóa học nào cần theo dõi hành vi chi tiết mà không cần LMS truyền thống.

---
*Created by Phi Tong - Learning Experience Architect.*
