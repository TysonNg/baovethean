import type {
    ProcessHeroMeta,
    ProcessStepNav,
    ProcessStepDetail,
} from "@/types";

export const PROCESS_HERO_META: ProcessHeroMeta[] = [
    { label: "Tổng thời gian", value: "7 – 10 ngày làm việc" },
    { label: "Khảo sát", value: "Miễn phí" },
    { label: "Báo giá chính thức", value: "48 giờ" },
    { label: "Cam kết SLA", value: "Có trong hợp đồng" },
    { label: "Giám sát ca trực", value: "24/7" },
];

export const PROCESS_STEP_NAV: ProcessStepNav[] = [
    { number: "01", label: "Tiếp nhận" },
    { number: "02", label: "Khảo sát" },
    { number: "03", label: "Đề xuất" },
    { number: "04", label: "Ký HĐ" },
    { number: "05", label: "Triển khai" },
    { number: "06", label: "Giám sát" },
];

export const PROCESS_STEPS: ProcessStepDetail[] = [
    {
        code: "QT · 01",
        number: "01",
        eyebrow: "Bước đầu tiên",
        label: "Tiếp nhận",
        title: "Tiếp nhận nhu cầu khách hàng",
        description:
            "Bộ phận tư vấn tiếp nhận yêu cầu của khách hàng qua nhiều kênh — hotline, email, form trên website hoặc giới thiệu từ đối tác. Mỗi yêu cầu được phân loại theo nhóm dịch vụ và chuyển đến chuyên viên phụ trách trong vòng 4 giờ làm việc.",
        meta: [
            { label: "Thời gian", value: "≤ 4 giờ làm việc" },
            { label: "Đầu mối", value: "Chuyên viên tư vấn dịch vụ" },
            { label: "Kênh tiếp nhận", value: "Hotline · Email · Form" },
            { label: "Kết quả", value: "Mã yêu cầu tư vấn" },
        ],
        checklist: [
            { label: "Mã yêu cầu", value: "TVC-YYYY-NNNN gửi qua email" },
            { label: "Phân loại sơ bộ", value: "Nhóm dịch vụ và quy mô dự kiến" },
            { label: "Lịch khảo sát", value: "Đề xuất 2 – 3 mốc thời gian" },
        ],
        photoLabel: "Phòng tổng đài — Trụ sở TP.HCM",
        overlay: {
            caption: "Cam kết",
            text: "Phản hồi xác nhận yêu cầu trong vòng 4 giờ làm việc.",
        },
        photoVariant: "navy",
    },
    {
        code: "QT · 02",
        number: "02",
        eyebrow: "Bước thứ hai",
        label: "Khảo sát",
        title: "Khảo sát địa điểm và đánh giá thực tế",
        description:
            "Tổ khảo sát của Bảo vệ Thế An đến trực tiếp địa điểm để ghi nhận sơ đồ mặt bằng, luồng ra vào, hạ tầng an ninh và đặc thù vận hành. Khảo sát thường kéo dài 4 – 6 giờ và bao gồm phỏng vấn ban quản lý hoặc người phụ trách.",
        meta: [
            { label: "Thời gian", value: "4 – 6 giờ tại địa điểm" },
            { label: "Đội khảo sát", value: "2 – 3 chuyên viên" },
            { label: "Hoàn thành báo cáo", value: "2 – 3 ngày làm việc" },
            { label: "Chi phí", value: "Miễn phí" },
        ],
        checklist: [
            { label: "Sơ đồ mặt bằng", value: "Vị trí cổng, khu vực hạn chế, điểm trực" },
            { label: "Ma trận rủi ro", value: "Phân loại 4 nhóm, xếp hạng ưu tiên" },
            { label: "Báo cáo khảo sát", value: "PDF kèm hình ảnh và đánh giá" },
        ],
        photoLabel: "Khảo sát tại nhà máy — Bình Dương",
        overlay: {
            caption: "Hoàn thành",
            text: "Báo cáo khảo sát và đánh giá rủi ro trong 2 – 3 ngày.",
        },
        photoVariant: "navy",
    },
    {
        code: "QT · 03",
        number: "03",
        eyebrow: "Bước thứ ba",
        label: "Đề xuất",
        title: "Đề xuất phương án và báo giá",
        description:
            "Dựa trên kết quả khảo sát, bộ phận thiết kế phương án xây dựng tài liệu vận hành chi tiết — bao gồm bố trí nhân sự, lịch ca trực, sơ đồ tuần tra, quy trình xử lý sự cố và báo giá chi tiết.",
        meta: [
            { label: "Thời gian", value: "48 giờ từ kết thúc khảo sát" },
            { label: "Hình thức", value: "Trình bày trực tiếp + tài liệu" },
            { label: "Báo giá", value: "Chi tiết, minh bạch" },
            { label: "Hiệu lực", value: "30 ngày" },
        ],
        checklist: [
            { label: "Phương án bảo vệ", value: "Số nhân sự, ca trực, vị trí" },
            { label: "Báo giá chi tiết", value: "Phân tách chi phí, không phát sinh ẩn" },
            { label: "Hợp đồng nháp", value: "Phạm vi, SLA, điều khoản chính" },
        ],
        photoLabel: "Trình bày phương án — Văn phòng KH",
        overlay: {
            caption: "Báo giá",
            text: "Trình bày trực tiếp và gửi tài liệu trong 48 giờ.",
        },
        photoVariant: "navy",
    },
    {
        code: "QT · 04",
        number: "04",
        eyebrow: "Bước thứ tư",
        label: "Ký hợp đồng",
        title: "Đàm phán và ký kết hợp đồng",
        description:
            "Sau khi khách hàng phản hồi, hai bên đàm phán các điểm cuối cùng — SLA, phạm vi, hình thức báo cáo và điều khoản chấm dứt. Hợp đồng được Phòng Pháp chế của Bảo vệ Thế An rà soát trước khi trình ký.",
        meta: [
            { label: "Thời gian", value: "3 – 5 ngày làm việc" },
            { label: "Hình thức ký", value: "Trực tiếp / Số" },
            { label: "Hợp đồng tối thiểu", value: "06 tháng" },
            { label: "Bảo mật", value: "NDA nếu yêu cầu" },
        ],
        checklist: [
            { label: "Hợp đồng dịch vụ", value: "Kèm phụ lục SLA và phạm vi" },
            { label: "Biên bản giao việc", value: "Người phụ trách hai bên" },
            { label: "Lịch triển khai", value: "Mốc thời gian cụ thể" },
        ],
        photoLabel: "Ký kết hợp đồng — TP.HCM",
        overlay: {
            caption: "Pháp lý",
            text: "Hợp đồng rà soát bởi Phòng Pháp chế trước khi trình ký.",
        },
        photoVariant: "light",
    },
    {
        code: "QT · 05",
        number: "05",
        eyebrow: "Bước thứ năm",
        label: "Triển khai",
        title: "Triển khai nhân sự và bàn giao ca",
        description:
            "Đội ngũ bảo vệ được tuyển chọn, đào tạo điều lệnh riêng cho địa điểm và bàn giao ca theo lịch đã thống nhất. Đội trưởng ca làm việc trực tiếp với người phụ trách của khách hàng trong giai đoạn đầu để hiệu chỉnh quy trình.",
        meta: [
            { label: "Thời gian", value: "5 – 7 ngày kể từ ký HĐ" },
            { label: "Đào tạo nhập cuộc", value: "16 – 24 giờ" },
            { label: "Bàn giao ca đầu tiên", value: "Có mặt đội trưởng" },
            { label: "Đánh giá tuần đầu", value: "Có biên bản" },
        ],
        checklist: [
            { label: "Sổ điều lệnh", value: "Riêng cho địa điểm khách hàng" },
            { label: "Danh sách nhân sự", value: "Kèm hồ sơ và chứng chỉ" },
            { label: "Lịch ca trực", value: "Tuần đầu — sau đó cập nhật" },
        ],
        photoLabel: "Bàn giao ca đầu tiên — Q.1",
        overlay: {
            caption: "Bàn giao",
            text: "Đội trưởng ca có mặt trong ca trực đầu tiên.",
        },
        photoVariant: "navy",
    },
    {
        code: "QT · 06",
        number: "06",
        eyebrow: "Bước thứ sáu",
        label: "Giám sát",
        title: "Giám sát ca trực và báo cáo định kỳ",
        description:
            "Trung tâm điều hành 24/7 phối hợp tổ giám sát cơ động kiểm tra thực địa theo lịch ngẫu nhiên. Mọi kiểm tra đều có biên bản, ảnh và thời gian. Hàng tháng, khách hàng nhận báo cáo gồm thống kê ca trực, danh sách sự cố và đề xuất cải tiến.",
        meta: [
            { label: "Giám sát", value: "24/7 từ trung tâm điều hành" },
            { label: "Kiểm tra hiện trường", value: "Ngẫu nhiên 2 – 4 lần/tháng" },
            { label: "Báo cáo", value: "Hàng tuần / tháng" },
            { label: "Họp đánh giá", value: "Quý" },
        ],
        checklist: [
            { label: "Báo cáo tuần", value: "Tóm tắt ca trực và sự cố" },
            { label: "Báo cáo tháng", value: "Đánh giá nhân sự + đề xuất" },
            { label: "Biên bản kiểm tra", value: "Sau mỗi lần giám sát" },
        ],
        photoLabel: "Trung tâm điều hành — TP.HCM",
        overlay: {
            caption: "Cam kết",
            text: "Báo cáo ca trực gửi theo tần suất thỏa thuận trong hợp đồng.",
        },
        photoVariant: "navy",
    },
];
