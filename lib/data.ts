import type {
    NavLink,
    Stat,
    TrustItem,
    CoreValue,
    Service,
    WhyReason,
    ProcessStep,
    Standard,
    Article,
    Testimonial,
    CompanyInfo,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Năng lực", href: "#why" },
    { label: "Quy trình", href: "#process" },
    { label: "Khách hàng", href: "#clients" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Liên hệ", href: "/lien-he" },
];

export const STATS: Stat[] = [
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "500+", label: "Nhân sự chính thức" },
    { value: "200+", label: "Khách hàng doanh nghiệp" },
    { value: "24/7", label: "Giám sát ca trực" },
];

export const TRUST_ITEMS: TrustItem[] = [
    { label: "Nhà máy" },
    { label: "Tòa nhà" },
    { label: "Chung cư" },
    { label: "Kho bãi" },
    { label: "Công trình" },
    { label: "Sự kiện" },
];

export const CORE_VALUES: CoreValue[] = [
    {
        title: "Kỷ luật",
        description: "Tuân thủ quy trình, điều lệnh nghiêm ngặt trong mọi ca trực.",
    },
    {
        title: "Trách nhiệm",
        description: "Cam kết bảo vệ tài sản và an toàn cho khách hàng.",
    },
    {
        title: "Tận tâm",
        description: "Phục vụ chuyên nghiệp, chu đáo từ chi tiết nhỏ nhất.",
    },
    {
        title: "An toàn",
        description: "Ưu tiên phòng ngừa, xử lý tình huống nhanh chóng.",
    },
];

export const SERVICES: Service[] = [
    {
        code: "DV · 01",
        name: "Bảo vệ tòa nhà",
        description:
            "Kiểm soát ra vào, tuần tra định kỳ, hỗ trợ cư dân và phối hợp ban quản lý.",
        location: "Tòa nhà văn phòng — Quận 1",
    },
    {
        code: "DV · 02",
        name: "Bảo vệ nhà máy",
        description:
            "Bảo đảm an ninh khu sản xuất, kiểm soát phương tiện ra vào và phòng cháy chữa cháy.",
        location: "Khu công nghiệp — Bình Dương",
    },
    {
        code: "DV · 03",
        name: "Bảo vệ kho bãi",
        description:
            "Giám sát hàng hóa, xuất nhập kho và camera 24/7 theo quy trình chuẩn.",
        location: "Kho phân phối — Long An",
    },
    {
        code: "DV · 04",
        name: "Bảo vệ công trình",
        description:
            "Quản lý vật tư, nhân công ra vào và an ninh khu vực thi công.",
        location: "Công trường — TP.HCM",
    },
    {
        code: "DV · 05",
        name: "Bảo vệ sự kiện",
        description:
            "Triển khai nhanh, kiểm soát đám đông và phối hợp đơn vị tổ chức.",
        location: "Sự kiện doanh nghiệp",
    },
    {
        code: "DV · 06",
        name: "Bảo vệ cửa hàng / siêu thị",
        description:
            "Phòng chống thất thoát, hỗ trợ khách hàng và xử lý tình huống.",
        location: "Chuỗi bán lẻ — Hà Nội",
    },
];

export const WHY_REASONS: WhyReason[] = [
    {
        number: "01",
        title: "Nhân sự được tuyển chọn kỹ lưỡng",
        description:
            "Kiểm tra lý lịch tư pháp, sức khỏe và tác phong trước khi vào ca.",
    },
    {
        number: "02",
        title: "Đào tạo nghiệp vụ định kỳ",
        description:
            "Chương trình huấn luyện bảo vệ — PCCC — sơ cấp cứu hàng quý.",
    },
    {
        number: "03",
        title: "Giám sát ca trực 24/7",
        description:
            "Trung tâm điều hành kết hợp tổ giám sát cơ động kiểm tra hiện trường.",
    },
    {
        number: "04",
        title: "Quy trình xử lý sự cố rõ ràng",
        description:
            "Phương án ứng phó được soạn thảo, diễn tập theo từng loại tình huống.",
    },
    {
        number: "05",
        title: "Báo cáo minh bạch",
        description:
            "Báo cáo ca trực, sự cố và đánh giá định kỳ gửi đến khách hàng.",
    },
    {
        number: "06",
        title: "Phương án theo từng mô hình",
        description:
            "Khảo sát thực địa, thiết kế giải pháp an ninh phù hợp quy mô vận hành.",
    },
];

