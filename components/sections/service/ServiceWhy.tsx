import {
    Shield,
    BookOpen,
    Clock,
    CheckCircle,
    Mail,
    DollarSign,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_STRENGTHS } from "@/lib/service-data";

const ICONS = [Shield, BookOpen, Clock, CheckCircle, Mail, DollarSign];

export default function ServiceWhy() {
    return (
        <section className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-12">
                    <div>
                        <Eyebrow text="Năng lực" light />
                        <h2 className="heading-1 mt-4">
                            Vì sao doanh nghiệp chọn dịch vụ của chúng tôi?
                        </h2>
                    </div>
                    <p className="text-white/60 leading-relaxed lg:pt-10">
                        Sáu yếu tố cốt lõi định hình dịch vụ bảo vệ chuẩn
                        mực — được hơn 200 doanh nghiệp tin tưởng cho hợp tác
                        dài hạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-700 border border-navy-700 rounded overflow-hidden">
                    {SERVICE_STRENGTHS.map((item, i) => {
                        const Icon = ICONS[i];
                        return (
                            <div
                                key={item.code}
                                className="bg-navy-900 p-6"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                        {item.code}
                                    </span>
                                    <Icon
                                        size={20}
                                        className="text-gold"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="heading-3 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
