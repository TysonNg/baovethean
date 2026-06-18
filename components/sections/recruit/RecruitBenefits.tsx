import {
    DollarSign,
    ShieldCheck,
    BookOpen,
    Home,
    Boxes,
    Users,
    type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { RECRUIT_BENEFITS } from "@/lib/recruit-data";
import type { RecruitBenefitIcon } from "@/types";

const ICONS: Record<RecruitBenefitIcon, LucideIcon> = {
    wallet: DollarSign,
    shield: ShieldCheck,
    book: BookOpen,
    discipline: Home,
    growth: Boxes,
    team: Users,
};

export default function RecruitBenefits() {
    return (
        <section className="bg-white py-20 md:py-24">
            <Container>
                <Eyebrow text="Vì sao gia nhập" />
                <h2 className="heading-1 text-ink mt-4 mb-4 max-w-2xl">
                    Sáu lý do để cân nhắc nghề bảo vệ tại Bảo vệ Thế An.
                </h2>
                <p className="text-ink-3 leading-relaxed max-w-2xl mb-12">
                    Chúng tôi không hứa hẹn quá lời. Dưới đây là những điều cụ
                    thể mà nhân viên Bảo vệ Thế An nhận được — minh bạch ngay
                    từ lúc phỏng vấn.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded overflow-hidden">
                    {RECRUIT_BENEFITS.map((benefit) => {
                        const Icon = ICONS[benefit.icon];
                        return (
                            <article
                                key={benefit.code}
                                className="bg-white p-6 md:p-8"
                            >
                                <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-8">
                                    <Icon
                                        size={18}
                                        className="text-gold"
                                        strokeWidth={1.75}
                                    />
                                </div>

                                <p className="eyebrow text-gold-deep mb-3">
                                    {benefit.code}
                                </p>
                                <h3 className="heading-3 text-ink mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-ink-3 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
