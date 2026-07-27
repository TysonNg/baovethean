import type { Metadata } from "next";
import { Building2, Compass, Network } from "lucide-react";
import AboutPageHero from "@/components/sections/about/AboutPageHero";
import Container from "@/components/ui/Container";
import {
    COMPANY_DIRECTION,
    COMPANY_OVERVIEW,
    ORGANIZATION_GROUPS,
} from "@/lib/about-content";

const DESCRIPTION =
    "Tổng quan về Công ty TNHH Dịch vụ Bảo vệ Thế An, lĩnh vực hoạt động, tầm nhìn, sứ mệnh, giá trị cốt lõi và cơ cấu tổ chức.";

export const metadata: Metadata = {
    title: "Về Bảo vệ Thế An",
    description: DESCRIPTION,
    alternates: { canonical: "/gioi-thieu" },
    openGraph: {
        title: "Về Bảo vệ Thế An",
        description: DESCRIPTION,
        url: "/gioi-thieu",
        type: "website",
    },
};

export default function GioiThieuPage() {
    return (
        <>
            <AboutPageHero
                eyebrow="Về Bảo vệ Thế An"
                title="Giới thiệu doanh nghiệp"
                description={COMPANY_OVERVIEW.summary}
                current="Giới thiệu"
            />

            <section className="marketing-section bg-bg-alt" aria-labelledby="company-overview-title">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <Building2 className="text-gold-deep" size={30} strokeWidth={1.5} aria-hidden="true" />
                            <h2 id="company-overview-title" className="heading-2 mt-4 text-ink">
                                Thông tin tổng quan
                            </h2>
                            <p className="mt-4 leading-7 text-ink-3">
                                Các thông tin nhận diện cơ bản của doanh nghiệp đang được sử dụng trên website.
                            </p>
                        </div>
                        <dl className="overflow-hidden rounded-xl border border-line bg-white">
                            {[
                                ["Tên pháp lý", COMPANY_OVERVIEW.legalName],
                                ["Tên giao dịch", COMPANY_OVERVIEW.tradingName],
                                ["Tên quốc tế", COMPANY_OVERVIEW.internationalName],
                                ["Ngày thành lập", COMPANY_OVERVIEW.foundedDate],
                                ["Lĩnh vực hoạt động", COMPANY_OVERVIEW.field],
                            ].map(([label, value]) => (
                                <div key={label} className="grid gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[150px_1fr]">
                                    <dt className="text-sm text-ink-3">{label}</dt>
                                    <dd className="text-sm font-semibold text-ink">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-white" aria-labelledby="direction-title">
                <Container>
                    <Compass className="text-gold-deep" size={30} strokeWidth={1.5} aria-hidden="true" />
                    <h2 id="direction-title" className="heading-2 mt-4 text-ink">Định hướng doanh nghiệp</h2>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {COMPANY_DIRECTION.map((item) => (
                            <article key={item.title} className="rounded-xl border border-line border-t-2 border-t-gold bg-white p-6">
                                <h3 className="heading-3 text-ink">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-ink-3">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="marketing-section bg-navy-900 text-white" aria-labelledby="organization-title">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <Network className="text-gold" size={30} strokeWidth={1.5} aria-hidden="true" />
                            <h2 id="organization-title" className="heading-2 mt-4">Cơ cấu tổ chức</h2>
                            <p className="mt-4 text-sm leading-6 text-white/70">
                                Cơ cấu được trình bày ở mức khái quát, tập trung vào các nhóm chức năng chính.
                            </p>
                        </div>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {ORGANIZATION_GROUPS.map((group, index) => (
                                <li key={group} className="flex min-h-16 items-center gap-3 rounded-lg border border-white/15 px-4">
                                    <span className="text-xs font-semibold text-gold">0{index + 1}</span>
                                    <span className="text-sm font-medium">{group}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    );
}
