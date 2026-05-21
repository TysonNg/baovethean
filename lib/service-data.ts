import type {
    Stat,
    ServiceHighlight,
    ServiceDetail,
    ProcessStep,
    ServiceStrength,
    ServiceSector,
} from "@/types";

export const SERVICE_HERO_STATS: Stat[] = [
    { value: "06+", label: "Nhóm dịch vụ chính" },
    { value: "200+", label: "Hợp đồng đang vận hành" },
    { value: "18", label: "Tỉnh thành đã triển khai" },
    { value: "24/7", label: "Giám sát ca trực" },
];

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
    {
        code: "PHẦN · 01",
        title: "Phương án theo từng mô hình",
        description:
            "Mỗi khách hàng được khảo sát và thiết kế phương án riêng — phù hợp quy mô, đặc thù vận hành và yêu cầu an ninh thực tế.",
    },
    {
        code: "PHẦN · 02",
        title: "Nhân sự được đào tạo nghiệp vụ",
        description:
            "Đào tạo 120 giờ trước khi vào ca, huấn luyện bổ sung định kỳ và đánh giá tác phong hàng tháng.",
    },
    {
        code: "PHẦN · 03",
        title: "Giám sát và báo cáo định kỳ",
        description:
            "Trung tâm điều hành 24/7 phối hợp tổ giám sát cơ động — báo cáo minh bạch theo cam kết hợp đồng.",
    },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
    {
        code: "DV · 01",
        name: "Bảo vệ tòa nhà",
        tags: ["Chuyên trực", "Quản lý"],
        description:
            "Kiểm soát ra vào, tuần tra định kỳ, hỗ trợ cư dân và phối hợp ban quản lý tòa nhà.",
        features: [
            "Kiểm soát ra vào và giữ xe 24/7",
            "Phối hợp BQL về trật tự, vệ sinh",
            "Tuần tra kỹ thuật và PCCC định kỳ",
            "Hỗ trợ lễ tân, tiếp khách",
        ],
        location: "Tòa nhà văn phòng — Quận 1",
    },
    {
        code: "DV · 02",
        name: "Bảo vệ nhà máy",
        tags: ["Công nghiệp", "PCCC"],
        description:
            "Bảo đảm an ninh khu sản xuất, kiểm soát phương tiện ra vào và phòng cháy chữa cháy.",
        features: [
            "Kiểm soát công nhân và phương tiện",
            "Tuần tra khu vực sản xuất 24/7",
            "Phối hợp đội PCCC nội bộ",
            "Giám sát camera và báo cáo ca trực",
        ],
        location: "Khu công nghiệp — Bình Dương",
    },
    {
        code: "DV · 03",
        name: "Bảo vệ kho bãi",
        tags: ["Logistics", "Giám sát"],
        description:
            "Giám sát hàng hóa, xuất nhập kho và camera 24/7 theo quy trình chuẩn.",
        features: [
            "Kiểm soát xuất nhập hàng hóa",
            "Giám sát camera kho bãi 24/7",
            "Phối hợp kiểm kê định kỳ",
            "Báo cáo sự cố và thất thoát",
        ],
        location: "Kho phân phối — Long An",
    },
    {
        code: "DV · 04",
        name: "Bảo vệ công trình",
        tags: ["Xây dựng", "Vật tư"],
        description:
            "Quản lý vật tư, nhân công ra vào và an ninh khu vực thi công.",
        features: [
            "Kiểm soát nhân công và vật tư",
            "Tuần tra khu vực thi công",
            "Phòng chống trộm cắp thiết bị",
            "Phối hợp an toàn lao động",
        ],
        location: "Công trường — TP.HCM",
    },
    {
        code: "DV · 05",
        name: "Bảo vệ sự kiện",
        tags: ["Sự kiện", "Đám đông"],
        description:
            "Triển khai nhanh, kiểm soát đám đông và phối hợp đơn vị tổ chức.",
        features: [
            "Kiểm soát đám đông và VIP",
            "Phối hợp ban tổ chức sự kiện",
            "Triển khai nhanh trong 24–48 giờ",
        ],
        location: "Sự kiện doanh nghiệp",
    },
    {
        code: "DV · 06",
        name: "Bảo vệ cửa hàng / siêu thị",
        tags: ["Bán lẻ", "Thất thoát"],
        description:
            "Phòng chống thất thoát, hỗ trợ khách hàng và xử lý tình huống.",
        features: [
            "Phòng chống thất thoát hàng hóa",
            "Hỗ trợ khách hàng tại cửa hàng",
            "Xử lý tình huống và sự cố",
            "Phối hợp quản lý chuỗi bán lẻ",
        ],
        location: "Chuỗi bán lẻ — Hà Nội",
    },
];

