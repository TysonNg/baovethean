import { Shield, Eye, Star, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { ABOUT_PILLARS } from "@/lib/about-data";
import type { AboutPillarIcon } from "@/types";

const ICONS: Record<AboutPillarIcon, LucideIcon> = {
    shield: Shield,
    eye: Eye,
    star: Star,
};

export default function AboutPillars() {
    return (
        <section className="bg-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mb-12">
                    <div>
                        <Eyebrow text="Định hướng" />
                        <h2 className="heading-1 text-ink mt-4">
                            Sứ mệnh, tầm nhìn và giá trị cốt lõi.
                        </h2>
                    </div>
                    <p className="text-ink-3 leading-relaxed lg:pt-10">
                        Ba điều này định hình cách chúng tôi tuyển dụng, đào tạo
                        và phục vụ khách hàng mỗi ngày — không phải khẩu hiệu,
                        mà là tiêu chuẩn vận hành.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ABOUT_PILLARS.map((pillar) => {
                        const Icon = ICONS[pillar.icon];
                        return (
                            <article
                                key={pillar.code}
                                className="border border-line border-t-2 border-t-gold p-6"
                            >
                                <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                                    {pillar.code}
                                </span>

                                <div className="w-10 h-10 border border-line rounded flex items-center justify-center mt-6 mb-6">
                                    <Icon
                                        size={18}
                                        className="text-ink"
                                        strokeWidth={1.75}
                                    />
                                </div>

                                <h3 className="heading-3 text-ink mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-ink-3 leading-relaxed mb-8">
                                    {pillar.description}
                                </p>

                                <p className="border-t border-line pt-4 text-xs font-semibold uppercase tracking-wider text-ink-3">
                                    {pillar.footnote}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
