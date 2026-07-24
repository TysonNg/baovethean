import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/tin-tuc",
                destination: "/bai-viet",
                permanent: true,
            },
            {
                source: "/tin-tuc/:slug",
                destination: "/bai-viet/:slug",
                permanent: true,
            },
        ];
    },
};

export default withPayload(nextConfig);
