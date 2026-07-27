# Thiết kế lại Hero trang chủ

## Mục tiêu

Làm banner hero nổi bật hơn theo tinh thần của ảnh tham chiếu, nhưng vẫn giữ hero phủ toàn bộ chiều rộng và chiều cao màn hình. Giữ nguyên nội dung, hai CTA, ảnh `hero-banner1.png` và dữ liệu `STATS`.

## Bố cục

- Header tiếp tục phủ trong suốt phía trên hero và chuyển trạng thái theo hành vi hiện tại.
- Hero có chiều cao tối thiểu bằng một màn hình, với nội dung chính nằm trong container rộng tối đa 1280px.
- Khối tiêu đề, mô tả và CTA được giới hạn khoảng 600–680px và căn trái ở vùng trống của ảnh.
- Nhân viên bảo vệ ở nửa phải ảnh là điểm nhấn thị giác chính; cách crop được điều chỉnh theo breakpoint để không che khuôn mặt.
- STATS nằm ở chân hero trong một dải nền navy bán trong suốt, có viền sáng nhẹ và hiệu ứng blur vừa đủ. Dải này là một phần của hero, không thay thế bằng đánh giá khách hàng.

## Xử lý hình ảnh và độ tương phản

- Dùng ảnh hiện có qua `next/image` với chế độ `fill`, `sizes="100vw"` và `preload` theo API Next.js 16.
- Phủ gradient navy đậm từ trái sang phải để vùng chữ có độ tương phản cao, trong khi phía phải vẫn đủ sáng để làm nổi bật nhân vật.
- Thêm gradient dọc nhẹ ở phía trên cho header và phía dưới cho dải STATS.
- Không thêm panel lớn phía sau nội dung vì sẽ che ảnh và làm hero nặng thị giác.

## Typography và CTA

- Tiêu đề dùng cỡ chữ responsive, đậm, khoảng cách dòng chặt và bám theo typography hiện tại.
- Dòng thứ hai tiếp tục xuống hàng có chủ đích để tạo nhịp đọc rõ.
- CTA chính dùng màu xanh thương hiệu; CTA phụ dùng nền trắng bán trong suốt, viền sáng và blur nhẹ.
- Các trạng thái hover và focus phải rõ ràng, giữ vùng bấm tối thiểu phù hợp trên thiết bị cảm ứng.

## STATS responsive

- Desktop: bốn chỉ số trên một hàng, ngăn cách bằng đường dọc mảnh.
- Mobile: lưới hai cột, hai hàng; có đường phân cách ngang và dọc nhưng không tạo viền thừa ở mép ngoài.
- Giữ nguyên giá trị và nhãn từ `STATS`; không sao chép dữ liệu trực tiếp vào component.

## Khả năng truy cập và hiệu năng

- Giữ cấu trúc heading và link có nghĩa, alt mô tả đúng nội dung ảnh.
- Màu chữ trắng trên lớp phủ phải đạt độ tương phản tốt ở mọi breakpoint.
- Không thêm animation liên tục; chuyển trạng thái hover tôn trọng thiết lập giảm chuyển động hiện có.
- Hero không tạo layout shift và không thay đổi logic nhận biết vùng overlay của Header/FloatingContact.

## Kiểm thử và xác minh

- Kiểm thử render xác nhận hero vẫn có `data-home-hero`, hai CTA và toàn bộ STATS.
- Chạy lint/type checking/build theo script hiện có.
- Kiểm tra trực quan desktop và mobile để xác nhận crop ảnh, khả năng đọc, vị trí header và dải STATS.

## Ngoài phạm vi

- Không thay đổi nội dung marketing hoặc dữ liệu STATS.
- Không thay ảnh hero, header, các section bên dưới hay hành vi điều hướng.
- Không thêm carousel, video nền hoặc hiệu ứng animation mới.
