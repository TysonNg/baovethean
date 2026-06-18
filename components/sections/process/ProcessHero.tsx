import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { PROCESS_HERO_META, PROCESS_STEP_NAV } from "@/lib/process-data";

export default function ProcessHero() {
    return (
        <section className="bg-white pt-16 md:pt-20">
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
                        Quy trình hợp tác
                    </span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Quy trình hợp tác" />
                        <h1 className="heading-1 text-ink mt-4 mb-6">
                            Sáu bước minh bạch — từ tiếp nhận đến vận hành ổn định.
                        </h1>
                        <p className="lead text-ink-3 max-w-xl">
                            Quy trình áp dụng cho mọi hợp đồng — đảm bảo khách
                            hàng hiểu rõ phạm vi, trách nhiệm và phương án triển
                            khai trước khi ký kết, và được giám sát liên tục
                            trong suốt thời gian hợp tác.
                        </p>
                    </div>

                    <dl className="lg:pt-4 divide-y divide-line border-l border-line pl-8">
                        {PROCESS_HERO_META.map((item) => (
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

            <nav
                aria-label="Các bước trong quy trình"
                className="mt-16 border-t border-b border-line bg-bg-alt"
            >
                <Container>
                    <ol className="grid grid-cols-3 md:grid-cols-6 gap-y-6 py-8">
                        {PROCESS_STEP_NAV.map((step) => (
                            <li
                                key={step.number}
                                className="flex flex-col items-center text-center"
                            >
                                <Link
                                    href={`#qt-${step.number}`}
                                    className="group flex flex-col items-center"
                                >
                                    <span className="w-10 h-10 border border-line bg-white rounded flex items-center justify-center text-sm font-semibold text-ink group-hover:border-gold transition-colors">
                                        {step.number}
                                    </span>
                                    <span className="mt-3 text-sm text-ink-3 group-hover:text-ink transition-colors">
                                        {step.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </Container>
            </nav>
        </section>
    );
}
