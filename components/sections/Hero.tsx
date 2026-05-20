import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { STATS } from "@/lib/data";

export default function Hero() {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
                    <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-ink-3 mb-4">
                            Bảo vệ Thế An — Est. 2014
                        </p>
                        <h1 className="heading-display text-ink mb-6">
                            Dịch vụ bảo vệ
                            <br />
                            chuyên nghiệp cho{" "}
                            <strong className="text-ink">
                                doanh nghiệp Việt Nam
                            </strong>
                        </h1>
                        <p className="lead text-ink-3 max-w-lg mb-8">
                            Cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình
                            vận hành chặt chẽ và giám sát 24/7 — giúp doanh nghiệp
                            an tâm tập trung vào hoạt động kinh doanh.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <Button href="#contact" arrow>
                                Nhận tư vấn ngay
                            </Button>
                            <Button href="#services" variant="outline" arrow>
                                Xem dịch vụ
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <span className="text-3xl font-bold font-serif text-ink">
                                        {stat.value}
                                    </span>
                                    <span className="block text-xs text-ink-3 mt-1">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Photo
                            label="IMG · 01"
                            className="aspect-[4/5] w-full"
                        />
                        <div className="absolute bottom-4 left-4 bg-navy-900 text-white px-4 py-3 rounded">
                            <span className="text-2xl font-bold font-serif text-gold">
                                24/7
                            </span>
                            <span className="block text-[10px] uppercase tracking-wider text-white/60 mt-0.5">
                                Giám sát liên tục
                            </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ink px-3 py-2 rounded text-xs font-semibold shadow">
                            10+ năm kinh nghiệm
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
