# Thiết kế trang Đào tạo tuyển dụng

## Mục tiêu

Tạo trang `/tuyen-dung/dao-tao` giới thiệu chương trình đào tạo nghiệp vụ của Bảo vệ Thế An. Nội dung tham khảo chủ đề từ trang `baovechatluongcao.com/dao-tao` nhưng được viết lại hoàn toàn cho thương hiệu Thế An, không sử dụng tên doanh nghiệp, thông tin liên hệ, hình ảnh hoặc căn cứ pháp lý của đơn vị nguồn.

Trang phải giúp ứng viên hiểu họ sẽ được học gì, trải qua quy trình nào và được đánh giá ra sao trước khi nhận việc. Phần hình ảnh được chuẩn bị sẵn về bố cục nhưng dùng trạng thái chờ cho đến khi khách hàng cung cấp ảnh thật.

## Kiến trúc nội dung

1. Banner dùng `PageBanner`, tiêu đề “Đào tạo nghiệp vụ”, breadcrumb thuộc nhóm “Tuyển dụng”.
2. Phần mở đầu giải thích vai trò của đào tạo trong chất lượng dịch vụ và cam kết huấn luyện bài bản của Thế An.
3. Năm mô-đun đào tạo:
   - Nghiệp vụ bảo vệ
   - Phòng cháy chữa cháy
   - Sơ cấp cứu
   - Xử lý tình huống
   - Giao tiếp và tác phong
4. Quy trình đào tạo gồm tiếp nhận, học lý thuyết, thực hành tình huống và đánh giá đầu ra.
5. Khu vực thư viện ảnh có các khung chờ trung tính, ghi rõ ảnh thực tế sẽ được cập nhật sau; không tải hoặc tái sử dụng ảnh từ trang tham khảo.
6. Khối kêu gọi hành động dẫn ứng viên đến trang yêu cầu tuyển dụng hoặc liên hệ bộ phận tuyển dụng.

## Nội dung và dữ liệu

Nội dung riêng của trang được đặt trong một mô-đun dữ liệu độc lập để phần giao diện chỉ chịu trách nhiệm hiển thị. Các tuyên bố phải thống nhất với dữ liệu hiện có của dự án:

- Khóa đào tạo nhập cuộc 120 giờ.
- Đào tạo bổ sung định kỳ hàng quý.
- Nội dung gồm PCCC, sơ cấp cứu, xử lý tình huống và tác phong.
- Ứng viên được đánh giá đầu ra trước khi nhận việc.

Không bổ sung số chứng nhận, tên cơ quan huấn luyện hoặc tuyên bố pháp lý chưa được người dùng cung cấp.

## Thiết kế giao diện

Trang tiếp tục hệ màu navy, vàng và nền kem của website. Các mô-đun đào tạo dùng bố cục editorial thoáng, biểu tượng nét mảnh và số thứ tự để đồng bộ với trang “Yêu cầu ứng viên”. Quy trình sử dụng timeline dễ đọc trên desktop và xếp dọc trên mobile.

Khu vực ảnh không dùng hình minh họa giả. Mỗi khung chờ có tỷ lệ ảnh cố định để khi thay ảnh thật không làm thay đổi bố cục hoặc gây dịch chuyển nội dung.

## Khả năng truy cập và trạng thái lỗi

- Cấu trúc heading theo thứ tự hợp lý.
- Danh sách mô-đun và quy trình dùng phần tử danh sách có ngữ nghĩa.
- Biểu tượng trang trí được ẩn khỏi trình đọc màn hình.
- Liên kết có trạng thái focus rõ ràng.
- Khung chờ ảnh có nội dung chữ, không phụ thuộc vào màu sắc để truyền đạt trạng thái.

Trang là nội dung tĩnh nên không có luồng tải dữ liệu hoặc trạng thái lỗi mạng.

## Kiểm thử

- Kiểm tra dữ liệu đào tạo và các liên kết điều hướng bằng test Node hiện có của dự án.
- Chạy lint và build.
- Kiểm tra route trên kích thước desktop và mobile.
- Xác nhận trang không chứa tên “Thanh Bình Phú Mỹ”, hotline của nguồn hoặc các căn cứ pháp lý sao chép từ trang tham khảo.

## Ngoài phạm vi

- Chưa thêm ảnh thật hoặc chức năng quản trị thư viện ảnh.
- Không thay đổi nội dung các trang tuyển dụng khác.
- Không cập nhật hoặc diễn giải quy định pháp luật về kinh doanh dịch vụ bảo vệ.
