import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { SERVICE_DETAILS } from "@/lib/service-data";

export default function ServiceGroups() {
    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-12">
                    <div>
                        <Eyebrow text="Các nhóm dịch vụ" />
                        <h2 className="heading-1 text-ink mt-4">
                            Các nhóm dịch vụ bảo vệ chính
                        </h2>
                    </div>
                    <p className="text-ink-3 leading-relaxed lg:pt-10">
                        Sáu nhóm dịch vụ cốt lõi, mỗi nhóm được thiết kế phù
                        hợp với đặc thù vận hành của từng loại hình doanh
                        nghiệp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICE_DETAILS.map((service) => (
                        <div
                            key={service.code}
                            className="bg-white rounded overflow-hidden"
                        >
                            <Photo
                                label={service.code.replace(
                                    "DV · ",
                                    "IMG · 0",
                                )}
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
                                <ul className="space-y-1.5 mb-4">
                                    {service.features.map((feat) => (
                                        <li
                                            key={feat}
                                            className="flex items-start gap-2 text-sm text-ink-3"
                                        >
                                            <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
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
