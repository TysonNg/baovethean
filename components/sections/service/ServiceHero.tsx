import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_HERO_STATS } from "@/lib/service-data";
import Link from "next/link";

export default function ServiceHero() {
    return (
        <section className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <nav className="flex items-center gap-2 text-sm text-white/50 mb-10">
                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <span className="font-semibold text-white">Dịch vụ</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Dịch vụ bảo vệ" light />
                        <h1 className="heading-1 mt-4 mb-4">
                            Dịch vụ bảo vệ chuyên nghiệp
                        </h1>
                        <p className="lead text-white/60">
                            Cung cấp giải pháp bảo vệ phù hợp cho tòa nhà, nhà
                            máy, kho bãi, công trình, sự kiện và hệ thống bán
                            lẻ — vận hành theo quy trình chuẩn hóa và giám sát
                            24/7.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 border border-navy-700 rounded">
                        {SERVICE_HERO_STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`p-5 ${i % 2 === 0 ? "border-r border-navy-700" : ""} ${i < 2 ? "border-b border-navy-700" : ""}`}
                            >
                                <p className="heading-2 font-serif text-white">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-white/50 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
