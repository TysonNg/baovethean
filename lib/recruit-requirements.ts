export type RecruitRequirementIcon =
    | "skills"
    | "standards"
    | "documents"
    | "start";

export interface RecruitRequirementModule {
    number: string;
    icon: RecruitRequirementIcon;
    title: string;
    items: readonly string[];
}

export const RECRUIT_REQUIREMENT_MODULES: readonly RecruitRequirementModule[] =
    [
        {
            number: "01",
            icon: "skills",
            title: "Tác phong và kỹ năng",
            items: [
                "Lịch sự, nghiêm túc và chuyên nghiệp.",
                "Có tinh thần trách nhiệm, trung thực và chăm chỉ.",
                "Thân thiện với khách hàng và nhân viên tại mục tiêu.",
                "Có kỹ năng giao tiếp, ứng xử cơ bản.",
            ],
        },
        {
            number: "02",
            icon: "standards",
            title: "Tiêu chuẩn ứng viên",
            items: [
                "Là công dân Việt Nam.",
                "Nam từ 18–55 tuổi, cao từ 1,64 m.",
                "Nữ từ 18–38 tuổi, cao từ 1,54 m.",
                "Lý lịch rõ ràng; không có tiền án, tiền sự và không sử dụng ma túy.",
                "Tác phong phù hợp môi trường bảo vệ: không xăm hình lộ, không nhuộm tóc nổi bật; nhân viên nữ không sơn móng tay khi làm việc.",
            ],
        },
        {
            number: "03",
            icon: "documents",
            title: "Hồ sơ cần chuẩn bị",
            items: [
                "Không yêu cầu bằng cấp hoặc kinh nghiệm.",
                "Đơn xin việc và sơ yếu lý lịch.",
                "Hộ khẩu, CCCD/CMND và giấy khám sức khỏe.",
                "Các bằng cấp, chứng chỉ liên quan nếu có.",
            ],
        },
        {
            number: "04",
            icon: "start",
            title: "Bắt đầu công việc",
            items: [
                "Ứng viên có thể bổ sung hồ sơ sau khi nhận việc theo hướng dẫn của bộ phận tuyển dụng.",
                "Có CCCD/CMND bản gốc để đối chiếu khi làm thủ tục nhận việc.",
                "Bộ phận tuyển dụng sẽ hướng dẫn lịch phỏng vấn và hồ sơ còn thiếu.",
            ],
        },
    ] as const;
