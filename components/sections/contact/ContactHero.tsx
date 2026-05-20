import { Clock, MapPin, CircleCheck, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONTACT_BENEFITS } from "@/lib/contact-data";
import Link from "next/link";

const ICONS = [Clock, MapPin, CircleCheck, Shield];

export default function ContactHero() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <nav className="flex items-center gap-2 text-sm text-ink-3 mb-10">
                    <Link href="/" className="hover:text-ink transition-colors">
                        Trang chủ
                    </Link>
                    <span>/</span>
                    <span className="font-semibold text-ink">Liên hệ</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
                    <div>
                        <Eyebrow text="Liên hệ tư vấn" />
                        <h1 className="heading-1 text-ink mt-4 mb-4">
                            Liên hệ tư vấn dịch vụ bảo vệ
                        </h1>
                        <p className="lead text-ink-3">
                            Để lại thông tin hoặc gọi trực tiếp hotline — đội
                            ngũ chuyên viên của Bảo vệ Thế An sẽ khảo sát thực
                            địa và đề xuất phương án phù hợp với mô hình vận
                            hành của doanh nghiệp.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {CONTACT_BENEFITS.map((item, i) => {
                            const Icon = ICONS[i];
                            return (
                                <div key={item.title} className="flex gap-3">
                                    <div className="w-10 h-10 border border-line rounded flex items-center justify-center shrink-0">
                                        <Icon
                                            size={20}
                                            className="text-gold"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-ink-3 mt-0.5">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
