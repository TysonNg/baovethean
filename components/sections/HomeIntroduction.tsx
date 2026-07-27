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

                <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                    <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-xl md:p-8">
                        <div className="mb-7 flex items-center gap-3 border-b border-white/20 pb-5">
                            <ShieldCheck className="text-gold" size={34} aria-hidden="true" />
                            <h3 className="text-xl font-semibold md:text-2xl">Thông tin công ty</h3>
                        </div>
                        <dl className="space-y-5">
                            {COMPANY_FACTS.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <Icon className="mt-0.5 shrink-0 text-gold" size={19} aria-hidden="true" />
                                    <div className="min-w-0 sm:flex sm:gap-3">
                                        <dt className="shrink-0 text-sm text-white/65 sm:w-28">{label}</dt>
                                        <dd className="mt-1 text-sm font-medium leading-relaxed text-white sm:mt-0">{value}</dd>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-8">
                        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-navy-900/10" aria-hidden="true" />
                        <ShieldCheck className="absolute bottom-8 right-8 h-56 w-56 text-navy-900/10" strokeWidth={1} aria-hidden="true" />
                        <div className="relative flex h-full flex-col justify-between">
                            <span className="self-start rounded-full border border-navy-900/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
                                Thế An Security
                            </span>
                            <div className="max-w-sm">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-deep">Bảo vệ chuyên nghiệp</p>
                                <p className="mt-3 text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">An tâm vận hành. Vững bước phát triển.</p>
                            </div>
                        </div>
                    </div>
                </div>

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
