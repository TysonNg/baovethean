import { Factory, Building2, Building, Warehouse, HardHat, PartyPopper } from "lucide-react";
import Container from "@/components/ui/Container";
import { TRUST_ITEMS } from "@/lib/data";

const ICONS = [Factory, Building2, Building, Warehouse, HardHat, PartyPopper];

export default function TrustBar() {
    return (
        <section className="bg-bg-alt py-8 border-y border-line">
            <Container>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {TRUST_ITEMS.map((item, i) => {
                        const Icon = ICONS[i];
                        return (
                            <div
                                key={item.label}
                                className={`flex flex-col items-center gap-2 py-3 ${
                                    i < TRUST_ITEMS.length - 1
                                        ? "md:border-r md:border-line"
                                        : ""
                                }`}
                            >
                                <Icon size={24} className="text-ink-3" strokeWidth={1.5} />
                                <span className="text-xs font-medium text-ink-3">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
