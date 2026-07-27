export interface RecruitMenuItem {
    title: string;
    href: string;
}

export const RECRUIT_MENU_ITEMS: RecruitMenuItem[] = [
    { title: "Quyền lợi nhân viên", href: "/tuyen-dung/quyen-loi-nhan-vien" },
    { title: "Khu vực cần tuyển", href: "/tuyen-dung/khu-vuc-can-tuyen" },
    { title: "Đào tạo", href: "/tuyen-dung/dao-tao" },
    { title: "Yêu cầu", href: "/tuyen-dung/yeu-cau" },
];

export const RECRUIT_MENU_PATHS = RECRUIT_MENU_ITEMS.map((item) => item.href);

export function isRecruitPath(pathname: string) {
    return pathname === "/tuyen-dung" || pathname.startsWith("/tuyen-dung/");
}
