import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_HERO_STATS } from "@/lib/service-data";
import PageBanner from "@/components/layout/PageBanner";

export default function ServiceHero() {
    return (
        <>
            <PageBanner title="Dịch vụ bảo vệ chuyên nghiệp" />
        <section className="marketing-section-compact bg-navy-900 text-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Dịch vụ bảo vệ" light />
                        <p className="lead text-white/60 mt-4">
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
                                className={`p-4 md:p-5 ${i % 2 === 0 ? "border-r border-navy-700" : ""} ${i < 2 ? "border-b border-navy-700" : ""}`}
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
        </>
    );
}
