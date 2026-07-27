import assert from "node:assert/strict";
import test from "node:test";
import {
    RECRUIT_MENU_ITEMS,
    RECRUIT_MENU_PATHS,
    isRecruitPath,
} from "./recruit-menu.ts";

test("exposes the four recruitment destinations in the requested order", () => {
    assert.deepEqual(RECRUIT_MENU_ITEMS, [
        { title: "Quyền lợi nhân viên", href: "/tuyen-dung/quyen-loi-nhan-vien" },
        { title: "Khu vực cần tuyển", href: "/tuyen-dung/khu-vuc-can-tuyen" },
        { title: "Đào tạo", href: "/tuyen-dung/dao-tao" },
        { title: "Yêu cầu", href: "/tuyen-dung/yeu-cau" },
    ]);
    assert.deepEqual(RECRUIT_MENU_PATHS, [
        "/tuyen-dung/quyen-loi-nhan-vien",
        "/tuyen-dung/khu-vuc-can-tuyen",
        "/tuyen-dung/dao-tao",
        "/tuyen-dung/yeu-cau",
    ]);
});

test("recognizes the recruitment root and nested routes", () => {
    assert.equal(isRecruitPath("/tuyen-dung"), true);
    assert.equal(isRecruitPath("/tuyen-dung/dao-tao"), true);
    assert.equal(isRecruitPath("/dich-vu"), false);
});
