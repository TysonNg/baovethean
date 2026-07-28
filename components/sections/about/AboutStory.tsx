import Image from "next/image";
import { Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { ABOUT_LEADER } from "@/lib/about-data";

export default function AboutStory() {
    return (
        <section className="marketing-section bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <Eyebrow text="Tổng quan" />
                        <h2 className="heading-1 text-ink mt-4 mb-6">
                            Một thập kỷ đồng hành cùng doanh nghiệp Việt Nam.
                        </h2>

                        <p className="text-ink-3 leading-relaxed mb-4">
                            <strong className="font-semibold text-ink">
                                Bảo vệ Thế An
                            </strong>{" "}
                            là đơn vị cung cấp giải pháp an ninh chuyên nghiệp
                            cho tòa nhà văn phòng, nhà máy, kho bãi, công trình
                            xây dựng, chuỗi bán lẻ, chung cư và sự kiện doanh
                            nghiệp trên cả ba miền.
                        </p>
                        <p className="text-ink-3 leading-relaxed mb-8">
                            Mỗi hợp đồng được vận hành bởi đội ngũ nhân sự được
                            tuyển chọn kỹ lưỡng, đào tạo định kỳ và làm việc
                            theo quy trình chuẩn hóa — kết hợp với trung tâm
                            điều hành giám sát 24/7 và tổ phản ứng nhanh cơ
                            động.
                        </p>
                        <div className="border-t border-line pt-6 flex items-center gap-4">
                            <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center shrink-0">
                                <Shield
                                    size={18}
                                    className="text-gold"
                                    fill="#C9A14A"
                                    strokeWidth={0}
                                />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-ink">
                                    {ABOUT_LEADER.name}
                                </p>
                                <p className="text-xs text-ink-3 mt-0.5">
                                    {ABOUT_LEADER.title}
                                </p>
                            </div>
                        </div>
                    </div>

                    <figure className="relative aspect-[4/5] rounded overflow-hidden bg-navy-800">
                        <Image
                            src="/images/anh_nhan_vien/1784736767820_1512254896023574579_413629033841281138_043b1f2d9ed77e4fb74f4a2bd275440c.jpg"
                            alt="Đội ngũ nhân viên bảo vệ Thế An tại khu căn hộ"
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-navy-950/20"
                            aria-hidden="true"
                        />
                        <span className="absolute top-4 right-4 text-xs font-mono text-white/50">
                            IMG · A01
                        </span>

                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 12px)",
                            }}
                            aria-hidden="true"
                        />

                        <div className="absolute left-6 right-6 bottom-16 bg-white rounded shadow-md p-5">
                            <div className="flex items-start gap-3">
                                <span
                                    className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold pt-1 shrink-0"
                                    aria-hidden="true"
                                >
                                    —
                                </span>
                                <div>
                                    <span className="eyebrow text-gold block mb-2">
                                        Bàn giao ca trực
                                    </span>
                                    <p className="text-sm font-semibold text-ink mb-2">
                                        06:00 sáng mỗi ngày
                                    </p>
                                    <p className="text-xs text-ink-3 leading-relaxed">
                                        Đội trưởng ca giao ban điều lệnh và phân
                                        công vị trí cho 24 giờ tiếp theo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <figcaption className="absolute bottom-4 left-6 text-xs font-mono uppercase tracking-wider text-white/50">
                            <span aria-hidden="true">▢ </span>
                            Đội bảo vệ ca trực — Trụ sở TP.HCM
                        </figcaption>
                    </figure>
                </div>
            </Container>
        </section>
    );
}
