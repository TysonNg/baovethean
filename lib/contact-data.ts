import type {
    ContactBenefit,
    ContactInfoCard,
    Office,
    CoverageRegion,
    FAQItem,
} from "@/types";

export const CONTACT_BENEFITS: ContactBenefit[] = [
    {
        title: "Phản hồi trong 4 giờ",
        description: "Tư vấn ban đầu trong giờ hành chính.",
    },
    {
        title: "Khảo sát miễn phí",
        description: "Trực tiếp tại địa điểm cần triển khai.",
    },
    {
        title: "Báo giá rõ ràng",
        description: "Phạm vi và chi phí minh bạch trong 48 giờ.",
    },
    {
        title: "Cam kết bảo mật",
        description: "Thông tin doanh nghiệp được bảo mật tuyệt đối.",
    },
];

export const CONTACT_INFO_CARDS: ContactInfoCard[] = [
    {
        category: "Hotline 24/7",
        label: "Tư vấn dịch vụ",
        primary: "1900 8688",
        details: ["Tư vấn trực tiếp 24/7", "Cuộc gọi không tính phí"],
    },
    {
        category: "Email công ty",
        label: "Yêu cầu báo giá",
        primary: "contact@baovethean.vn",
        details: ["Phản hồi trong 4 giờ", "Hỗ trợ tiếng Việt & tiếng Anh"],
    },
    {
        category: "Trụ sở chính",
        label: "Văn phòng TP.HCM",
        primary: "Tầng 8, Tòa nhà Centec",
        details: [
            "72–74 Nguyễn Thị Minh Khai, Q.3",
            "Hồ Chí Minh, Việt Nam",
        ],
    },
    {
        category: "Giờ làm việc",
        label: "Khung giờ hành chính",
        primary: "T2 – T7 · 08:00 – 17:30",
        details: [
            "Chủ nhật & ngày lễ: nghỉ",
            "Hotline khẩn cấp hoạt động 24/7",
        ],
    },
    {
        category: "Phạm vi triển khai",
        label: "Toàn quốc",
        primary: "18 tỉnh thành",
        details: ["3 văn phòng vùng", "Phía Bắc · Trung · Nam"],
    },
];

export const OFFICES: Office[] = [
    {
        id: "hcm",
        name: "Trụ sở chính – TP. Hồ Chí Minh",
        label: "TP. Hồ Chí Minh",
        address:
            "Tầng 8, Tòa nhà Centec, 72–74 Nguyễn Thị Minh Khai, Q.3, TP. Hồ Chí Minh",
        phone: "(028) 3823 8688",
    },
    {
        id: "hanoi",
        name: "Văn phòng Hà Nội",
        label: "Hà Nội",
        address:
            "Tầng 5, Tòa nhà Handico, 76 Duy Tân, Cầu Giấy, Hà Nội",
        phone: "(024) 3945 9688",
    },
    {
        id: "danang",
        name: "Văn phòng Đà Nẵng",
        label: "Đà Nẵng",
        address:
            "Tầng 3, Tòa nhà Indochina Riverside, 74 Bạch Đằng, Hải Châu, Đà Nẵng",
        phone: "(0236) 3845 9688",
    },
    {
        id: "binhduong",
        name: "Chi nhánh Bình Dương",
        label: "Bình Dương",
        address:
            "Lô A12, KCN VSIP II-A, Phường Vĩnh Tân, TP. Tân Uyên, Bình Dương",
        phone: "(0274) 3658 8688",
    },
];

export const COVERAGE_REGIONS: CoverageRegion[] = [
    {
        code: "VÙNG · 01",
        name: "Miền Nam",
        provinces: [
            "TP. Hồ Chí Minh",
            "Bình Dương",
            "Đồng Nai",
            "Long An",
            "Bà Rịa – Vũng Tàu",
            "Tây Ninh",
            "Tiền Giang",
            "Cần Thơ",
        ],
    },
    {
        code: "VÙNG · 02",
        name: "Miền Bắc",
        provinces: [
            "Hà Nội",
            "Hải Phòng",
            "Bắc Ninh",
            "Hưng Yên",
            "Vĩnh Phúc",
            "Quảng Ninh",
            "Hải Dương",
            "Hà Nam",
        ],
    },
    {
        code: "VÙNG · 03",
        name: "Miền Trung",
        provinces: [
            "Đà Nẵng",
            "Khánh Hòa",
            "Huế",
            "Quảng Nam",
            "Quảng Ngãi",
            "Bình Định",
            "Phú Yên",
        ],
    },
];

