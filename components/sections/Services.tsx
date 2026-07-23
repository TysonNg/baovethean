import { Building2, Factory, Warehouse, ShieldAlert } from "lucide-react";
import Container from "@/components/ui/Container";

const FEATURED_SERVICES = [
    {
        title: "Bảo vệ tòa nhà",
        description: "Đội ngũ chuyên nghiệp, kiểm soát an ninh 24/7.",
        icon: Building2,
    },
    {
        title: "Bảo vệ nhà máy",
        description: "Quản lý an ninh cho nhà máy, khu công nghiệp.",
        icon: Factory,
    },
    {
        title: "Bảo vệ kho bãi",
        description: "Giám sát, kiểm soát hàng hóa, tài sản.",
        icon: Warehouse,
    },
    {
        title: "Bảo vệ sự kiện",
        description: "Đảm bảo an ninh cho mọi sự kiện lớn nhỏ.",
        icon: ShieldAlert,
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-slate-50/60 py-20 md:py-24">
            <Container>
                {/* Section Title Centered */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E3F] tracking-tight uppercase">
                        Giải Pháp Bảo Vệ Toàn Diện
                    </h2>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURED_SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.title}
                                className="bg-white rounded-xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group"
                            >
                                <div className="w-16 h-16 rounded-xl bg-blue-50/80 text-[#1D528F] group-hover:bg-[#1D528F] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                                    <Icon size={32} strokeWidth={1.75} />
                                </div>
                                <h3 className="text-lg font-bold text-[#0B1E3F] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
