import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/data";

export default function ServiceCTA() {
    return (
        <section className="bg-navy-900 text-white py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-center">
                    <div>
                        <Eyebrow text="Tư vấn miễn phí" light />
                        <h2 className="heading-1 mt-4 mb-4">
                            Bạn cần phương án bảo vệ phù hợp?
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-lg">
                            Liên hệ với chúng tôi để được khảo sát và tư vấn
                            giải pháp an ninh theo nhu cầu thực tế của doanh
                            nghiệp.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Button href="/lien-he" arrow className="w-full">
                            Nhận báo giá
                        </Button>
                        <div className="border border-navy-700 rounded p-5 text-center">
                            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                                Hotline 24/7
                            </span>
                            <p className="heading-2 font-serif text-white mt-1">
                                {COMPANY.hotline}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
