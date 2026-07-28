import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { SERVICE_DETAILS } from "@/lib/service-data";

export default function ServiceGroups() {
    const serviceImages = [
        "/images/anh_nhan_vien/1784738532973_1512254896023574579_413629033841281138_a04b6f33b35679568f5a5f8c49eb2b3a.jpg",
        "/images/anh_nhan_vien/1784735915183_1512254896023574579_413629033841281138_282f410cfec55c3f3d9d27940f880c7a.jpg",
        "/images/anh_nhan_vien/1784734717643_1512254896023574579_413629033841281138_47cfea147014387ad152d61510e2782d.jpg",
        "/images/anh_nhan_vien/1784737520772_1512254896023574579_413629033841281138_31b535d4193c6820cb174cd61ce63332.jpg",
        "/images/anh_nhan_vien/1784736767820_1512254896023574579_413629033841281138_043b1f2d9ed77e4fb74f4a2bd275440c.jpg",
        "/images/anh_nhan_vien/1784737194833_1512254896023574579_413629033841281138_45c16b85a56d037a53421dae11d6ac7c.jpg",
    ];

    return (
        <section className="marketing-section bg-bg-alt">
            <Container>
                <div className="marketing-intro grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6">
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
                    {SERVICE_DETAILS.map((service, index) => (
                        <div
                            key={service.code}
                            className="bg-white rounded overflow-hidden"
                        >
                            <Photo
                                src={serviceImages[index]}
                                alt={`Nhân viên Bảo vệ Thế An — ${service.name}`}
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
