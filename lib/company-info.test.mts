import assert from "node:assert/strict";
import test from "node:test";
import { COMPANY } from "./data.ts";
import { COMPANY_OVERVIEW } from "./about-content.ts";

test("publishes the confirmed company identity and contact details", () => {
    assert.deepEqual(
        {
            fullName: COMPANY.fullName,
            taxCode: COMPANY.mst,
            address: COMPANY.address,
            hotline: COMPANY.hotline,
            email: COMPANY.email,
            foundedDate: COMPANY.foundedDate,
        },
        {
            fullName: "Công ty TNHH Dịch vụ Bảo vệ Thế An",
            taxCode: "0318035974",
            address:
                "436/59/40 Cách mạng Tháng Tám, Phường Nhiêu Lộc, TP Hồ Chí Minh, Việt Nam",
            hotline: "0903304003",
            email: "baovethean@gmail.com",
            foundedDate: "2023-09-11",
        },
    );
});

test("uses the confirmed establishment date in the company overview", () => {
    assert.equal(COMPANY_OVERVIEW.foundedDate, "11/09/2023");
});
