import type { Plugin } from "payload";

/**
 * Điểm swap storage.
 * Giai đoạn đầu: lưu ảnh local trên VPS (Media collection dùng `upload.staticDir`).
 * Khi chuyển sang Cloudflare R2 / S3: cài `@payloadcms/storage-s3`,
 * trả về plugin tại đây và bỏ `staticDir` ở `collections/Media.ts`.
 */
export const storagePlugins: Plugin[] = [];