export const CERTIFICATIONS = [
    "Giấy phép ANTT",
    "ISO 9001:2015",
    "Chứng chỉ PCCC",
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        number: "01",
        title: "Tiếp nhận nhu cầu",
        description: "Tư vấn ban đầu qua hotline hoặc email.",
    },
    {
        number: "02",
        title: "Khảo sát địa điểm",
        description: "Đánh giá thực địa, rủi ro và đặc thù vận hành.",
    },
    {
        number: "03",
        title: "Đề xuất phương án",
        description: "Thiết kế giải pháp an ninh, nhân sự và thiết bị.",
    },
    {
        number: "04",
        title: "Ký hợp đồng",
        description: "Cam kết SLA, phạm vi và trách nhiệm rõ ràng.",
    },
    {
        number: "05",
        title: "Triển khai nhân sự",
        description: "Bố trí ca trực, bàn giao theo điều lệnh.",
    },
    {
        number: "06",
        title: "Giám sát & báo cáo",
        description: "Kiểm tra định kỳ, báo cáo minh bạch.",
    },
];

export const STANDARDS: Standard[] = [
    {
        code: "TC-01",
        name: "Kiểm tra lý lịch nhân sự",
        frequency: "Bắt buộc trước tuyển",
    },
    {
        code: "TC-02",
        name: "Đào tạo nghiệp vụ bảo vệ",
        frequency: "120 giờ / khóa",
    },
    {
        code: "TC-03",
        name: "Kỹ năng phòng cháy chữa cháy",
        frequency: "Định kỳ hàng quý",
    },
    {
        code: "TC-04",
        name: "Kỹ năng xử lý tình huống",
        frequency: "Diễn tập thường xuyên",
    },
    {
        code: "TC-05",
        name: "Tác phong, giao tiếp, điều lệnh",
        frequency: "Đánh giá tháng",
    },
    {
        code: "TC-06",
        name: "Giám sát và đánh giá định kỳ",
        frequency: "Báo cáo hàng tuần",
    },
];

export const CLIENTS = [
    "VINACONEX",
    "PHÚ MỸ HƯNG",
    "VIETCOMBANK",
    "AEON MALL",
    "VIN GROUP",
    "TOYOTA",
    "PETROVIET",
    "FPT TOWER",
    "SUN GROUP",
    "LOTTE",
    "NESTLÉ VN",
    "GAMUDA",
];

export const TESTIMONIAL: Testimonial = {
    quote: "Đội ngũ bảo vệ làm việc đúng quy trình, tác phong chuyên nghiệp và phối hợp tốt với ban quản lý tòa nhà. Báo cáo ca trực rõ ràng, sự cố được xử lý nhanh và minh bạch.",
    name: "Ông Nguyễn Văn Tuấn",
    title: "Trưởng Ban Quản lý — Tòa nhà Centec, Quận 3",
    initials: "NV",
    summary: [
        { label: "Mô hình", value: "Tòa nhà văn phòng" },
        { label: "Thời gian", value: "06 / 2019 — nay" },
        { label: "Nhân sự ca trực", value: "18 người" },
        { label: "Phạm vi", value: "An ninh + lễ tân" },
    ],
};

export const NEWS_ARTICLES: Article[] = [
    {
        category: "Kinh nghiệm",
        date: "12 · 05 · 2026",
        title: "Kinh nghiệm lựa chọn công ty bảo vệ uy tín cho doanh nghiệp",
        excerpt:
            "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn.",
        imageLabel: "ART · 01",
    },
    {
        category: "Quy trình",
        date: "28 · 04 · 2026",
        title: "Quy trình bảo vệ nhà máy chuyên nghiệp theo chuẩn doanh nghiệp",
        excerpt:
            "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp.",
        imageLabel: "ART · 02",
    },
    {
        category: "Nhân sự",
        date: "15 · 04 · 2026",
        title: "Những tiêu chuẩn cần có của một nhân viên bảo vệ chuyên nghiệp",
        excerpt:
            "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp.",
        imageLabel: "ART · 03",
    },
];

export const FOOTER_LINKS: NavLink[] = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Quy trình", href: "#process" },
    { label: "Khách hàng", href: "#clients" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Liên hệ", href: "/lien-he" },
];

export const FOOTER_SERVICES: NavLink[] = [
    { label: "Bảo vệ tòa nhà", href: "#services" },
    { label: "Bảo vệ nhà máy", href: "#services" },
    { label: "Bảo vệ kho bãi", href: "#services" },
    { label: "Bảo vệ công trình", href: "#services" },
    { label: "Bảo vệ sự kiện", href: "#services" },
    { label: "Bảo vệ cửa hàng", href: "#services" },
];

export const COMPANY: CompanyInfo = {
    name: "Bảo vệ Thế An",
    fullName: "Công ty Cổ phần Dịch vụ Bảo vệ Thế An",
    description:
        "Đơn vị cung cấp giải pháp an ninh chuyên nghiệp cho doanh nghiệp Việt Nam từ năm 2014.",
    address: "Tầng 8, Tòa nhà Centec, 72–74 Nguyễn Thị Minh Khai, Q.3, TP. Hồ Chí Minh",
    hotline: "1900 8688",
    email: "contact@baovethean.vn",
    hours: "T2 – T7: 08:00 – 17:30 · Hotline khẩn cấp 24/7",
    mst: "0312345678",
};
