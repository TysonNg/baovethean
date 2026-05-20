import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { SERVICES } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <Eyebrow text="Dịch vụ" />
                        <h2 className="heading-1 text-ink mt-4 mb-4">
                            Giải pháp bảo vệ chuyên biệt theo từng mô hình
                            doanh nghiệp.
                        </h2>
                        <p className="lead text-ink-3">
                            Mỗi hợp đồng được khảo sát và thiết kế phương án
                            riêng — phù hợp với quy mô, đặc thù vận hành và yêu
                            cầu an ninh của khách hàng.
                        </p>
                    </div>
                    <Button href="#contact" variant="outline" arrow>
                        Yêu cầu khảo sát
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.code}
                            className="bg-white rounded overflow-hidden"
                        >
                            <Photo
                                label={service.code.replace("DV · ", "IMG · 0")}
                                className="aspect-[16/10]"
                                overlay={
                                    <div className="p-4">
                                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                                            {service.location}
                                        </span>
                                    </div>
                                }
                            />
                            <div className="p-5">
                                <span className="text-xs font-semibold text-gold-deep">
                                    {service.code}
                                </span>
                                <h3 className="heading-3 text-ink mt-2 mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-sm text-ink-3 mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:text-gold transition-colors"
                                >
                                    Xem chi tiết
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
