import { COMPANY } from "@/lib/data";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "SecurityService"],
        name: COMPANY.fullName,
        description: COMPANY.description,
        url: "https://baovethean.vn",
        telephone: COMPANY.hotline,
        email: COMPANY.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: "72–74 Nguyễn Thị Minh Khai",
            addressLocality: "Quận 3",
            addressRegion: "TP. Hồ Chí Minh",
            addressCountry: "VN",
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "17:30",
        },
        foundingDate: "2014",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 500 },
        areaServed: { "@type": "Country", name: "Vietnam" },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
