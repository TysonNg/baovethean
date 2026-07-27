export type AboutMenuIcon = "building" | "file" | "badge";

export interface AboutMenuItem {
    title: string;
    href: string;
    description: string;
    icon: AboutMenuIcon;
}

export const ABOUT_MENU_ITEMS: AboutMenuItem[] = [
    {
        title: "Về Bảo vệ Thế An",
        href: "/gioi-thieu",
        description: "Tổng quan, định hướng và giá trị cốt lõi của doanh nghiệp.",
        icon: "building",
    },
    {
        title: "Hồ sơ năng lực",
        href: "/ho-so-nang-luc",
        description: "Thông tin năng lực và tài liệu giới thiệu chính thức.",
        icon: "file",
    },
    {
        title: "Pháp lý & Chứng nhận",
        href: "/phap-ly-chung-nhan",
        description: "Hồ sơ pháp lý và các chứng nhận liên quan.",
        icon: "badge",
    },
];

export const ABOUT_MENU_PATHS = ABOUT_MENU_ITEMS.map((item) => item.href);
