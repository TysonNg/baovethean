import {
    Factory,
    Building2,
    Home,
    Warehouse,
    HardHat,
    ShoppingBag,
    Store,
    CalendarDays,
    CirclePlus,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { SERVICE_SECTORS } from "@/lib/service-data";

const ICONS = [
    Factory,
    Building2,
    Home,
    Warehouse,
    HardHat,
    ShoppingBag,
    Store,
    CalendarDays,
    CirclePlus,
];

export default function ServiceSectors() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <Eyebrow text="Lĩnh vực phục vụ" />
                <h2 className="heading-1 text-ink mt-4 mb-4 max-w-lg">
                    Phù hợp với nhiều mô hình doanh nghiệp.
                </h2>
                <p className="text-ink-3 leading-relaxed max-w-xl mb-12">
                    Bảo vệ Thế An đã triển khai dịch vụ tại các mô hình doanh
                    nghiệp đa dạng — từ khu công nghiệp đến chuỗi bán lẻ và
                    sự kiện quy mô lớn.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-line">
                    {SERVICE_SECTORS.map((sector, i) => {
                        const Icon = ICONS[i];
                        return (
                            <div
                                key={sector.name}
                                className="border-r border-b border-line p-6"
                            >
                                <Icon
                                    size={24}
                                    className="text-ink mb-4"
                                    strokeWidth={1.5}
                                />
                                <h3 className="text-sm font-semibold text-ink">
                                    {sector.name}
                                </h3>
                                <p className="text-xs text-ink-3 mt-0.5">
                                    {sector.subtitle}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