export const CONTACT_FAQS: FAQItem[] = [
    {
        question: "Bảo vệ Thế An phục vụ những loại hình doanh nghiệp nào?",
        answer: "Chúng tôi phục vụ đa dạng loại hình: tòa nhà văn phòng, nhà máy sản xuất, kho bãi logistics, công trình xây dựng, sự kiện và cửa hàng / siêu thị. Mỗi hợp đồng được thiết kế phương án riêng phù hợp đặc thù vận hành.",
    },
    {
        question:
            "Quy trình triển khai một hợp đồng bảo vệ mất bao lâu?",
        answer: "Từ lúc tiếp nhận yêu cầu đến khi triển khai nhân sự thường mất 5–7 ngày làm việc, bao gồm khảo sát thực địa, đề xuất phương án và ký hợp đồng. Trường hợp khẩn cấp có thể triển khai trong 24–48 giờ.",
    },
    {
        question: "Chi phí dịch vụ được tính như thế nào?",
        answer: "Chi phí được tính dựa trên số lượng nhân sự, ca trực, diện tích và đặc thù vận hành của từng dự án. Sau khảo sát, chúng tôi sẽ gửi báo giá chi tiết trong vòng 48 giờ.",
    },
    {
        question:
            "Nhân viên bảo vệ được đào tạo và quản lý ra sao?",
        answer: "Tất cả nhân viên trải qua khóa đào tạo nghiệp vụ 120 giờ, bao gồm kỹ năng PCCC, xử lý tình huống và giao tiếp. Đội ngũ giám sát kiểm tra định kỳ hàng tuần và đánh giá tác phong hàng tháng.",
    },
    {
        question: "Công ty có giấy phép và chứng nhận gì?",
        answer: "Bảo vệ Thế An có đầy đủ Giấy phép hoạt động dịch vụ bảo vệ do Bộ Công an cấp, chứng nhận ISO 9001:2015 về hệ thống quản lý chất lượng, và chứng nhận huấn luyện PCCC.",
    },
    {
        question: "Tôi có thể yêu cầu báo cáo ca trực không?",
        answer: "Có. Chúng tôi cung cấp báo cáo ca trực hàng tuần qua email hoặc hệ thống quản lý trực tuyến. Khách hàng có thể theo dõi tình hình an ninh và các sự cố phát sinh trong thời gian thực.",
    },
    {
        question:
            "Xử lý sự cố trong ca trực được tiến hành như thế nào?",
        answer: "Nhân viên bảo vệ được đào tạo quy trình xử lý sự cố 4 bước: phát hiện, báo cáo, ứng phó và ghi nhận. Mọi sự cố được báo cáo về trung tâm giám sát trong vòng 15 phút và có đội phản ứng nhanh hỗ trợ khi cần.",
    },
];

export const FORM_BUSINESS_OPTIONS = [
    "Tòa nhà văn phòng",
    "Nhà máy / Khu công nghiệp",
    "Kho bãi / Logistics",
    "Công trình xây dựng",
    "Trung tâm thương mại",
    "Cửa hàng / Siêu thị",
    "Khác",
];

export const FORM_SERVICE_OPTIONS = [
    "Bảo vệ tòa nhà",
    "Bảo vệ nhà máy",
    "Bảo vệ kho bãi",
    "Bảo vệ công trình",
    "Bảo vệ sự kiện",
    "Bảo vệ cửa hàng / siêu thị",
];

export const FORM_REGION_OPTIONS = ["Miền Nam", "Miền Bắc", "Miền Trung"];

export const COMMITMENT_STATS = [
    { label: "Phản hồi yêu cầu", value: "4 giờ" },
    { label: "Khảo sát thực địa", value: "2 ngày" },
    { label: "Báo giá chi tiết", value: "48 giờ" },
    { label: "Triển khai nhân sự", value: "5–7 ngày" },
    { label: "Báo cáo định kỳ", value: "Hàng tuần" },
];
