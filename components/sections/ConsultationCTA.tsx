import { ArrowRight, Check, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function ConsultationCTA() {
    const phoneHref = `tel:${COMPANY.hotline.replaceAll(" ", "")}`;

    return (
        <section
            id="contact"
            aria-labelledby="consultation-heading"
            className="overflow-hidden bg-white"
        >
            <div className="grid lg:min-h-[560px] lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 md:py-20 lg:px-[max(48px,calc((100vw-1240px)/2+24px))] lg:pr-20">
                    <div className="max-w-3xl">
                        <p className="eyebrow">Tư vấn phương án bảo vệ</p>
                        <span
                            aria-hidden="true"
                            className="mt-4 block h-px w-20 bg-gold"
                        />
                        <h2
                            id="consultation-heading"
                            className="mt-8 text-[clamp(34px,4vw,58px)] font-bold leading-[1.15] tracking-[-0.025em] text-navy-900"
                        >
                            Mỗi mục tiêu cần một phương án an ninh riêng
                        </h2>
                        <p className="mt-6 max-w-2xl text-[16px] leading-8 text-ink-3 md:text-lg">
                            Thế An khảo sát miễn phí tại địa điểm của bạn để đánh
                            giá rủi ro thực tế, từ đó xây dựng phương án bảo vệ
                            tối ưu, phù hợp đặc thù và ngân sách.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                            <Link
                                href="/lien-he"
                                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-gold px-7 text-sm font-bold text-white shadow-[0_10px_26px_rgba(201,161,74,0.22)] transition-colors hover:bg-gold-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                            >
                                Đăng ký khảo sát miễn phí
                                <ArrowRight aria-hidden="true" size={17} />
                            </Link>
                            <a
                                href={phoneHref}
                                aria-label={`Gọi tư vấn ${COMPANY.hotline}`}
                                className="group inline-flex min-h-12 items-center justify-center gap-3 border-b border-gold py-2 text-base font-bold text-navy-900 transition-colors hover:text-gold-deep focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
                            >
                                Gọi {COMPANY.hotline}
                                <ArrowRight
                                    aria-hidden="true"
                                    size={19}
                                    className="text-gold transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                                />
                            </a>
                        </div>

                        <ul className="mt-8 flex flex-col gap-4 text-sm text-ink-3 sm:flex-row sm:items-center sm:gap-0">
                            <li className="flex items-center gap-3 sm:pr-7">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold text-gold-deep">
                                    <Check aria-hidden="true" size={16} />
                                </span>
                                Khảo sát tận nơi
                            </li>
                            <li className="flex items-center gap-3 sm:border-l sm:border-line sm:pl-7">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold text-gold-deep">
                                    <Check aria-hidden="true" size={16} />
                                </span>
                                Phản hồi trong 24 giờ
                            </li>
                        </ul>
                    </div>

                    <span
                        aria-hidden="true"
                        className="absolute right-[-69px] top-0 hidden h-full w-36 skew-x-[-17deg] border-r-[18px] border-navy-900 bg-white lg:block"
                    />
                </div>

                <div className="relative min-h-[390px] bg-navy-900 sm:min-h-[480px] lg:min-h-full">
                    <Image
                        src="/images/home-solutions/office-security-white-uniform.png"
                        alt="Đội ngũ bảo vệ Thế An đang thực hiện kiểm soát và tư vấn an ninh tại tòa nhà"
                        fill
                        sizes="(max-width: 1023px) 100vw, 46vw"
                        className="object-cover"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-navy-900/10"
                    />
                    <a
                        href={phoneHref}
                        aria-label={`Gọi hotline tư vấn ${COMPANY.hotline}`}
                        className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-navy-900/90 text-gold-soft shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold sm:hidden"
                    >
                        <Phone aria-hidden="true" size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
}
