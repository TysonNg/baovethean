import type { Metadata } from "next";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessStep from "@/components/sections/process/ProcessStep";
import { PROCESS_STEPS } from "@/lib/process-data";

const PAGE_URL = "https://baovethean.vn/quy-trinh";
const PAGE_TITLE = "Quy trình hợp tác dịch vụ bảo vệ — 6 bước minh bạch";
const PAGE_DESCRIPTION =
    "Quy trình hợp tác Bảo vệ Thế An gồm 6 bước minh bạch: tiếp nhận, khảo sát, đề xuất, ký hợp đồng, triển khai, giám sát. Khảo sát miễn phí, báo giá trong 48 giờ.";

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "quy trình bảo vệ",
        "quy trình hợp tác bảo vệ",
        "quy trình dịch vụ bảo vệ",
        "khảo sát bảo vệ miễn phí",
        "báo giá dịch vụ bảo vệ",
        "triển khai bảo vệ chuyên nghiệp",
        "giám sát ca trực bảo vệ",
        "ký hợp đồng bảo vệ",
        "Bảo vệ Thế An",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "article",
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

function HowToJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Quy trình hợp tác dịch vụ bảo vệ Thế An",
        description: PAGE_DESCRIPTION,
        totalTime: "P10D",
        estimatedCost: { "@type": "MonetaryAmount", currency: "VND", value: "0" },
        supply: [],
        tool: [],
        step: PROCESS_STEPS.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.description,
            url: `${PAGE_URL}#qt-${step.number}`,
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
                name: "Quy trình hợp tác",
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    );
}

export default function QuyTrinhPage() {
    return (
        <>
            <HowToJsonLd />
            <ProcessHero />
            {PROCESS_STEPS.map((step, index) => (
                <ProcessStep key={step.code} step={step} index={index} />
            ))}
        </>
    );
}
