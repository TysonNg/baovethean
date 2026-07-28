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
    image: string;
    alt: string;
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
    { number: "01", label: "Thực hành chữa cháy", aspect: "landscape", image: "/images/anh_nhan_vien/1784738532973_1512254896023574579_413629033841281138_a04b6f33b35679568f5a5f8c49eb2b3a.jpg", alt: "Nhân viên bảo vệ Thế An đồng loạt thực hành chữa cháy" },
    { number: "02", label: "Diễn tập PCCC", aspect: "portrait", image: "/images/anh_nhan_vien/1784737796968_1512254896023574579_413629033841281138_6adc5a430ca7ab207ab8c24a9405da81.jpg", alt: "Nhân viên bảo vệ Thế An diễn tập phòng cháy chữa cháy" },
    { number: "03", label: "Điều lệnh đội ngũ", aspect: "landscape", image: "/images/anh_nhan_vien/1784734717643_1512254896023574579_413629033841281138_47cfea147014387ad152d61510e2782d.jpg", alt: "Đội ngũ nhân viên bảo vệ Thế An thực hiện điều lệnh" },
    { number: "04", label: "Tác phong chuyên nghiệp", aspect: "portrait", image: "/images/anh_nhan_vien/1784737057238_1512254896023574579_413629033841281138_2ba72e6e240361059d8b0968e57b836e.jpg", alt: "Đội ngũ nhân viên bảo vệ Thế An trong đồng phục" },
    { number: "05", label: "Sẵn sàng nhận nhiệm vụ", aspect: "landscape", image: "/images/anh_nhan_vien/1784737520772_1512254896023574579_413629033841281138_31b535d4193c6820cb174cd61ce63332.jpg", alt: "Nhân viên bảo vệ Thế An sẵn sàng nhận nhiệm vụ" },
];
