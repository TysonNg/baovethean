import { COMPANY } from "@/lib/data";

const SITE_URL = "https://baovethean.vn";

export default function JsonLd() {
    const organization = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness", "SecurityService"],
        "@id": `${SITE_URL}#organization`,
        name: COMPANY.fullName,
        alternateName: COMPANY.name,
        description: COMPANY.description,
        url: SITE_URL,
        logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
            width: 512,
            height: 512,
        },
        image: `${SITE_URL}/og-image.jpg`,
        telephone: COMPANY.hotline,
        email: COMPANY.email,
        taxID: COMPANY.mst,
        address: {
            "@type": "PostalAddress",
            streetAddress: "72–74 Nguyễn Thị Minh Khai",
            addressLocality: "Quận 3",
            addressRegion: "TP. Hồ Chí Minh",
            postalCode: "70000",
            addressCountry: "VN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 10.7878,
            longitude: 106.6948,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: "08:00",
                closes: "17:30",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "Hotline khẩn cấp 24/7",
            },
        ],
        foundingDate: "2014",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: 500,
        },
        areaServed: {
            "@type": "Country",
            name: "Vietnam",
        },
        serviceType: [
            "Dịch vụ bảo vệ tòa nhà",
            "Dịch vụ bảo vệ nhà máy",
            "Dịch vụ bảo vệ kho bãi",
            "Dịch vụ bảo vệ công trình",
            "Dịch vụ bảo vệ sự kiện",
            "Dịch vụ bảo vệ bán lẻ",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dịch vụ bảo vệ chuyên nghiệp",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ tòa nhà văn phòng",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ nhà máy & khu công nghiệp",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ kho bãi & logistics",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ công trình xây dựng",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ sự kiện",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bảo vệ chuỗi bán lẻ",
                    },
                },
            ],
        },
        sameAs: [
            "https://www.facebook.com/baovethean",
            "https://www.linkedin.com/company/baovethean",
        ],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: COMPANY.name,
        alternateName: COMPANY.fullName,
        description: COMPANY.description,
        inLanguage: "vi-VN",
        publisher: { "@id": `${SITE_URL}#organization` },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/tin-tuc?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
            />
        </>
    );
}
