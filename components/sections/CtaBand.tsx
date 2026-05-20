import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/data";

export default function CtaBand() {
    return (
        <section id="contact" className="bg-navy-900 text-white py-16 md:py-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">
                    <div>
                        <Eyebrow text="Tư vấn miễn phí" light />
                        <h2 className="heading-1 mt-4 mb-4">
                            Cần phương án bảo vệ phù hợp cho doanh nghiệp của
                            bạn?
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Liên hệ với chúng tôi để được khảo sát và tư vấn
                            giải pháp an ninh phù hợp với quy mô và đặc thù
                            hoạt động — không phát sinh chi phí khảo sát ban
                            đầu.
                        </p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-4">
                        <Button href="#contact" arrow className="w-full lg:w-auto">
                            Nhận báo giá
                        </Button>
                        <div className="text-center lg:text-right">
                            <span className="block text-xs uppercase tracking-wider text-white/40 mb-1">
                                Hotline 24/7
                            </span>
                            <span className="text-2xl font-bold font-serif text-gold">
                                {COMPANY.hotline}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
