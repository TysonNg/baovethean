import type {
    RecruitSummaryItem,
    RecruitBenefit,
    RecruitRequirement,
    RecruitStep,
    RecruitTestimonial,
} from "@/types";

export const RECRUIT_SUMMARY: RecruitSummaryItem[] = [
    { label: "Vị trí đang mở", value: "12 vị trí" },
    { label: "Khu vực", value: "HCM · HN · BD · ĐN" },
    { label: "Mức lương cơ bản", value: "7,5 – 12 triệu" },
    { label: "Phụ cấp ca đêm", value: "25% – 35%" },
    { label: "Hỗ trợ ban đầu", value: "Đồng phục · BHYT · BHXH" },
    { label: "Đào tạo", value: "120 giờ trước nhận việc" },
];

export const RECRUIT_BENEFITS: RecruitBenefit[] = [
    {
        code: "Quyền lợi · 01",
        icon: "wallet",
        title: "Thu nhập ổn định",
        description:
            "Lương cơ bản đúng hạn vào ngày 05 hàng tháng. Phụ cấp ca đêm, lễ Tết, làm thêm giờ tính minh bạch theo quy định Bộ luật Lao động.",
    },
    {
        code: "Quyền lợi · 02",
        icon: "shield",
        title: "Chế độ đầy đủ",
        description:
            "BHXH, BHYT, BHTN, khám sức khỏe định kỳ và bảo hiểm tai nạn 24/7 cho nhân viên ngay từ tháng đầu nhận việc.",
    },
    {
        code: "Quyền lợi · 03",
        icon: "book",
        title: "Đào tạo bài bản",
        description:
            "Khóa huấn luyện nghiệp vụ 120 giờ trước nhận việc, đào tạo bổ sung hàng quý và cơ hội nâng cao tay nghề định kỳ.",
    },
    {
        code: "Quyền lợi · 04",
        icon: "discipline",
        title: "Môi trường kỷ luật",
        description:
            "Đội ngũ làm việc theo điều lệnh và quy trình chuẩn hóa — phù hợp với người mong muốn ổn định và phát triển dài hạn.",
    },
    {
        code: "Quyền lợi · 05",
        icon: "growth",
        title: "Lộ trình thăng tiến",
        description:
            "Lộ trình rõ ràng: Bảo vệ → Đội phó → Đội trưởng → Giám sát ca → Chỉ huy vùng. Đánh giá định kỳ 6 tháng/lần.",
    },
    {
        code: "Quyền lợi · 06",
        icon: "team",
        title: "Đồng nghiệp đáng tin",
        description:
            "Hơn 500 đồng nghiệp trên cả ba miền — văn hóa hỗ trợ, kỷ luật và tôn trọng lẫn nhau là nền tảng nội bộ.",
    },
];

export const RECRUIT_REQUIREMENTS: RecruitRequirement[] = [
    {
        title: "Sức khỏe đảm bảo",
        description:
            "Chiều cao tối thiểu 1,65 m (nam) / 1,55 m (nữ); không có bệnh truyền nhiễm; có xác nhận khám sức khỏe trong vòng 6 tháng.",
    },
    {
        title: "Lý lịch rõ ràng",
        description:
            "Không có tiền án, tiền sự. Có sơ yếu lý lịch xác nhận của địa phương trong vòng 6 tháng.",
    },
    {
        title: "Tốt nghiệp THCS trở lên",
        description:
            "Yêu cầu tối thiểu để theo học chương trình đào tạo nghiệp vụ. Tốt nghiệp THPT là lợi thế.",
    },
    {
        title: "Tác phong nghiêm túc",
        description:
            "Không có biểu hiện sử dụng chất kích thích. Đúng giờ, tuân thủ điều lệnh và có ý thức kỷ luật cao.",
    },
    {
        title: "Cam kết làm việc tối thiểu 12 tháng",
        description:
            "Ưu tiên ứng viên gắn bó dài hạn. Chế độ thưởng và xét tăng lương sau 6 và 12 tháng.",
    },
    {
        title: "Tuổi từ 18 đến 50",
        description:
            "Ứng viên ngoài độ tuổi cần đáp ứng thêm tiêu chuẩn về sức khỏe và phù hợp vị trí.",
    },
];

export const RECRUIT_SUPPORT = {
    title: "Hỗ trợ ứng viên",
    text:
        "Nếu chưa đủ kinh nghiệm, ứng viên có thể tham gia khóa đào tạo nghiệp vụ miễn phí của Bảo vệ Thế An và được đánh giá đầu ra trước khi nhận việc chính thức.",
};

export const RECRUIT_STEPS: RecruitStep[] = [
    {
        number: "01",
        title: "Nộp hồ sơ",
        description:
            "Qua email, Zalo OA hoặc trực tiếp tại văn phòng tuyển dụng.",
        timing: "Ngày 1",
    },
    {
        number: "02",
        title: "Phỏng vấn sơ bộ",
        description:
            "Phỏng vấn trực tiếp với chuyên viên tuyển dụng, kiểm tra hồ sơ và sức khỏe ban đầu.",
        timing: "Trong 7 ngày",
    },
    {
        number: "03",
        title: "Đào tạo nhập cuộc",
        description:
            "Khóa nghiệp vụ 120 giờ tại trung tâm huấn luyện Bình Dương. Có lương trong thời gian đào tạo.",
        timing: "2 – 3 tuần",
    },
    {
        number: "04",
        title: "Bàn giao công việc",
        description:
            "Phân công vị trí phù hợp, bàn giao ca trực và bắt đầu nhận lương chính thức.",
        timing: "Sau đào tạo",
    },
];

export const RECRUIT_TESTIMONIALS: RecruitTestimonial[] = [
    {
        quote:
            "Tôi gắn bó với Bảo vệ Thế An gần bảy năm. Điều giữ tôi lại là sự minh bạch trong lương thưởng và lộ trình thăng tiến — từ nhân viên ca trực, giờ tôi là Đội trưởng ca tại nhà máy.",
        name: "Anh Trần Quốc",
        role: "Đội trưởng ca, KCN Bình Dương",
        initials: "TQ",
    },
    {
        quote:
            "Công ty tổ chức đào tạo PCCC và sơ cấp cứu định kỳ — điều mà nhiều đồng nghiệp ngành khác hiếm có. Cảm giác được trang bị kỹ năng thực sự để làm tốt công việc.",
        name: "Chị Nguyễn Dung",
        role: "Bảo vệ tòa nhà văn phòng Q.1",
        initials: "ND",
    },
];
