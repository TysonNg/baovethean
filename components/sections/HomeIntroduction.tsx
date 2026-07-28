import {
    Building2,
    Globe2,
    Handshake,
    Headset,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";

const COMPANY_FACTS = [
    { label: "Tên công ty", value: "CÔNG TY TNHH DỊCH VỤ BẢO VỆ THẾ AN", icon: Building2 },
    { label: "Tên quốc tế", value: "THE AN SECURITY SERVICES CO., LTD", icon: Globe2 },
    { label: "Trụ sở chính", value: "TP. Hồ Chí Minh", icon: MapPin },
    { label: "Điện thoại", value: "028 22535426 – 028 22535427", icon: Phone },
    { label: "Email", value: "info@baovethean.com.vn", icon: Mail },
] as const;

const STATS = [
    { value: "20+", label: "Năm kinh nghiệm", icon: Users },
    { value: "500+", label: "Khách hàng tin tưởng", icon: ShieldCheck },
    { value: "2.000+", label: "Nhân viên chuyên nghiệp", icon: Users },
    { value: "1000+", label: "Mục tiêu đã bảo vệ", icon: Building2 },
] as const;

const STRENGTHS = [
    { title: "Uy tín hàng đầu", description: "Xây dựng niềm tin từ chất lượng dịch vụ và sự chuyên nghiệp.", icon: ShieldCheck },
    { title: "Đội ngũ chuyên nghiệp", description: "Nhân viên được đào tạo bài bản, kỷ luật nghiêm và tận tâm.", icon: Users },
    { title: "Hỗ trợ 24/7", description: "Luôn sẵn sàng phục vụ, xử lý nhanh chóng mọi tình huống.", icon: Headset },
    { title: "Đồng hành bền vững", description: "Cam kết đồng hành dài lâu cùng doanh nghiệp và cộng đồng.", icon: Handshake },
] as const;

export default function HomeIntroduction() {
    return (
        <section aria-labelledby="home-introduction-heading" className="overflow-hidden bg-white py-16 md:py-24">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <p className="eyebrow text-gold-deep">Về chúng tôi</p>
                    <h2 id="home-introduction-heading" className="heading-1 mt-4 text-ink text-nowrap">
                        CÔNG TY TNHH DỊCH VỤ BẢO VỆ THẾ AN
                    </h2>
                    <p className="mt-4 text-lg text-ink-3">Uy tín tạo thương hiệu – An toàn cho cộng đồng</p>
                </div>

                <article className="relative mt-12 overflow-hidden rounded-2xl border border-navy-900/10 bg-slate-50 shadow-xl md:grid md:grid-cols-[40%_60%]">
                    <div className="relative flex min-h-72 flex-col items-center justify-center overflow-hidden bg-navy-900 p-7 text-white md:min-h-[430px] md:p-10 md:pr-14">
                        <div className="relative max-w-sm place-items-center">
                            <Image
                                width={150}
                                height={100}
                                alt="logo-bao-ve-the-an"
                                src={"/logo1.png"}
                            />
                            <p className="text-sm font-semibold uppercase text-center tracking-[0.2em] text-gold">Bảo vệ chuyên nghiệp</p>
                            <p className="mt-3 text-xs text-center font-semibold leading-tight">An toàn cho doanh nghiệp của bạn</p>
                        </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-white via-blue-50/60 to-slate-100 p-7 md:p-10 md:pl-16">
                        <div className="relative mb-7 border-b border-navy-900/10 pb-5">
                            <h3 className="mt-2 text-xl font-semibold text-navy-900 md:text-2xl">Thông tin công ty</h3>
                        </div>

                        <dl className="relative space-y-5">
                            {COMPANY_FACTS.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <Icon className="mt-0.5 shrink-0 text-gold-deep md:hidden" size={19} aria-hidden="true" />
                                    <div className="min-w-0 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-3">
                                        <dt className="shrink-0 text-sm text-ink-3">{label}</dt>
                                        <dd className="mt-1 text-sm font-semibold leading-relaxed text-navy-900 sm:mt-0">{value}</dd>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="absolute left-[40%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full border border-white/20 bg-navy-800 px-2 py-3 text-gold shadow-lg md:flex" aria-hidden="true">
                        {COMPANY_FACTS.map(({ label, icon: Icon }) => (
                            <span key={label} className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10">
                                <Icon size={18} />
                            </span>
                        ))}
                    </div>
                </article>

                {/* <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:grid-cols-4">
                    {STATS.map(({ value, label, icon: Icon }, index) => (
                        <div key={label} className={`flex items-center gap-3 p-5 md:p-6 ${index > 0 ? "border-t border-line lg:border-l lg:border-t-0" : ""}`}>
                            <Icon className="hidden shrink-0 text-navy-900 sm:block" size={30} aria-hidden="true" />
                            <div>
                                <dt className="text-2xl font-bold text-navy-900 md:text-3xl">{value}</dt>
                                <dd className="mt-1 text-xs leading-relaxed text-ink-3 md:text-sm">{label}</dd>
                            </div>
                        </div>
                    ))}
                </dl> */}

                <div className="relative mt-20 text-center">
                    <ShieldCheck className="pointer-events-none absolute -right-4 -top-16 hidden h-72 w-72 text-navy-900/[0.04] lg:block" strokeWidth={1} aria-hidden="true" />
                    <p className="eyebrow text-gold-deep">Giới thiệu</p>
                    <h3 className="heading-2 mt-4 text-ink">Giới thiệu công ty bảo vệ Thế An</h3>
                    <div className="mx-auto mt-6 max-w-4xl space-y-4 text-left leading-relaxed text-ink-3">
                        <p><strong className="font-semibold text-ink">Công ty Bảo vệ Thế An</strong> được thành lập vào ngày 12/08/2018, do các cựu sĩ quan quân đội và cộng an giàu kinh nghiệm trong lĩnh vực an ninh sáng lập và lãnh đạo.</p>
                        <p>Chúng tôi là đơn vị tiên phong cung cấp dịch vụ bảo vệ chuyên nghiệp, kết hợp đội ngũ được tuyển chọn kỹ lưỡng, đào tạo định kỳ và quy trình vận hành chuẩn hóa.</p>
                        <p>Các gói dịch vụ linh hoạt từ phổ thông đến cao cấp PRO, phù hợp cho nhà máy, văn phòng, tòa nhà, chung cư, công trình, trường học, bệnh viện, siêu thị và sự kiện.</p>
                    </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {STRENGTHS.map(({ title, description, icon: Icon }) => (
                        <article key={title} className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold">
                                <Icon size={27} aria-hidden="true" />
                            </div>
                            <h4 className="mt-5 font-semibold text-navy-900">{title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-ink-3">{description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
