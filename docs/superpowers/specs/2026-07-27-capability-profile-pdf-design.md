# Thiết kế tích hợp PDF hồ sơ năng lực

## Mục tiêu

Đưa file `Hồ sơ năng lực.pdf` lên trang `/ho-so-nang-luc` để khách truy cập có thể xem trực tiếp trong trình duyệt hoặc tải file về.

## Phạm vi

- Chuyển PDF vào thư mục tài nguyên công khai với tên URL ổn định, không dấu.
- Thay trạng thái “đang cập nhật” hiện tại bằng khu vực xem PDF trực tiếp.
- Cung cấp hai hành động rõ ràng: mở PDF toàn màn hình trong tab mới và tải PDF xuống.
- Giữ nguyên phần giới thiệu và danh sách nội dung hồ sơ đang có trên trang.

## Thiết kế giao diện

Trang tiếp tục dùng phần hero hiện tại. Bên dưới là khối giới thiệu ngắn và các nút hành động, tiếp theo là trình xem PDF theo chiều rộng nội dung. Khung xem có chiều cao phù hợp trên máy tính và thu gọn trên màn hình nhỏ.

Nếu trình duyệt không hỗ trợ nhúng PDF, nội dung dự phòng cung cấp liên kết mở tài liệu trực tiếp. Nút tải xuống sử dụng thuộc tính `download`; nút mở toàn màn hình mở PDF trong tab mới.

## Kiến trúc và luồng dữ liệu

PDF là tài nguyên tĩnh trong `public/documents/ho-so-nang-luc.pdf`. Trang server component tham chiếu trực tiếp tới URL `/documents/ho-so-nang-luc.pdf`; không cần API, cơ sở dữ liệu hay thư viện PDF phía máy khách.

## Xử lý lỗi

- Tên file URL dùng ký tự ASCII để tránh lỗi mã hóa đường dẫn.
- Nội dung dự phòng trong phần tử nhúng cho phép người dùng mở PDF nếu trình xem tích hợp không hoạt động.
- Các liên kết mở tab mới có thuộc tính bảo mật phù hợp.

## Kiểm thử

- Xác nhận file PDF tồn tại tại đường dẫn công khai và không rỗng.
- Chạy kiểm tra lint/type/build phù hợp với dự án.
- Kiểm tra trang hiển thị khung PDF và cả hai hành động đều trỏ đúng file.
- Kiểm tra bố cục responsive và nội dung dự phòng.

## Ngoài phạm vi

- Trình đọc PDF tùy chỉnh bằng PDF.js.
- Quản lý hoặc thay PDF qua Payload CMS.
- Chỉnh sửa nội dung bên trong file PDF.
