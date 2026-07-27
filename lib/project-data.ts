export type ProjectCategory = "Nhà máy" | "Tòa nhà" | "Sự kiện" | "Yếu nhân";

export interface Project {
    slug: string;
    number: string;
    category: ProjectCategory;
    title: string;
    location: string;
    image: string;
    imageAlt: string;
    scope: string;
    summary: string;
    client: string;
    scale: string;
    duration: string;
    staffing: string;
    challenges: string[];
    solutions: string[];
    outcomes: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: "nha-may-san-xuat-quy-mo-lon",
        number: "01",
        category: "Nhà máy",
        title: "Nhà máy sản xuất quy mô lớn",
        location: "Khu công nghiệp, Bình Dương",
        image: "/images/home-solutions/factory-security.webp",
        imageAlt: "Nhân viên bảo vệ kiểm soát phương tiện tại cổng nhà máy",
        scope: "Kiểm soát cổng, phương tiện và tuần tra khuôn viên 24/7",
        summary: "Case study về phương án an ninh nhiều lớp cho môi trường sản xuất có lưu lượng xe tải lớn và nhiều khu vực cần phân quyền tiếp cận.",
        client: "Doanh nghiệp sản xuất — bảo mật theo thỏa thuận",
        scale: "Khuôn viên nhà máy nhiều phân khu",
        duration: "Vận hành dài hạn",
        staffing: "Bố trí nhiều vị trí theo ca 24/7",
        challenges: ["Lưu lượng xe tải lớn theo nhiều khung giờ", "Nhiều khu vực cần phân quyền tiếp cận", "Yêu cầu phản ứng nhanh khi có sự cố"],
        solutions: ["Tách luồng nhân sự, khách và phương tiện", "Thiết lập chốt trực kết hợp tuần tra định kỳ", "Báo cáo ca trực và sự cố theo biểu mẫu thống nhất"],
        outcomes: ["Luồng phương tiện tại cổng được tổ chức rõ ràng", "Trách nhiệm tại từng vị trí trực được chuẩn hóa", "Thông tin ca trực được bàn giao và truy xuất thống nhất"],
    },
    {
        slug: "toa-nha-van-phong-hang-a",
        number: "02",
        category: "Tòa nhà",
        title: "Tòa nhà văn phòng hạng A",
        location: "Trung tâm TP. Hồ Chí Minh",
        image: "/images/home-solutions/office-security.webp",
        imageAlt: "Nhân viên bảo vệ tại tòa nhà văn phòng",
        scope: "Kiểm soát ra vào, sảnh lễ tân và hệ thống camera",
        summary: "Case study về tổ chức an ninh kết hợp trải nghiệm dịch vụ tại một tòa nhà có mật độ khách và nhân viên cao.",
        client: "Đơn vị quản lý tòa nhà — bảo mật theo thỏa thuận",
        scale: "Sảnh, khu văn phòng và khu vực công cộng",
        duration: "Vận hành thường xuyên",
        staffing: "Phân vị trí theo điểm tiếp xúc",
        challenges: ["Mật độ khách và nhân viên cao", "Yêu cầu tác phong dịch vụ chuyên nghiệp", "Nhiều khu vực công cộng cần giám sát"],
        solutions: ["Bố trí nhân sự theo từng điểm tiếp xúc", "Chuẩn hóa quy trình đăng ký và hướng dẫn khách", "Kết hợp giám sát camera với tuần tra tầng"],
        outcomes: ["Quy trình đón và đăng ký khách nhất quán", "Các khu vực công cộng có đầu mối giám sát rõ ràng", "Sự cố được ghi nhận và chuyển đúng bộ phận phụ trách"],
    },
    {
        slug: "su-kien-doanh-nghiep",
        number: "03",
        category: "Sự kiện",
        title: "Sự kiện doanh nghiệp",
        location: "TP. Hồ Chí Minh",
        image: "/images/home-solutions/event-security.webp",
        imageAlt: "Đội ngũ bảo vệ tại sự kiện doanh nghiệp",
        scope: "Phân luồng khách, bảo vệ sân khấu và kiểm soát đám đông",
        summary: "Case study về kế hoạch an ninh ngắn hạn được xây dựng bám sát kịch bản, mặt bằng và luồng di chuyển của khách mời.",
        client: "Ban tổ chức sự kiện — bảo mật theo thỏa thuận",
        scale: "Khu đón khách, sân khấu và hậu trường",
        duration: "Theo thời gian tổ chức chương trình",
        staffing: "Triển khai theo sơ đồ vị trí sự kiện",
        challenges: ["Số lượng khách tập trung trong thời gian ngắn", "Mặt bằng và lịch trình thay đổi nhanh", "Nhiều khu vực hậu trường cần giới hạn"],
        solutions: ["Khảo sát và chia vùng kiểm soát trước sự kiện", "Phân luồng từ điểm đón đến khu vực ngồi", "Duy trì đầu mối điều phối xuyên suốt chương trình"],
        outcomes: ["Luồng khách được phân tách từ khu vực đón tiếp", "Hậu trường và khu vực trọng yếu được giới hạn tiếp cận", "Các thay đổi trong chương trình được truyền đạt qua một đầu mối"],
    },
    {
        slug: "dong-hanh-cung-lanh-dao",
        number: "04",
        category: "Yếu nhân",
        title: "Đồng hành cùng lãnh đạo",
        location: "Triển khai theo lịch trình",
        image: "/images/home-solutions/executive-protection.webp",
        imageAlt: "Nhân viên bảo vệ đồng hành cùng lãnh đạo doanh nghiệp",
        scope: "Đánh giá rủi ro, bảo vệ tiếp cận và điều phối di chuyển",
        summary: "Case study về phương án đồng hành kín đáo, được điều chỉnh theo lịch trình và mức độ rủi ro tại từng điểm đến.",
        client: "Lãnh đạo doanh nghiệp — bảo mật danh tính",
        scale: "Nhiều điểm đến theo lịch trình",
        duration: "Theo từng nhiệm vụ",
        staffing: "Tổ bảo vệ chuyên trách",
        challenges: ["Lịch trình thay đổi và nhiều điểm đến", "Yêu cầu bảo mật thông tin cao", "Cần phối hợp nhiều đơn vị liên quan"],
        solutions: ["Đánh giá rủi ro trước từng hành trình", "Thiết lập phương án chính và dự phòng", "Phối hợp đầu mối theo nguyên tắc bảo mật"],
        outcomes: ["Lịch trình được rà soát trước khi di chuyển", "Thông tin nhiệm vụ được giới hạn theo vai trò", "Luôn có phương án thay thế khi điều kiện thay đổi"],
    },
];

export const PROJECT_CATEGORIES = ["Tất cả", "Nhà máy", "Tòa nhà", "Sự kiện", "Yếu nhân"] as const;

export function getProject(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}
