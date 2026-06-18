import Container from "@/components/ui/Container";
import { ABOUT_STATS } from "@/lib/about-data";

export default function AboutStats() {
    return (
        <section
            aria-label="Số liệu về Bảo vệ Thế An"
            className="bg-navy-900 text-white py-12 md:py-16"
        >
            <Container>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
                    {ABOUT_STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`px-4 md:px-6 ${
                                i > 0 ? "lg:border-l lg:border-navy-700" : ""
                            }`}
                        >
                            <p className="heading-display font-serif text-white leading-none">
                                {stat.value}
                            </p>
                            <p className="eyebrow text-gold-soft mt-4">
                                {stat.eyebrow}
                            </p>
                            <p className="text-sm text-white/60 mt-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
