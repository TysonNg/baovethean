export interface TrainingModule {
    number: string;
    title: string;
    description: string;
    topics: string[];
    icon: "shield" | "flame" | "heart" | "alert" | "users";
}

export interface TrainingStep {
    number: string;
    title: string;
    description: string;
    timing: string;
}

export interface TrainingGallerySlot {
    number: string;
    label: string;
    aspect: "landscape" | "portrait";
}

export const TRAINING_MODULES: TrainingModule[] = [
    {
        number: "01",
        title: "Nghiệp vụ bảo vệ",
        description:
            "Trang bị nền tảng về nhiệm vụ, quyền hạn và quy trình làm việc tại từng loại mục tiêu.",
        topics: [
            "Kiểm soát người và phương tiện",
            "Tuần tra, bàn giao ca",
            "Ghi nhận và báo cáo sự việc",
        ],
        icon: "shield",
    },
    {
        number: "02",
        title: "Phòng cháy chữa cháy",
        description:
            "Rèn phản xạ phát hiện, báo động và phối hợp xử lý trong những phút đầu của sự cố.",
        topics: [
            "Nhận diện nguy cơ cháy",
            "Sử dụng phương tiện chữa cháy",
            "Hướng dẫn thoát nạn",
        ],
        icon: "flame",
    },
    {
        number: "03",
        title: "Sơ cấp cứu",
        description:
            "Hướng dẫn hỗ trợ ban đầu an toàn trong khi chờ lực lượng y tế chuyên trách.",
        topics: [
            "Đánh giá hiện trường",
            "Hỗ trợ chấn thương cơ bản",
            "Phối hợp gọi cấp cứu",
        ],
        icon: "heart",
    },
    {
        number: "04",
        title: "Xử lý tình huống",
        description:
            "Thực hành các kịch bản thường gặp để nhân viên bình tĩnh, đúng vai trò và đúng quy trình.",
        topics: [
            "Xâm nhập và gây rối",
            "Mất mát tài sản",
            "Sự cố tại mục tiêu",
        ],
        icon: "alert",
    },
    {
        number: "05",
        title: "Giao tiếp và tác phong",
        description:
            "Xây dựng hình ảnh người bảo vệ kỷ luật, lịch sự và nhất quán trong mọi ca trực.",
        topics: [
            "Điều lệnh và đồng phục",
            "Giao tiếp với khách hàng",
            "Kỷ luật và trách nhiệm",
        ],
        icon: "users",
    },
];

export const TRAINING_STEPS: TrainingStep[] = [
    {
        number: "01",
        title: "Tiếp nhận và định hướng",
        description:
            "Ứng viên được giới thiệu tiêu chuẩn nghề nghiệp, nội quy và kết quả cần đạt trước khi bắt đầu chương trình.",
        timing: "Bắt đầu khóa học",
    },
    {
        number: "02",
        title: "Học kiến thức nền",
        description:
            "Nội dung lý thuyết giúp học viên hiểu nhiệm vụ, quy trình và cách phối hợp tại mục tiêu.",
        timing: "Trong chương trình 120 giờ",
    },
    {
        number: "03",
        title: "Thực hành tình huống",
        description:
            "Học viên luyện tập các kịch bản có giám sát để hình thành phản xạ đúng và tác phong nhất quán.",
        timing: "Xuyên suốt khóa học",
    },
    {
        number: "04",
        title: "Đánh giá đầu ra",
        description:
            "Chỉ học viên hoàn thành đánh giá đầu ra mới được phân công vị trí; sau đó tiếp tục đào tạo bổ sung hàng quý.",
        timing: "Trước khi nhận việc",
    },
];

export const TRAINING_GALLERY_SLOTS: TrainingGallerySlot[] = [
    { number: "01", label: "Ảnh đào tạo 01", aspect: "landscape" },
    { number: "02", label: "Ảnh đào tạo 02", aspect: "portrait" },
    { number: "03", label: "Ảnh đào tạo 03", aspect: "landscape" },
    { number: "04", label: "Ảnh đào tạo 04", aspect: "portrait" },
    { number: "05", label: "Ảnh đào tạo 05", aspect: "landscape" },
];
