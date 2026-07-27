import type { ContactDetails } from "./ContactInfo";

interface ContactMapProps {
    details: ContactDetails;
    mapUrl?: string | null;
}

function getMapUrl(mapUrl: string | null | undefined, address: string) {
    const configuredUrl = mapUrl?.trim();
    if (configuredUrl) return configuredUrl;

    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export default function ContactMap({ details, mapUrl }: ContactMapProps) {
    return (
        <section aria-label="Vị trí văn phòng">
            <iframe
                src={getMapUrl(mapUrl, details.address)}
                title={`Bản đồ vị trí ${details.address}`}
                loading="lazy"
                className="block h-[360px] w-full border-0 md:h-[480px]"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </section>
    );
}
