import { getPayload } from "payload";
import config from "@payload-config";

/**
 * Helper Local API dùng trong server-side code (Server Components, route handlers).
 * Payload cache instance nội bộ nên gọi nhiều lần an toàn.
 */
export const getPayloadClient = () => getPayload({ config });
