import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { ABOUT_HERO_META } from "@/lib/about-data";

export default function AboutHero() {
    return (
        <section className="bg-white pt-16 md:pt-20 pb-16 md:pb-20">
            <Container>
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-sm text-ink-3 mb-10"
                >
                    <Link href="/" className="hover:text-ink transition-colors">
                        Trang chủ
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span className="font-semibold text-ink" aria-current="page">
                        Giới thiệu
                    </span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Về Bảo vệ Thế An" />
                        <h1 className="heading-1 text-ink mt-4 mb-6">
                            Giới thiệu về chúng tôi
                        </h1>
                        <p className="lead text-ink-3 max-w-xl">
                            Đơn vị cung cấp dịch vụ bảo vệ chuyên nghiệp, đồng
                            hành cùng doanh nghiệp trong việc xây dựng môi
                            trường an toàn, kỷ luật và ổn định.
                        </p>
                    </div>

                    <dl className="lg:pt-4 divide-y divide-line border-l border-line pl-8">
                        {ABOUT_HERO_META.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-baseline justify-between py-4 first:pt-0 last:pb-0 gap-4"
                            >
                                <dt className="eyebrow text-ink-3">
                                    {item.label}
                                </dt>
                                <dd className="text-sm font-semibold text-ink text-right">
                                    {item.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    );
}
