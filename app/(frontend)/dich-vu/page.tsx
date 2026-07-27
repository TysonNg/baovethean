import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import ServiceExplorer from "@/components/sections/service/ServiceExplorer";
import { SERVICE_APPROACH_STEPS } from "@/lib/service-data";

const DESCRIPTION =
    "Sáu nhóm dịch vụ bảo vệ chuyên nghiệp được thiết kế theo đặc thù vận hành của từng doanh nghiệp, triển khai và giám sát 24/7.";

export const metadata: Metadata = {
    title: "Dịch vụ bảo vệ chuyên nghiệp",
    description: DESCRIPTION,
    alternates: { canonical: "/dich-vu" },
    openGraph: {
        title: "Dịch vụ bảo vệ chuyên nghiệp | Bảo vệ Thế An",
        description: DESCRIPTION,
        url: "/dich-vu",
        type: "website",
    },
};

export default function DichVuPage() {
    return (
        <>
            <section data-page-banner className="relative isolate overflow-hidden bg-navy-900 pb-16 pt-32 text-white md:pb-20 md:pt-40">
                <Image
                    src="/images/home-solutions/factory-security.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/45" aria-hidden="true" />
                <Container className="relative">
                    <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-white/55">
                        <Link href="/" className="transition-colors hover:text-white">Trang chủ</Link>
                        <span aria-hidden="true">/</span>
                        <span className="text-gold-soft" aria-current="page">Dịch vụ</span>
                    </nav>
                    <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
                        <div>
                            <p className="eyebrow text-gold-soft">Giải pháp an ninh theo nhu cầu</p>
                            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1] tracking-[-.035em]">
                                Đúng phương án.
                                <span className="block text-white/50">Đúng môi trường.</span>
                            </h1>
                        </div>
                        <div className="border-l border-white/15 pl-6">
                            <p className="max-w-md text-sm leading-7 text-white/70">
                                Chọn loại hình bạn quan tâm để xem nhanh phạm vi công việc. Thế An sẽ khảo sát và điều chỉnh phương án theo thực tế doanh nghiệp.
                            </p>
                            <a href="#chon-dich-vu" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-gold-soft">
                                Chọn dịch vụ
                                <ArrowDownRight size={18} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/60">
                        {["Khảo sát thực địa", "Phương án riêng", "Giám sát 24/7", "Báo cáo định kỳ"].map((item) => (
                            <span key={item} className="flex items-center gap-2">
                                <Check size={14} className="text-gold-soft" aria-hidden="true" />
                                {item}
                            </span>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="chon-dich-vu" className="marketing-section bg-[#f7f7f4]" aria-labelledby="service-explorer-title">
                <Container>
                    <div className="marketing-intro grid gap-5 lg:grid-cols-[1fr_.7fr] lg:items-end">
                        <div>
                            <p className="eyebrow">Danh mục dịch vụ</p>
                            <h2 id="service-explorer-title" className="heading-1 mt-3 text-navy-900">
                                Tìm đúng giải pháp trong vài giây
                            </h2>
                        </div>
                        <p className="max-w-lg text-sm leading-7 text-ink-3 lg:justify-self-end">
                            Chuyển giữa các nhóm dịch vụ để xem phạm vi triển khai mà không cần cuộn qua nhiều nội dung lặp lại.
                        </p>
                    </div>
                    <ServiceExplorer />
                </Container>
            </section>

            <section className="marketing-section bg-white" aria-labelledby="approach-title">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
                        <div>
                            <p className="eyebrow">Cách chúng tôi bắt đầu</p>
                            <h2 id="approach-title" className="mt-4 font-serif text-3xl leading-tight text-navy-900 md:text-4xl">
                                Ba bước từ nhu cầu đến vận hành.
                            </h2>
                            <p className="mt-5 text-sm leading-7 text-ink-3">
                                Một đầu mối xuyên suốt, phương án rõ ràng và chỉ triển khai khi hai bên đã thống nhất phạm vi.
                            </p>
                        </div>
                        <ol className="grid gap-4 md:grid-cols-3">
                            {SERVICE_APPROACH_STEPS.map((step) => (
                                <li key={step.number} className="rounded-2xl border border-line p-6 transition-colors hover:border-gold/60">
                                    <span className="font-serif text-3xl text-gold">{step.number}</span>
                                    <h3 className="mt-8 text-lg font-semibold text-navy-900">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-ink-3">{step.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </Container>
            </section>

            <section className="bg-navy-900 py-16 text-white md:py-20">
                <Container>
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="eyebrow text-gold-soft">Chưa chắc dịch vụ nào phù hợp?</p>
                            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                                Hãy để đội ngũ Thế An khảo sát và tư vấn.
                            </h2>
                        </div>
                        <Link
                            href="/lien-he"
                            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-gold px-7 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-soft"
                        >
                            Yêu cầu khảo sát
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
}
