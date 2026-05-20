import type { BlogArticle, BlogCategory } from "@/types";

export const BLOG_PER_PAGE = 9;

export const BLOG_CATEGORIES: BlogCategory[] = [
    { label: "Kinh nghiệm", slug: "kinh-nghiem" },
    { label: "Quy trình", slug: "quy-trinh" },
    { label: "Nhân sự", slug: "nhan-su" },
    { label: "Bảo vệ nhà máy", slug: "bao-ve-nha-may" },
    { label: "An ninh doanh nghiệp", slug: "an-ninh-doanh-nghiep" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: "quy-trinh-trien-khai-bao-ve-nha-may",
        category: "Bảo vệ nhà máy",
        date: "12 · 05 · 2026",
        title: "Quy trình triển khai dịch vụ bảo vệ nhà máy chuyên nghiệp",
        excerpt:
            "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ.",
        content:
            "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ ngay từ ngày đầu tiên triển khai. Bài viết tổng hợp kinh nghiệm thực tế tại các khu công nghiệp Bình Dương, Đồng Nai và Long An.",
        imageLabel: "IMG · F01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 8,
        featured: true,
    },
    {
        slug: "kinh-nghiem-lua-chon-cong-ty-bao-ve",
        category: "Kinh nghiệm",
        date: "12 · 05 · 2026",
        title: "Kinh nghiệm lựa chọn công ty bảo vệ uy tín cho doanh nghiệp",
        excerpt:
            "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn.",
        content:
            "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn. Từ giấy phép, kinh nghiệm, quy trình đào tạo đến chế độ giám sát và cam kết SLA.",
        imageLabel: "ART · 01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "quy-trinh-bao-ve-nha-may-chuyen-nghiep",
        category: "Quy trình",
        date: "28 · 04 · 2026",
        title: "Quy trình bảo vệ nhà máy chuyên nghiệp theo chuẩn doanh nghiệp",
        excerpt:
            "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp.",
        content:
            "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp. Áp dụng tại hơn 50 nhà máy trên toàn quốc.",
        imageLabel: "ART · 02",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "tieu-chuan-nhan-vien-bao-ve-chuyen-nghiep",
        category: "Nhân sự",
        date: "15 · 04 · 2026",
        title: "Những tiêu chuẩn cần có của một nhân viên bảo vệ chuyên nghiệp",
        excerpt:
            "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp.",
        content:
            "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp với nhân viên bảo vệ thông thường.",
        imageLabel: "ART · 03",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 5,
    },
    {
        slug: "giai-phap-an-ninh-toa-nha-van-phong",
        category: "An ninh doanh nghiệp",
        date: "08 · 04 · 2026",
        title: "Giải pháp an ninh toàn diện cho tòa nhà văn phòng hạng A",
        excerpt:
            "Hệ thống kiểm soát ra vào, tuần tra định kỳ và phối hợp BQL — mô hình an ninh hiệu quả cho tòa nhà thương mại.",
        content:
            "Hệ thống kiểm soát ra vào, tuần tra định kỳ và phối hợp BQL — mô hình an ninh hiệu quả cho tòa nhà thương mại tại TP.HCM và Hà Nội.",
        imageLabel: "ART · 04",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "dao-tao-ky-nang-pccc-cho-bao-ve",
        category: "Nhân sự",
        date: "01 · 04 · 2026",
        title: "Đào tạo kỹ năng PCCC cho đội ngũ bảo vệ chuyên nghiệp",
        excerpt:
            "Chương trình huấn luyện PCCC 40 giờ — từ lý thuyết đến thực hành diễn tập tại hiện trường.",
        content:
            "Chương trình huấn luyện PCCC 40 giờ bắt buộc cho toàn bộ nhân viên bảo vệ, bao gồm lý thuyết, thực hành sử dụng bình chữa cháy và diễn tập sơ tán.",
        imageLabel: "ART · 05",
        author: "Phòng Đào tạo — Bảo vệ Thế An",
        authorInitials: "PĐ",
        readTime: 5,
    },
    {
        slug: "bao-ve-kho-bai-logistics",
        category: "Quy trình",
        date: "25 · 03 · 2026",
        title: "Bảo vệ kho bãi logistics — kiểm soát hàng hóa và phương tiện",
        excerpt:
            "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển tại các khu logistics lớn.",
        content:
            "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển tại các khu logistics lớn tại Bình Dương và Long An.",
        imageLabel: "ART · 06",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "an-ninh-su-kien-quy-mo-lon",
        category: "Kinh nghiệm",
        date: "18 · 03 · 2026",
        title: "Kinh nghiệm tổ chức an ninh cho sự kiện quy mô lớn",
        excerpt:
            "Triển khai nhanh, kiểm soát đám đông và phối hợp với ban tổ chức — bài học từ các sự kiện 5.000+ người tham dự.",
        content:
            "Kinh nghiệm triển khai đội ngũ an ninh cho các sự kiện 5.000+ người, từ lập phương án, bố trí nhân sự đến xử lý sự cố trong thời gian thực.",
        imageLabel: "ART · 07",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 8,
    },
    {
        slug: "kiem-soat-ra-vao-bang-cong-nghe",
        category: "An ninh doanh nghiệp",
        date: "10 · 03 · 2026",
        title: "Kiểm soát ra vào bằng công nghệ — xu hướng an ninh hiện đại",
        excerpt:
            "Tích hợp thẻ từ, nhận diện khuôn mặt và hệ thống camera AI vào quy trình bảo vệ tòa nhà và khu công nghiệp.",
        content:
            "Xu hướng tích hợp công nghệ vào hệ thống an ninh: thẻ từ, nhận diện khuôn mặt, camera AI — và cách Bảo vệ Thế An áp dụng tại các dự án.",
        imageLabel: "ART · 08",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "quan-ly-ca-truc-bao-ve-hieu-qua",
        category: "Quy trình",
        date: "02 · 03 · 2026",
        title: "Quản lý ca trực bảo vệ hiệu quả — công cụ và phương pháp",
        excerpt:
            "Hệ thống chấm công GPS, báo cáo ca trực tự động và quy trình giám sát đảm bảo nhân viên vận hành đúng cam kết.",
        content:
            "Hệ thống chấm công GPS, báo cáo ca trực tự động và quy trình giám sát đảm bảo nhân viên vận hành đúng cam kết SLA với khách hàng.",
        imageLabel: "ART · 09",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 5,
    },
    {
        slug: "bao-ve-cong-trinh-xay-dung",
        category: "Bảo vệ nhà máy",
        date: "22 · 02 · 2026",
        title: "Đặc thù bảo vệ công trình xây dựng — rủi ro và giải pháp",
        excerpt:
            "Quản lý vật tư, kiểm soát nhân công ra vào và đảm bảo an toàn lao động tại công trường xây dựng.",
        content:
            "Bảo vệ công trình xây dựng đòi hỏi sự kết hợp giữa quản lý vật tư, kiểm soát nhân công và đảm bảo an toàn lao động — những bài học thực tế từ 50+ công trình.",
        imageLabel: "ART · 10",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "tuyen-dung-va-giu-chan-nhan-su-bao-ve",
        category: "Nhân sự",
        date: "15 · 02 · 2026",
        title: "Tuyển dụng và giữ chân nhân sự bảo vệ — thách thức ngành",
        excerpt:
            "Chiến lược tuyển dụng, chế độ đãi ngộ và lộ trình phát triển nghề nghiệp giúp giảm tỷ lệ nghỉ việc dưới 10%.",
        content:
            "Ngành bảo vệ đối mặt tỷ lệ nghỉ việc cao. Bài viết chia sẻ chiến lược tuyển dụng, đãi ngộ và phát triển nghề nghiệp giúp Bảo vệ Thế An duy trì tỷ lệ nghỉ việc dưới 10%.",
        imageLabel: "ART · 11",
        author: "Phòng Nhân sự — Bảo vệ Thế An",
        authorInitials: "NS",
        readTime: 6,
    },
];
