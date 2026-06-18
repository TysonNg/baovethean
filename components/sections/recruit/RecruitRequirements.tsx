import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import {
    RECRUIT_REQUIREMENTS,
    RECRUIT_SUPPORT,
} from "@/lib/recruit-data";

export default function RecruitRequirements() {
    return (
        <section className="bg-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-16 items-start">
                    <div>
                        <Eyebrow text="Yêu cầu chung" />
                        <h2 className="heading-1 text-ink mt-4 mb-5">
                            Tiêu chuẩn ứng viên
                        </h2>
                        <p className="text-ink-3 leading-relaxed mb-8">
                            Để đảm bảo chất lượng dịch vụ, mọi ứng viên — không
                            phân biệt vị trí — đều cần đáp ứng các tiêu chuẩn cơ
                            bản dưới đây. Bộ phận tuyển dụng sẽ rà soát hồ sơ và
                            liên hệ phỏng vấn sơ bộ trong vòng 7 ngày.
                        </p>

                        <aside className="bg-bg-alt border-l-2 border-gold p-6">
                            <p className="eyebrow text-gold-deep mb-3">
                                {RECRUIT_SUPPORT.title}
                            </p>
                            <p className="text-sm text-ink-3 leading-relaxed">
                                {RECRUIT_SUPPORT.text}
                            </p>
                        </aside>
                    </div>

                    <ul className="divide-y divide-line border-t border-b border-line">
                        {RECRUIT_REQUIREMENTS.map((item) => (
                            <li
                                key={item.title}
                                className="flex items-start gap-4 py-5"
                            >
                                <div className="w-7 h-7 bg-navy-900 rounded flex items-center justify-center shrink-0 mt-0.5">
                                    <Check
                                        size={14}
                                        className="text-gold"
                                        strokeWidth={2.5}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-ink mb-1.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-ink-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
