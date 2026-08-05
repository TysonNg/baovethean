import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import LocalServiceAnalytics from "@/components/analytics/LocalServiceAnalytics";
import TrackedPhoneLink from "@/components/analytics/TrackedPhoneLink";
import Container from "@/components/ui/Container";
import { COMPANY, PROCESS_STEPS } from "@/lib/data";

const PAGE_URL = "https://baovethean.com/dich-vu/bao-ve-tphcm";
const PAGE_TITLE = "Công ty bảo vệ tại TP.HCM";
const PAGE_DESCRIPTION =
    "Dịch vụ bảo vệ tại TP.HCM cho tòa nhà, nhà máy, kho bãi, công trình và sự kiện. Bảo vệ Thế An khảo sát thực địa miễn phí và đề xuất phương án theo nhu cầu.";

const SERVICE_TYPES = [
    {
        title: "Bảo vệ tòa nhà và văn phòng",
        description:
            "Kiểm soát sảnh, khách ra vào, tuần tra và phối hợp ban quản lý theo quy trình của từng tòa nhà.",
    },
    {
        title: "Bảo vệ nhà máy và kho bãi",
        description:
            "Tổ chức chốt cổng, kiểm soát phương tiện, hàng hóa và tuần tra phù hợp đặc thù vận hành.",
    },
    {
        title: "Bảo vệ công trình và sự kiện",
        description:
            "Phân luồng nhân sự, bảo vệ vật tư, kiểm soát khu vực trọng yếu và hỗ trợ xử lý tình huống.",
    },
] as const;

const SERVICE_AREAS = [
    "Quận 1, Quận 3, Quận 4, Quận 7",
    "TP. Thủ Đức và khu vực lân cận",
    "Tân Bình, Gò Vấp, Bình Thạnh, Phú Nhuận",
    "Các quận, huyện khác tại TP. Hồ Chí Minh",
] as const;

const FAQS = [
    {
        question: "Bảo vệ Thế An có cung cấp dịch vụ bảo vệ tại TP.HCM không?",
        answer: "Có. Bảo vệ Thế An tiếp nhận nhu cầu bảo vệ cho doanh nghiệp và tổ chức tại TP.HCM. Sau khi nhận thông tin ban đầu, đội ngũ tư vấn sẽ trao đổi về loại hình mục tiêu, thời gian trực và yêu cầu vận hành trước khi đề xuất phương án.",
    },
    {
        question: "Chi phí thuê bảo vệ tại TP.HCM được tính như thế nào?",
        answer: "Chi phí phụ thuộc vào số vị trí trực, khung giờ, quy mô địa điểm, yêu cầu nghiệp vụ và hạ tầng hiện có. Chúng tôi khảo sát thực tế để gửi phương án cùng báo giá rõ ràng, thay vì áp một mức chung cho mọi mục tiêu.",
    },
    {
        question: "Mất bao lâu để triển khai dịch vụ bảo vệ?",
        answer: "Thời gian triển khai phụ thuộc vào quy mô và yêu cầu của mục tiêu. Quy trình thông thường gồm tiếp nhận nhu cầu, khảo sát, đề xuất phương án, ký kết, bố trí nhân sự và giám sát bàn giao ca đầu tiên.",
    },
    {
        question: "Tôi cần chuẩn bị gì để nhận tư vấn và khảo sát?",
        answer: "Bạn nên chuẩn bị địa chỉ mục tiêu, loại hình hoạt động, số khu vực cần kiểm soát, khung giờ cần trực và các rủi ro hoặc yêu cầu đặc thù đang quan tâm. Các thông tin này giúp buổi khảo sát và phương án đề xuất sát thực tế hơn.",
    },
] as const;

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
        "công ty bảo vệ TPHCM",
        "dịch vụ bảo vệ TPHCM",
        "công ty bảo vệ Sài Gòn",
        "bảo vệ tòa nhà TPHCM",
        "bảo vệ nhà máy TPHCM",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
        type: "website",
        locale: "vi_VN",
        siteName: "Bảo vệ Thế An",
        title: `${PAGE_TITLE} | Bảo vệ Thế An`,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: `${PAGE_TITLE} | Bảo vệ Thế An`,
        description: PAGE_DESCRIPTION,
    },
    robots: { index: true, follow: true },
};

function LocalServiceJsonLd() {
    const service = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Dịch vụ bảo vệ tại TP.HCM",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        provider: { "@id": "https://baovethean.com#organization" },
        areaServed: {
            "@type": "City",
            name: "Thành phố Hồ Chí Minh",
            alternateName: "Sài Gòn",
        },
        serviceType: SERVICE_TYPES.map((serviceType) => serviceType.title),
        availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: {
                "@type": "ContactPoint",
                telephone: COMPANY.hotline,
                contactType: "sales",
                availableLanguage: "vi",
            },
        },
    };

    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
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
                item: "https://baovethean.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Dịch vụ",
                item: "https://baovethean.com/dich-vu",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: PAGE_TITLE,
                item: PAGE_URL,
            },
        ],
    };

    return (
        <>
            {[service, faq, breadcrumb].map((data, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                />
            ))}
        </>
    );
}

