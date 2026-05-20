import { Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { COMPANY, FOOTER_LINKS, FOOTER_SERVICES } from "@/lib/data";

function SocialIcon({ d }: { d: string }) {
    return (
        <a
            href="#"
            className="w-9 h-9 border border-navy-700 rounded flex items-center justify-center text-white/60 hover:text-gold-soft hover:border-gold-soft transition-colors"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d={d} />
            </svg>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-white pt-16 pb-6">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-navy-700">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gold/20 rounded flex items-center justify-center">
                                <Shield size={16} className="text-gold" fill="#C9A14A" />
                            </div>
                            <div className="leading-tight">
                                <span className="text-sm font-bold">
                                    {COMPANY.name}
                                </span>
                                <span className="block text-[9px] tracking-[0.15em] uppercase text-white/50">
                                    Vietnam Security Services
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-white/60 mb-6">
                            {COMPANY.fullName} — {COMPANY.description.toLowerCase()}
                        </p>
                        <div className="space-y-2.5 text-sm text-white/60">
                            <div className="flex gap-2">
                                <MapPin size={16} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                                <span>{COMPANY.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="shrink-0" strokeWidth={1.5} />
                                <span>
                                    Hotline 24/7:{" "}
                                    <strong className="text-white">{COMPANY.hotline}</strong>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="shrink-0" strokeWidth={1.5} />
                                <span>{COMPANY.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="shrink-0" strokeWidth={1.5} />
                                <span>{COMPANY.hours}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">
                            Liên kết nhanh
                        </h4>
                        <nav className="flex flex-col gap-2.5">
                            {FOOTER_LINKS.map((link) => (
                                <a
                                    key={link.href + link.label}
                                    href={link.href}
                                    className="text-sm text-white/60 hover:text-gold-soft transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">Dịch vụ</h4>
                        <nav className="flex flex-col gap-2.5">
                            {FOOTER_SERVICES.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-white/60 hover:text-gold-soft transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">
                            Nhận báo giá
                        </h4>
                        <p className="text-sm text-white/60 mb-5">
                            Để lại thông tin — bộ phận tư vấn sẽ liên hệ trong vòng
                            4 giờ làm việc.
                        </p>
                        <Button
                            href="#contact"
                            variant="outline"
                            arrow
                            className="w-full border-navy-700 text-white hover:border-gold-soft mb-6"
                        >
                            Yêu cầu khảo sát
                        </Button>
                        <div className="flex gap-2">
                            <SocialIcon d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            <SocialIcon d="M16 8a6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6zM8.56 10.44h.88V8.84a1.28 1.28 0 011.32-1.4h.8V6.2h-.64A2.48 2.48 0 008.56 8.72v1.72zM6.88 10.44H5.2V6.2h1.68v4.24zm-.84-4.84a.92.92 0 110-1.84.92.92 0 010 1.84z" />
                            <SocialIcon d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                            <SocialIcon d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-white/40">
                    <span>
                        &copy; 2026 {COMPANY.fullName} · MST {COMPANY.mst}
                    </span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white/60 transition-colors">
                            Chính sách bảo mật
                        </a>
                        <a href="#" className="hover:text-white/60 transition-colors">
                            Điều khoản sử dụng
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
