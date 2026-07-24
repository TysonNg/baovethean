import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutPillars from "@/components/sections/about/AboutPillars";
import AboutDifferentiators from "@/components/sections/about/AboutDifferentiators";
import CtaBand from "@/components/sections/CtaBand";
import { COMPANY } from "@/lib/data";
import { ABOUT_PILLARS } from "@/lib/about-data";

const PAGE_URL = "https://baovethean.vn/gioi-thieu";
const PAGE_TITLE = "Giới thiệu Bảo vệ Thế An — Mười năm dịch vụ bảo vệ chuyên nghiệp";
const PAGE_DESCRIPTION =
    "Bảo vệ Thế An — đơn vị cung cấp dịch vụ bảo vệ chuyên nghiệp từ năm 2014, đồng hành cùng hơn 200 doanh nghiệp tại 18 tỉnh thành với đội ngũ 500+ nhân sự được đào tạo bài bản và giám sát 24/7.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "giới thiệu Bảo vệ Thế An",
        "công ty bảo vệ uy tín",
        "công ty dịch vụ bảo vệ",
        "lịch sử công ty bảo vệ",
        "sứ mệnh tầm nhìn bảo vệ",
        "giá trị cốt lõi bảo vệ",
        "tổng giám đốc Bảo vệ Thế An",
        "công ty bảo vệ TP.HCM",
        "công ty bảo vệ chuyên nghiệp Việt Nam",
        "ANTT ISO 9001",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "profile",
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

function AboutJsonLd() {
    const aboutPage = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "vi-VN",
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://baovethean.vn/og-image.jpg",
        },
        mainEntity: {
            "@type": "Organization",
            name: COMPANY.fullName,
            alternateName: COMPANY.name,
            url: "https://baovethean.vn",
            email: COMPANY.email,
            telephone: COMPANY.hotline,
            description: COMPANY.description,
            foundingDate: "2014",
            taxID: COMPANY.mst,
            address: {
                "@type": "PostalAddress",
                streetAddress: "72–74 Nguyễn Thị Minh Khai",
                addressLocality: "Quận 3",
                addressRegion: "TP. Hồ Chí Minh",
                addressCountry: "VN",
            },
            areaServed: { "@type": "Country", name: "Vietnam" },
            numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 500,
            },
            knowsAbout: [
                "Dịch vụ bảo vệ tòa nhà",
                "Dịch vụ bảo vệ nhà máy",
                "Dịch vụ bảo vệ kho bãi",
                "Dịch vụ bảo vệ công trình",
                "Dịch vụ bảo vệ sự kiện",
                "Dịch vụ bảo vệ bán lẻ",
            ],
            slogan: ABOUT_PILLARS.map((p) => p.title).join(" · "),
        },
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
                name: "Giới thiệu",
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function GioiThieuPage() {
    return (
        <>
            <AboutJsonLd />
            <AboutHero />
            <AboutStory />
            <AboutStats />
            <AboutPillars />
            <AboutDifferentiators />
            {/* <CtaBand /> */}
        </>
    );
}
