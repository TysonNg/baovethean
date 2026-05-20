import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { STANDARDS } from "@/lib/data";

export default function Standards() {
    return (
        <section className="bg-bg-alt py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <Eyebrow text="Tiêu chuẩn nhân sự" />
                        <h2 className="heading-1 text-ink mt-4 mb-5">
                            Một quy trình huấn luyện — sáu tiêu chuẩn nghiệp
                            vụ.
                        </h2>
                        <p className="text-ink-3 leading-relaxed mb-8">
                            Mọi nhân viên bảo vệ trước khi vào ca đều trải qua
                            chương trình huấn luyện chuẩn hóa, được đánh giá
                            định kỳ và phân loại theo cấp bậc nghiệp vụ.
                        </p>
                        <div className="space-y-0">
                            {STANDARDS.map((std) => (
                                <div
                                    key={std.code}
                                    className="flex items-center justify-between py-4 border-b border-line"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold font-serif text-gold-deep">
                                            {std.code}
                                        </span>
                                        <span className="text-sm font-semibold text-ink">
                                            {std.name}
                                        </span>
                                    </div>
                                    <span className="text-[11px] uppercase tracking-wider text-ink-3">
                                        {std.frequency}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Photo
                            label="IMG · 09"
                            className="aspect-[4/5] w-full"
                        />
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur p-5 rounded max-w-[200px]">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-px bg-gold" />
                                <span className="text-[10px] uppercase tracking-wider text-gold-deep font-semibold">
                                    Chứng chỉ
                                </span>
                            </div>
                            <h4 className="text-sm font-bold text-ink mb-1">
                                ISO 9001:2015
                            </h4>
                            <p className="text-xs text-ink-3">
                                Hệ thống quản lý chất lượng dịch vụ bảo vệ.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
