import type { Metadata } from "next";
import RecruitHero from "@/components/sections/recruit/RecruitHero";
import RecruitBenefits from "@/components/sections/recruit/RecruitBenefits";
import RecruitRequirements from "@/components/sections/recruit/RecruitRequirements";
import RecruitProcess from "@/components/sections/recruit/RecruitProcess";
import RecruitVoices from "@/components/sections/recruit/RecruitVoices";
import CtaBand from "@/components/sections/CtaBand";
import { COMPANY } from "@/lib/data";

const PAGE_URL = "https://baovethean.vn/tuyen-dung";
const PAGE_TITLE = "Tuyển dụng nhân viên bảo vệ — Bảo vệ Thế An";
const PAGE_DESCRIPTION =
    "Bảo vệ Thế An tuyển dụng nhân viên bảo vệ tại TP.HCM, Hà Nội, Bình Dương, Đà Nẵng. Lương 7,5 – 12 triệu, phụ cấp ca đêm 25 – 35%, BHXH/BHYT/BHTN, đào tạo 120 giờ trước nhận việc.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "tuyển bảo vệ",
        "tuyển nhân viên bảo vệ",
        "tuyển dụng bảo vệ TPHCM",
        "tuyển bảo vệ Hà Nội",
        "tuyển bảo vệ Bình Dương",
        "tuyển bảo vệ Đà Nẵng",
        "việc làm bảo vệ",
        "lương bảo vệ",
        "Bảo vệ Thế An tuyển dụng",
        "đào tạo nghiệp vụ bảo vệ",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "Bảo vệ Thế An",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
    },
    robots: { index: true, follow: true },
};

function RecruitJsonLd() {
    const jobPosting = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: "Nhân viên bảo vệ chuyên nghiệp",
        description: PAGE_DESCRIPTION,
        datePosted: "2026-06-01",
        validThrough: "2026-12-31",
        employmentType: "FULL_TIME",
        hiringOrganization: {
            "@type": "Organization",
            name: COMPANY.fullName,
            sameAs: "https://baovethean.vn",
        },
        jobLocation: [
            {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "TP. Hồ Chí Minh",
                    addressCountry: "VN",
                },
            },
            {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Hà Nội",
                    addressCountry: "VN",
                },
            },
            {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bình Dương",
                    addressCountry: "VN",
                },
            },
            {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Đà Nẵng",
                    addressCountry: "VN",
                },
            },
        ],
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "VND",
            value: {
                "@type": "QuantitativeValue",
                minValue: 7500000,
                maxValue: 12000000,
                unitText: "MONTH",
            },
        },
        industry: "Security Services",
        totalJobOpenings: 12,
        applicantLocationRequirements: {
            "@type": "Country",
            name: "Vietnam",
        },
        directApply: false,
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Trang chủ",
                item: "https://baovethean.vn",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Tuyển dụng",
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jobPosting),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function TuyenDungPage() {
    return (
        <>
            <RecruitJsonLd />
            <RecruitHero />
            <RecruitBenefits />
            <RecruitRequirements />
            <RecruitProcess />
            <RecruitVoices />
            <CtaBand />
        </>
    );
}
