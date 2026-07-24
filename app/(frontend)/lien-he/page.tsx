import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactOffices from "@/components/sections/contact/ContactOffices";
import ContactEmergency from "@/components/sections/contact/ContactEmergency";
import ContactCoverage from "@/components/sections/contact/ContactCoverage";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";
import { CONTACT_FAQS } from "@/lib/contact-data";

const PAGE_URL = "https://baovethean.vn/lien-he";
const PAGE_TITLE = "Liên hệ tư vấn — Bảo vệ Thế An";
const PAGE_DESCRIPTION =
    "Liên hệ Bảo vệ Thế An để được tư vấn dịch vụ bảo vệ chuyên nghiệp. Hotline 24/7: 0903304003. Khảo sát miễn phí, báo giá trong 48 giờ. Văn phòng tại TP.HCM, Hà Nội, Đà Nẵng, Bình Dương.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "liên hệ bảo vệ Thế An",
        "hotline bảo vệ 24/7",
        "tư vấn dịch vụ bảo vệ",
        "báo giá dịch vụ bảo vệ",
        "công ty bảo vệ TPHCM",
        "công ty bảo vệ Hà Nội",
        "công ty bảo vệ Đà Nẵng",
        "công ty bảo vệ Bình Dương",
        "khảo sát bảo vệ miễn phí",
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

function ContactJsonLd() {
    const contactPage = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "vi-VN",
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: CONTACT_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
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
                name: "Liên hệ",
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPage),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function ContactPage() {
    return (
        <>
            <ContactJsonLd />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactOffices />
            <ContactEmergency />
            <ContactCoverage />
            <ContactFAQ />
        </>
    );
}
