import type { Metadata } from "next";
import {
    BedDouble,
    CalendarClock,
    DollarSign,
    IdCard,
    Shirt,
    Users,
    type LucideIcon,
} from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";
import Container from "@/components/ui/Container";

const PAGE_URL = "https://baovethean.vn/tuyen-dung/quyen-loi-nhan-vien";

export const metadata: Metadata = {
    title: "Quyền lợi nhân viên — Bảo vệ Thế An",
    description:
        "Thông tin mức lương, hình thức thanh toán và các quyền lợi dành cho nhân viên bảo vệ tại Bảo vệ Thế An.",
    alternates: { canonical: PAGE_URL },
};

interface EmployeeBenefit {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const BENEFITS: EmployeeBenefit[] = [
    {
        number: "01",
        title: "Mức lương",
        description: "Mức lương: từ 6.000.000 – 12.000.000 đồng/tháng tùy vị trí làm việc",
        icon: DollarSign,
    },
    {
        number: "02",
        title: "Lương thời vụ",
        description: "Thanh toán lương theo tuần đối với nhân viên thời vụ",
        icon: CalendarClock,
    },
    {
        number: "03",
        title: "Đồng phục",
        description: "Miễn phí toàn bộ đồng phục",
        icon: Shirt,
    },
    {
        number: "04",
        title: "Hỗ trợ ăn ở",
        description: "Bao ăn, ở tùy khu vực làm việc, mục tiêu làm việc",
        icon: BedDouble,
    },
    {
        number: "05",
        title: "Hồ sơ đơn giản",
        description: "CMND gốc đi làm ngay",
        icon: IdCard,
    },
    {
        number: "06",
        title: "Môi trường",
        description: "Môi trường làm việc thân thiện",
        icon: Users,
    },
];

export default function EmployeeBenefitsPage() {
    return (
        <>
            <PageBanner
                title="Quyền lợi nhân viên"
                subtitle="Chính sách rõ ràng, hỗ trợ thiết thực để nhân viên an tâm làm việc và gắn bó lâu dài."
                parent={{ label: "Tuyển dụng", href: "/tuyen-dung" }}
                compact
            />

            <main className="bg-white">
            <section className="py-16 md:py-20">
                <Container>
                    <header className="mx-auto max-w-5xl text-center">
                        <p className="eyebrow mb-4 text-[#b49c05]">
                            Cơ hội việc làm
                        </p>
                        <div className="flex flex-col items-center gap-3">
                            <p className="rounded-xl bg-[#111b28] px-5 py-3 text-sm font-bold leading-relaxed tracking-[0.04em] text-white uppercase shadow-[0_10px_28px_rgba(29,82,143,0.22)] md:text-base">
                                TUYỂN GẤP 50 NHÂN VIÊN BẢO VỆ, BẢO VỆ THỜI VỤ, CƠ ĐỘNG, ĐỘI TRƯỞNG
                            </p>
                            <p className="text-sm font-bold leading-relaxed tracking-[0.06em] text-[#111b28] uppercase md:text-base">
                                KHU VỰC: BÌNH DƯƠNG, TP HCM, TIỀN GIANG, BÌNH THUẬN
                            </p>
                        </div>
                    </header>

                    <div className="mt-18 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
                        {BENEFITS.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.number}
                                    className={`relative min-h-64 rounded-2xl border border-[#1D528F]/15 bg-white px-6 pt-12 pb-8 text-center shadow-[0_16px_40px_rgba(29,82,143,0.12)] ${
                                        index === 4 ? "lg:col-start-2" : ""
                                    }`}
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute -top-9 left-1/2 flex size-[72px] -translate-x-1/2 items-center justify-center rounded-full border-[7px] border-white bg-[#1D528F] shadow-[0_8px_20px_rgba(29,82,143,0.24)]"
                                    >
                                        <Icon
                                            size={26}
                                            strokeWidth={1.75}
                                            className="text-white"
                                        />
                                    </div>

                                    <p className="mb-6 rounded-full bg-[#1D528F] px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                                        Quyền lợi {benefit.number}
                                    </p>
                                    <h2 className="heading-3 mb-3 text-ink">
                                        {benefit.title}
                                    </h2>
                                    <p className="text-sm leading-relaxed text-ink-3">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>
            </main>
        </>
    );
}
