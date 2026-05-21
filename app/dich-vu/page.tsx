import type { Metadata } from "next";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceOverview from "@/components/sections/service/ServiceOverview";
import ServiceGroups from "@/components/sections/service/ServiceGroups";
import ServiceApproach from "@/components/sections/service/ServiceApproach";
import ServiceProcess from "@/components/sections/service/ServiceProcess";
import ServiceWhy from "@/components/sections/service/ServiceWhy";
import ServiceSectors from "@/components/sections/service/ServiceSectors";
import ServiceCTA from "@/components/sections/service/ServiceCTA";

export const metadata: Metadata = {
    title: "Dịch vụ bảo vệ chuyên nghiệp",
    description:
        "Bảo vệ Thế An cung cấp 6 nhóm dịch vụ bảo vệ chuyên nghiệp: tòa nhà, nhà máy, kho bãi, công trình, sự kiện, cửa hàng. Khảo sát miễn phí, triển khai toàn quốc.",
};

export default function DichVuPage() {
    return (
        <>
            <ServiceHero />
            <ServiceOverview />
            <ServiceGroups />
            <ServiceApproach />
            <ServiceProcess />
            <ServiceWhy />
            <ServiceSectors />
            <ServiceCTA />
        </>
    );
}
