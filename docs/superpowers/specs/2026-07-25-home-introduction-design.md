# Thiết kế section giới thiệu trang chủ

## Mục tiêu

Chèn một section giới thiệu công ty giữa `Hero` và `Services`, lấy cảm hứng từ ảnh mẫu: nhận diện thương hiệu xanh navy/vàng, thông tin công ty, số liệu nổi bật, nội dung giới thiệu và các điểm mạnh.

## Phương án được chọn

Tạo component mới `HomeIntroduction` dành riêng cho homepage thay vì ghép các component About hiện có. Component này tự quản lý bố cục và dữ liệu tĩnh của section, giúp phần homepage bám sát ảnh mẫu mà không ảnh hưởng trang Giới thiệu.

## Bố cục

1. Header căn giữa với eyebrow “Về chúng tôi”, tiêu đề công ty và tagline.
2. Khối thông tin chính dạng hai cột: card thông tin công ty bên trái, ảnh/visual bảo vệ bên phải. Trên mobile chuyển thành một cột.
3. Thanh số liệu 4 ô: kinh nghiệm, khách hàng, nhân viên và mục tiêu bảo vệ.
4. Khối “Giới thiệu công ty” gồm tiêu đề, ba đoạn mô tả và watermark/visual nền nhẹ.
5. Hàng 4 card điểm mạnh: uy tín, đội ngũ chuyên nghiệp, hỗ trợ 24/7 và đồng hành bền vững.

## Tích hợp

`app/(frontend)/page.tsx` sẽ render `<HomeIntroduction />` ngay sau `<Hero />` và trước `<Services />`. Các section còn lại giữ nguyên.

## Responsive và accessibility

- Dùng Tailwind responsive utilities; không cố định chiều cao trên mobile.
- Ảnh dùng `next/image` với alt text có ý nghĩa; nếu thiếu ảnh phù hợp, dùng visual CSS/icon thay vì ảnh mẫu nhúng cứng.
- Tiêu đề section dùng heading hierarchy; các số liệu dùng danh sách mô tả semantic.

## Kiểm thử

- Chạy lint/typecheck/build phù hợp với scripts của dự án.
- Kiểm tra section ở mobile và desktop bằng build hiện tại, bảo đảm không gây lỗi hydration hoặc layout overflow.
