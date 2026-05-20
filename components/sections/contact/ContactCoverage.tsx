import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { COVERAGE_REGIONS } from "@/lib/contact-data";

export default function ContactCoverage() {
    return (
        <section className="py-20 md:py-24">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div className="max-w-xl">
                        <Eyebrow text="Khu vực triển khai" />
                        <h2 className="heading-1 text-ink mt-4">
                            Phục vụ doanh nghiệp tại 18 tỉnh thành.
                        </h2>
                        <p className="text-ink-3 mt-4 leading-relaxed">
                            Bảo vệ Thế An hiện cung cấp dịch vụ tại các khu
                            công nghiệp, tòa nhà và trung tâm đô thị lớn trên
                            cả ba miền.
                        </p>
                    </div>
                    <span className="px-3 py-1.5 border border-line rounded text-xs font-medium text-ink-3 uppercase tracking-wider whitespace-nowrap">
                        Cập nhật Q1 · 2026
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-line">
                    {COVERAGE_REGIONS.map((region) => (
                        <div
                            key={region.name}
                            className="pt-6 pb-8 md:px-6 first:md:pl-0 last:md:pr-0 md:border-r md:border-line last:border-0"
                        >
                            <span className="text-xs font-semibold text-gold-deep uppercase tracking-wider">
                                {region.code}
                            </span>
                            <h3 className="heading-3 text-ink mt-1 mb-4">
                                {region.name}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {region.provinces.map((province) => (
                                    <div
                                        key={province}
                                        className="flex items-center gap-2 text-sm text-ink-3"
                                    >
                                        <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                                        {province}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