export default function BaoVeTphcmPage() {
    const phoneHref = `tel:${COMPANY.hotline.replaceAll(" ", "")}`;

    return (
        <>
            <LocalServiceAnalytics city="ho-chi-minh" />
            <LocalServiceJsonLd />
            <section className="relative isolate overflow-hidden bg-navy-900 pb-16 pt-32 text-white md:pb-24 md:pt-40">
                <Image
                    src="/images/home-solutions/office-security-white-uniform.png"
                    alt="Nhân viên bảo vệ Thế An tại tòa nhà ở TP.HCM"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/45" />
                <Container className="relative">
                    <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-white/60">
                        <Link href="/" className="hover:text-white">Trang chủ</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/dich-vu" className="hover:text-white">Dịch vụ</Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-gold-soft" aria-current="page">TP.HCM</span>
                    </nav>
                    <div className="max-w-4xl">
                        <p className="eyebrow text-gold-soft">Dịch vụ bảo vệ tại TP.HCM</p>
                        <h1 className="mt-5 font-serif text-[clamp(2.8rem,6.2vw,5.75rem)] leading-[1] tracking-[-.04em]">
                            Phương án bảo vệ phù hợp với từng mục tiêu tại TP.HCM.
                        </h1>
                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                            Bảo vệ Thế An tư vấn, khảo sát và xây dựng phương án an ninh cho doanh nghiệp, tòa nhà, nhà máy, kho bãi, công trình và sự kiện tại TP. Hồ Chí Minh.
                        </p>
                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link href="/lien-he" className="inline-flex min-h-13 items-center justify-center gap-2 rounded bg-gold px-6 text-sm font-semibold text-navy-900 transition hover:bg-gold-soft">
                                Đăng ký khảo sát miễn phí
                                <ArrowRight size={17} aria-hidden="true" />
                            </Link>
                            <TrackedPhoneLink href={phoneHref} placement="local_service_tphcm_hero" className="inline-flex min-h-13 items-center justify-center gap-2 rounded border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-gold-soft hover:text-gold-soft">
                                <Phone size={17} aria-hidden="true" />
                                Gọi {COMPANY.hotline}
                            </TrackedPhoneLink>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-white" aria-labelledby="local-services-title">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
                        <div>
                            <p className="eyebrow">Theo loại hình vận hành</p>
                            <h2 id="local-services-title" className="heading-1 mt-4 text-navy-900">Dịch vụ bảo vệ cho doanh nghiệp tại Sài Gòn</h2>
                            <p className="mt-5 text-sm leading-7 text-ink-3">Mỗi địa điểm có luồng người, tài sản và rủi ro khác nhau. Phương án cần bắt đầu từ khảo sát thực tế thay vì một gói bảo vệ chung.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {SERVICE_TYPES.map((item, index) => (
                                <article key={item.title} className="rounded-xl border border-line bg-bg-alt p-5">
                                    <span className="text-xs font-semibold tracking-[.16em] text-gold-deep">0{index + 1}</span>
                                    <h3 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-ink-3">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-bg-alt" aria-labelledby="coverage-title">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                        <div>
                            <p className="eyebrow">Phạm vi phục vụ</p>
                            <h2 id="coverage-title" className="heading-1 mt-4 text-navy-900">Khảo sát tại mục tiêu của bạn ở TP.HCM</h2>
                            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-3">Đội ngũ tiếp nhận yêu cầu tại TP.HCM, làm rõ đặc thù vận hành và thống nhất lịch khảo sát trước khi đề xuất phương án. Khu vực hỗ trợ được xác nhận theo từng yêu cầu thực tế.</p>
                        </div>
                        <ul className="grid gap-3 rounded-xl border border-line bg-white p-6 text-sm text-ink-3">
                            {SERVICE_AREAS.map((area) => (
                                <li key={area} className="flex gap-3 leading-6"><MapPin className="mt-0.5 shrink-0 text-gold-deep" size={17} aria-hidden="true" />{area}</li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-white" aria-labelledby="process-title">
                <Container>
                    <div className="max-w-2xl">
                        <p className="eyebrow">Cách triển khai</p>
                        <h2 id="process-title" className="heading-1 mt-4 text-navy-900">Từ yêu cầu ban đầu đến bàn giao ca trực</h2>
                    </div>
                    <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {PROCESS_STEPS.map((step) => (
                            <li key={step.number} className="rounded-xl border border-line p-5">
                                <span className="font-serif text-3xl text-gold-deep">{step.number}</span>
                                <h3 className="mt-5 text-base font-semibold text-navy-900">{step.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-ink-3">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <section className="marketing-section bg-navy-900 text-white" aria-labelledby="local-faq-title">
                <Container>
                    <div className="max-w-2xl">
                        <p className="eyebrow text-gold-soft">Câu hỏi thường gặp</p>
                        <h2 id="local-faq-title" className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Thông tin để bắt đầu lựa chọn đơn vị bảo vệ</h2>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {FAQS.map((item) => (
                            <article key={item.question} className="rounded-xl border border-white/15 bg-white/[.04] p-6">
                                <h3 className="text-base font-semibold leading-6 text-gold-soft">{item.question}</h3>
                                <p className="mt-4 text-sm leading-7 text-white/70">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-gold py-14 text-navy-900 md:py-18" aria-labelledby="local-cta-title">
                <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[.16em]">Tư vấn tại TP.HCM</p>
                        <h2 id="local-cta-title" className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Bắt đầu bằng một buổi khảo sát phù hợp với mục tiêu của bạn.</h2>
                    </div>
                    <Link href="/lien-he" className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded bg-navy-900 px-6 text-sm font-semibold text-white transition hover:bg-navy-800">
                        Nhận tư vấn và báo giá
                        <Check size={17} aria-hidden="true" />
                    </Link>
                </Container>
            </section>
        </>
    );
}
