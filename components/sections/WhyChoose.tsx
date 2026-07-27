import Container from "@/components/ui/Container";
import {
    ClipboardCheck,
    FileCheck2,
    GraduationCap,
    RadioTower,
    ShieldAlert,
    UserRoundCheck,
} from "lucide-react";
import { WHY_REASONS } from "@/lib/data";

const REASON_ICONS = [
    UserRoundCheck,
    GraduationCap,
    RadioTower,
    ShieldAlert,
    FileCheck2,
    ClipboardCheck,
];

const CARD_BACKGROUNDS = [
    "bg-[linear-gradient(145deg,#fffdf8_0%,#ffffff_72%)]",
    "bg-[linear-gradient(145deg,#fbf9ff_0%,#ffffff_72%)]",
    "bg-[linear-gradient(145deg,#fff8f8_0%,#ffffff_72%)]",
    "bg-[linear-gradient(145deg,#fffdf6_0%,#ffffff_72%)]",
    "bg-[linear-gradient(145deg,#fff8fc_0%,#ffffff_72%)]",
    "bg-[linear-gradient(145deg,#f6fcff_0%,#ffffff_72%)]",
];

export default function WhyChoose() {
    return (
        <section
            id="why"
            className="relative overflow-hidden bg-[#fafafa] py-20 text-ink md:py-28"
        >
            <div
                className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-100/35 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl"
                aria-hidden="true"
            />

            <Container className="relative">
                <div className="mx-auto max-w-5xl">
                    <div className="mx-auto text-nowrap mb-10 max-w-3xl text-center md:mb-14">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
                            Năng lực cốt lõi
                        </p>
                        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-navy-900 sm:text-4xl md:text-5xl">
                            Vì sao doanh nghiệp chọn chúng tôi?
                        </h2>
                    </div>

                    <div className="grid gap-2 rounded-[28px] bg-[#eef0f2] p-2 shadow-[0_24px_70px_rgba(7,23,46,0.08)] sm:grid-cols-2 lg:grid-cols-3">
                        {WHY_REASONS.map((reason, index) => {
                            const Icon = REASON_ICONS[index];

                            return (
                                <div
                                    key={reason.number}
                                    className={`min-h-[250px] rounded-[20px] p-7 sm:p-8 ${CARD_BACKGROUNDS[index]}`}
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white shadow-[0_8px_20px_rgba(7,23,46,0.2)]">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-bold leading-snug text-navy-900">
                                        {reason.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {reason.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
