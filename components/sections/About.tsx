import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { CORE_VALUES } from "@/lib/data";



export default function About() {
    return (
        <section id="about" className="py-20 md:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 items-center">
                    <div className="relative">
                        <Photo
                            label="IMG · 02"
                            className="aspect-[3/4] w-full"
                        />
                        <div className="absolute bottom-6 left-6 bg-navy-900 text-white px-5 py-4 rounded">
                            <div className="text-xs uppercase tracking-wider text-gold-soft mb-1">
                                Giám sát mọi ca — mọi lúc
                            </div>
                            <span className="text-4xl font-bold font-serif text-gold">
                                24/7
                            </span>
                            <span className="block text-[10px] uppercase tracking-wider text-white/50 mt-1">
                                Trung tâm điều hành
                            </span>
                        </div>
                    </div>

                    <div>
                        <Eyebrow text="Về Bảo vệ Thế An" />
                        <h2 className="heading-1 text-ink mt-4 mb-5">
                            Mười năm xây dựng uy tín — phục vụ doanh nghiệp bằng
                            kỷ luật và tận tâm.
                        </h2>
                        <p className="text-ink-3 mb-3 leading-relaxed">
                            Thành lập năm 2014, Bảo vệ Thế An cung cấp giải pháp an
                            ninh toàn diện cho hơn 200 doanh nghiệp tại 18 tỉnh
                            thành, đội ngũ hơn 500 nhân sự đã được huấn luyện chuyên
                            sâu, đều tra nghiệm về đạo đức nghề nghiệp.
                        </p>
                        <p className="text-ink-3 mb-8 leading-relaxed">
                            Chúng tôi tin rằng an ninh doanh nghiệp không chỉ là
                            giữ gìn tài sản — đó là xây dựng niềm tin.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {CORE_VALUES.map((value) => (
                                <div
                                    key={value.title}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 bg-gold/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-gold rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-ink mb-1">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-ink-3">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
