import Image from "next/image";

export default function Loading() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex min-h-screen items-center justify-center bg-white"
        >
            <div className="relative flex h-24 w-24 items-center justify-center">
                <span
                    aria-hidden="true"
                    className="loading-orbit absolute inset-0 rounded-full border-2 border-line border-t-gold"
                />
                <Image
                    src="/logo1.png"
                    alt=""
                    width={56}
                    height={56}
                    priority
                    className="h-14 w-14 object-contain"
                />
                <span className="sr-only">Đang tải nội dung trang.</span>
            </div>
        </div>
    );
}
