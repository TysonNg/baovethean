export interface HomeSolution {
    id: string;
    number: string;
    title: string;
    shortDescription: string;
    description: string;
    benefits: string[];
    image: string;
    imageAlt: string;
    href: string;
}

export const HOME_SOLUTIONS: HomeSolution[] = [
    {
        id: "nha-may-kho-bai",
        number: "01",
        title: "Bảo vệ nhà máy – kho hàng",
        shortDescription: "Kiểm soát con người, phương tiện và tài sản.",
        description:
            "Phương án an ninh theo nhịp vận hành sản xuất, giúp kiểm soát chặt từ cổng vào đến khu vực kho và dây chuyền.",
        benefits: ["Kiểm soát người và phương tiện", "Tuần tra theo điểm, theo ca", "Ứng phó sự cố liên tục 24/7"],
        image: "/images/home-solutions/factory-security-white-uniform.png",
        imageAlt: "Nhân viên bảo vệ kiểm tra phương tiện tại cổng nhà máy",
        href: "/bai-viet/quy-trinh-bao-ve-nha-may-chuyen-nghiep",
    },
    {
        id: "toa-nha-van-phong",
        number: "02",
        title: "Bảo vệ tòa nhà – văn phòng",
        shortDescription: "Vận hành sảnh đón tiếp an toàn, chuyên nghiệp.",
        description:
            "Kết hợp kiểm soát ra vào, tuần tra kỹ thuật và hỗ trợ khách để duy trì môi trường làm việc an toàn, thân thiện.",
        benefits: ["Kiểm soát khách và nhà thầu", "Tuần tra kỹ thuật định kỳ", "Phối hợp ban quản lý tòa nhà"],
        image: "/images/home-solutions/office-security-white-uniform.png",
        imageAlt: "Nhân viên bảo vệ kiểm tra khách tại sảnh tòa nhà văn phòng",
        href: "/bai-viet/giai-phap-an-ninh-toa-nha-van-phong",
    },
    {
        id: "su-kien",
        number: "03",
        title: "Bảo vệ sự kiện",
        shortDescription: "Điều phối an ninh linh hoạt theo quy mô tổ chức.",
        description:
            "Đội ngũ triển khai theo sơ đồ sự kiện, chủ động phân luồng khách và phối hợp ban tổ chức trong mọi tình huống.",
        benefits: ["Kiểm soát vé và khu vực hạn chế", "Phân luồng, kiểm soát đám đông", "Phối hợp xử lý tình huống nhanh"],
        image: "/images/home-solutions/event-security-white-uniform.png",
        imageAlt: "Nhân viên bảo vệ kiểm soát khách vào hội nghị doanh nghiệp",
        href: "/bai-viet/an-ninh-su-kien-quy-mo-lon",
    },
    {
        id: "yeu-nhan",
        number: "04",
        title: "Bảo vệ yếu nhân",
        shortDescription: "Bảo vệ kín đáo theo lịch trình và mức độ rủi ro.",
        description:
            "Kế hoạch hộ tống được khảo sát trước, phối hợp chặt chẽ giữa lộ trình, phương tiện và điểm đến.",
        benefits: ["Khảo sát lịch trình và điểm đến", "Đội ngũ kín đáo, phản ứng nhanh", "Bảo mật thông tin tuyệt đối"],
        image: "/images/home-solutions/executive-protection.webp",
        imageAlt: "Đội ngũ bảo vệ hộ tống doanh nhân tại lối vào tòa nhà",
        href: "/dich-vu?nhom=bao-ve-yeu-nhan",
    },
];

export const HOME_CASE_STUDY = {
    eyebrow: "Tình huống thực tế",
    title: "Duy trì an ninh liên tục cho nhà máy hoạt động 24/7",
    description:
        "Mục tiêu có ba ca sản xuất, lưu lượng nhân sự và xe hàng thay đổi liên tục; yêu cầu kiểm soát chặt nhưng không làm gián đoạn vận hành.",
    image: "/images/home-solutions/factory-security-white-uniform.png",
    imageAlt: "Nhân viên bảo vệ thực hiện kiểm soát xe hàng tại nhà máy hoạt động liên tục",
    highlights: [
        { value: "03", label: "ca vận hành" },
        { value: "100%", label: "điểm kiểm soát" },
        { value: "24/7", label: "phản ứng" },
    ],
    steps: [
        { number: "01", label: "Rủi ro", text: "Kiểm soát người và phương tiện, nguy cơ thất thoát tài sản và sự cố ngoài giờ." },
        { number: "02", label: "Phương án", text: "Phân chia chốt trực, tuần tra theo khung giờ, kiểm soát ra vào và phối hợp xử lý sự cố." },
        { number: "03", label: "Kết quả", text: "Duy trì vận hành ổn định, ghi nhận đầy đủ theo ca và phản ứng nhanh khi phát sinh." },
    ],
    // TODO: Các số liệu placeholder này cần được xác thực với dữ liệu vận hành
    // trước khi công bố như một cam kết SLA trong hợp đồng.
    stats: [
        { value: "24/7", label: "Giám sát liên tục" },
        { value: "4 bước", label: "Quy trình kiểm soát" },
        { value: "Dưới 5 phút", label: "Tiếp nhận và phản hồi sự cố" },
        { value: "100%", label: "Ca trực được ghi nhận, báo cáo" },
    ],
    cta: {
        title: "Mỗi mục tiêu cần một phương án bảo vệ khác nhau.",
        description: "Thế An khảo sát thực tế và đề xuất phương án phù hợp với đặc thù vận hành của doanh nghiệp.",
        primaryHref: "/lien-he",
        phoneHref: "tel:0903304003",
        phoneLabel: "0903304003 ",
    },
};
