import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { RECRUIT_SUMMARY } from "@/lib/recruit-data";

export default function RecruitHero() {
    return (
        <section className="bg-navy-900 text-white pt-16 md:pt-20 pb-20 md:pb-24">
            <Container>
                <nav
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-sm text-white/50 mb-10"
                >
                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        Trang chủ
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span
                        className="font-semibold text-white"
                        aria-current="page"
                    >
                        Tuyển dụng
                    </span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Tuyển dụng" light />
                        <h1 className="heading-display mt-4 mb-6">
                            Gia nhập đội ngũ{" "}
                            <span className="text-gold font-serif">
                                Bảo vệ Thế An
                            </span>
                        </h1>
                        <p className="lead text-white/60 max-w-xl">
                            Chúng tôi tin rằng dịch vụ bảo vệ chuyên nghiệp đến
                            từ con người có kỷ luật. Bảo vệ Thế An tìm kiếm
                            những ứng viên nghiêm túc, có trách nhiệm và mong
                            muốn xây dựng nghề nghiệp ổn định trong lĩnh vực an
                            ninh.
                        </p>
                    </div>

                    <div className="border border-navy-700 rounded p-6 md:p-8">
                        <p className="eyebrow text-gold-soft mb-6">
                            Tóm tắt tuyển dụng
                        </p>
                        <dl className="divide-y divide-navy-700">
                            {RECRUIT_SUMMARY.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0 gap-4"
                                >
                                    <dt className="text-sm text-white/60">
                                        {item.label}
                                    </dt>
                                    <dd className="text-sm font-semibold text-white text-right">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </Container>
        </section>
    );
}
