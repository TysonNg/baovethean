import { ShieldCheck } from "lucide-react";

const heroLines = [
    "h-12 w-full max-w-[620px]",
    "h-12 w-10/12 max-w-[540px]",
    "h-5 w-11/12 max-w-[520px]",
    "h-5 w-8/12 max-w-[420px]",
];

const statWidths = ["w-16", "w-20", "w-14", "w-12"];

export default function Loading() {
    return (
        <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-white">
            <div className="absolute inset-y-0 left-0 hidden w-[38%] bg-navy-900 lg:block" />
            <div className="absolute inset-x-0 top-0 h-32 bg-navy-900 lg:hidden" />
            <div className="loading-progress absolute inset-x-0 top-0 z-10 h-1 bg-[linear-gradient(90deg,var(--gold),var(--gold-soft),var(--gold))]" />

            <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-12 md:py-20">
                <div
                    role="status"
                    aria-live="polite"
                    className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%]"
                >
                    <div className="rounded bg-white p-6 shadow-xl shadow-navy-900/10 ring-1 ring-line md:p-8">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded bg-navy-900">
                                <span className="loading-pulse-ring absolute -inset-1 rounded border border-gold/50" />
                                <ShieldCheck
                                    aria-hidden="true"
                                    size={24}
                                    className="relative text-gold"
                                    strokeWidth={2.2}
                                />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                                    Bảo vệ Thế An
                                </p>
                                <p className="mt-1 text-sm font-medium text-ink-3">
                                    Đang chuẩn bị trang
                                </p>
                            </div>
                        </div>

                        <div aria-hidden="true" className="space-y-4">
                            {heroLines.map((line) => (
                                <div
                                    key={line}
                                    className={`loading-shimmer rounded bg-line ${line}`}
                                />
                            ))}
                        </div>

                        <div
                            aria-hidden="true"
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <div className="loading-shimmer h-12 w-36 rounded bg-gold/80" />
                            <div className="loading-shimmer h-12 w-32 rounded border border-line bg-white" />
                        </div>

                        <div
                            aria-hidden="true"
                            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4"
                        >
                            {statWidths.map((width) => (
                                <div key={width} className="space-y-2">
                                    <div
                                        className={`loading-shimmer h-7 rounded bg-ink/10 ${width}`}
                                    />
                                    <div className="loading-shimmer h-3 w-20 rounded bg-line" />
                                </div>
                            ))}
                        </div>

                        <span className="sr-only">
                            Đang tải nội dung trang.
                        </span>
                    </div>

                    <div aria-hidden="true" className="relative mx-auto w-full max-w-[480px]">
                        <div className="loading-shimmer loading-shimmer-dark aspect-[4/5] w-full rounded bg-navy-700 shadow-2xl shadow-navy-900/20" />

                        <div className="absolute inset-8 flex items-center justify-center">
                            <div className="relative h-28 w-28">
                                <div className="absolute inset-0 rounded-full border border-gold/30" />
                                <div className="loading-orbit absolute inset-0 rounded-full border-t-2 border-gold" />
                                <div className="absolute inset-5 flex items-center justify-center rounded-full bg-white/10 text-gold ring-1 ring-white/15">
                                    <ShieldCheck size={34} strokeWidth={1.8} />
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-4 rounded bg-navy-900 px-4 py-3 text-white ring-1 ring-white/10">
                            <span className="font-serif text-3xl font-bold text-gold">
                                24/7
                            </span>
                            <span className="mt-1 block h-2 w-24 rounded bg-white/20" />
                        </div>

                        <div className="absolute right-4 top-4 rounded bg-white/95 px-4 py-3 shadow-lg shadow-navy-900/10">
                            <div className="loading-shimmer h-3 w-28 rounded bg-line" />
                            <div className="loading-shimmer mt-2 h-2 w-20 rounded bg-line" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