export const SERVICE_APPROACH_STEPS: ProcessStep[] = [
    {
        number: "01",
        title: "Khảo sát thực tế",
        description:
            "Tổ khảo sát đến tận địa điểm để đánh giá quy mô, rủi ro, hạ tầng và đặc thù hoạt động.",
    },
    {
        number: "02",
        title: "Đề xuất phương án",
        description:
            "Xây dựng kế hoạch bảo vệ chi tiết bao gồm nhân sự, ca trực và quy trình vận hành.",
    },
    {
        number: "03",
        title: "Triển khai & giám sát",
        description:
            "Bố trí nhân sự theo phương án, giám sát ca trực và đánh giá định kỳ trong suốt hợp đồng.",
    },
];

export const SERVICE_PROCESS_STEPS: ProcessStep[] = [
    {
        number: "01",
        title: "Tiếp nhận nhu cầu",
        description: "Qua hotline, email hoặc form trên website.",
    },
    {
        number: "02",
        title: "Khảo sát địa điểm",
        description: "Đánh giá thực địa và phân tích rủi ro.",
    },
    {
        number: "03",
        title: "Tư vấn phương án",
        description: "Đề xuất giải pháp nhân sự và quy trình.",
    },
    {
        number: "04",
        title: "Báo giá & ký HĐ",
        description: "Cam kết SLA, phạm vi và trách nhiệm.",
    },
    {
        number: "05",
        title: "Triển khai nhân sự",
        description: "Bàn giao theo điều lệnh chuẩn.",
    },
    {
        number: "06",
        title: "Giám sát & báo cáo",
        description: "Kiểm tra định kỳ và báo cáo minh bạch.",
    },
];

export const SERVICE_STRENGTHS: ServiceStrength[] = [
    {
        code: "PHẦN · 01",
        title: "Nhân sự tuyển chọn kỹ lưỡng",
        description:
            "Lý lịch tư pháp, sức khỏe và tác phong được kiểm tra kỹ trước khi vào ca.",
    },
    {
        code: "PHẦN · 02",
        title: "Đào tạo nghiệp vụ định kỳ",
        description:
            "Chương trình huấn luyện 120 giờ và đào tạo bổ sung hàng quý.",
    },
    {
        code: "PHẦN · 03",
        title: "Giám sát ca trực 24/7",
        description:
            "Trung tâm điều hành kết hợp tổ giám sát cơ động kiểm tra thực địa.",
    },
    {
        code: "PHẦN · 04",
        title: "Quy trình xử lý sự cố",
        description:
            "Phương án ứng phó được soạn thảo, diễn tập theo từng loại tình huống.",
    },
    {
        code: "PHẦN · 05",
        title: "Báo cáo minh bạch",
        description:
            "Báo cáo ca trực, sự cố và đánh giá định kỳ theo cam kết hợp đồng.",
    },
    {
        code: "PHẦN · 06",
        title: "Chi phí phù hợp nhu cầu",
        description:
            "Báo giá chi tiết theo quy mô — không phát sinh chi phí ẩn.",
    },
];

export const SERVICE_SECTORS: ServiceSector[] = [
    { name: "Nhà máy sản xuất", subtitle: "Khu công nghiệp & chế biến" },
    { name: "Tòa nhà văn phòng", subtitle: "Hạng A / B / C" },
    { name: "Chung cư", subtitle: "Cao cấp & trung cấp" },
    { name: "Kho bãi & logistics", subtitle: "Trung tâm phân phối" },
    { name: "Công trình xây dựng", subtitle: "Hạ tầng & cao tầng" },
    { name: "Trung tâm thương mại", subtitle: "Bán lẻ & dịch vụ" },
    { name: "Cửa hàng bán lẻ", subtitle: "Chuỗi đa điểm" },
    { name: "Sự kiện doanh nghiệp", subtitle: "Hội nghị & ra mắt sản phẩm" },
    { name: "Y tế & giáo dục", subtitle: "Bệnh viện · trường học" },
];
