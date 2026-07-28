export const COMPANY_OVERVIEW = {
    legalName: "Công ty TNHH Dịch vụ Bảo vệ Thế An",
    tradingName: "Thế An Security",
    internationalName: "THE AN SECURITY SERVICES CO., LTD",
    foundedDate: "11/09/2023",
    field: "Cung cấp dịch vụ bảo vệ chuyên nghiệp",
    summary:
        "Bảo vệ Thế An cung cấp dịch vụ bảo vệ cho doanh nghiệp và tổ chức, với định hướng xây dựng môi trường an toàn, kỷ luật và ổn định.",
} as const;

export const COMPANY_DIRECTION = [
    {
        title: "Tầm nhìn",
        description:
            "Trở thành đơn vị cung cấp dịch vụ bảo vệ được doanh nghiệp tin cậy nhờ chất lượng nhân sự và cách làm việc chuyên nghiệp.",
    },
    {
        title: "Sứ mệnh",
        description:
            "Góp phần bảo đảm an toàn cho hoạt động của khách hàng bằng dịch vụ bảo vệ có trách nhiệm, kỷ luật và phù hợp với từng mục tiêu.",
    },
    {
        title: "Giá trị cốt lõi",
        description:
            "Uy tín, chuyên nghiệp, trách nhiệm và an toàn là những nguyên tắc định hướng hoạt động của Thế An.",
    },
] as const;

export const ORGANIZATION_GROUPS = [
    "Ban lãnh đạo",
    "Bộ phận nghiệp vụ và điều hành",
    "Bộ phận tuyển dụng và đào tạo",
    "Các bộ phận hỗ trợ doanh nghiệp",
] as const;

export const CAPABILITY_PROFILE_GROUPS = [
    "Thông tin doanh nghiệp và định hướng hoạt động",
    "Hệ thống dịch vụ bảo vệ cung cấp",
    "Thông tin pháp lý và hồ sơ liên quan",
    "Khả năng tổ chức, điều hành và triển khai tại mục tiêu",
] as const;

export interface LegalDocument {
    title: string;
    description: string;
    previewSrc: string;
    detailHref: string;
}

// Chỉ thêm tài liệu tại đây sau khi đã có file/ảnh thực tế và được phép công khai.
export const LEGAL_DOCUMENTS: LegalDocument[] = [];
