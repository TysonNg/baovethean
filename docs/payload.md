# Payload CMS — Hướng dẫn chạy local (Phase 1)

Payload được tích hợp trực tiếp vào app Next.js này (không tách repo). Admin panel ở `/admin`, REST/GraphQL ở `/api/*`.

## 1. Yêu cầu

- Node 22+, npm
- Docker (cho PostgreSQL local) hoặc một PostgreSQL sẵn có

## 2. Cài đặt

```bash
npm install
cp .env.example .env
# Mở .env, điền PAYLOAD_SECRET (vd: openssl rand -base64 32)
```

## 3. Khởi động database

```bash
docker compose up -d          # PostgreSQL tại localhost:5432, db "baovethean"
```

Nếu dùng PostgreSQL riêng, chỉ cần sửa `DATABASE_URI` trong `.env`.

## 4. Sinh types & import map

```bash
npm run generate:types        # tạo payload-types.ts
npm run generate:importmap    # cập nhật app/(payload)/admin/importMap.js
```

## 5. Migration

Payload dùng migration cho PostgreSQL (không push schema trực tiếp lên production).

```bash
npm run migrate:create        # tạo file migration từ schema hiện tại
npm run migrate               # chạy migration
```

Trong dev, lần đầu Payload có thể tự đồng bộ schema; với production hãy luôn dùng `migrate`.
Rollback: khôi phục từ backup database, hoặc `payload migrate:down` cho migration gần nhất.

## 6. Chạy dev & tạo admin đầu tiên

```bash
npm run dev
```

- Mở `http://localhost:3000/admin`.
- Lần đầu, Payload hiển thị form **Create First User** — user đầu tiên được gán role `super-admin` tự động.
- Không hardcode tài khoản/mật khẩu admin vào source; tạo qua Admin UI.

## 7. Storage ảnh

- Giai đoạn đầu: ảnh lưu local tại thư mục `media/` (đã gitignore). Với Docker production cần mount volume bền vững cho thư mục này.
- Chuyển R2/S3 sau: cài `@payloadcms/storage-s3` và khai báo plugin trong `lib/storage/index.ts`, bỏ `staticDir` ở `collections/Media.ts`.

## 8. Preview bản nháp

- Đặt `PAYLOAD_PREVIEW_SECRET` trong `.env` (chuỗi ngẫu nhiên).
- Trong admin, mở một bài viết → nút **Preview** mở `/preview?secret=…&slug=…`, bật draft mode (cookie an toàn) rồi chuyển tới `/bai-viet/[slug]` hiển thị bản nháp kèm banner.
- Trang preview luôn `noindex, nofollow`; bài chưa publish không truy cập được nếu không ở chế độ preview và không xuất hiện trong sitemap.
- Thoát: `/preview/exit`.

## 9. Phân quyền (Phase 1)

Roles: `super-admin`, `admin`, `editor`, `content-writer`, `sales`, `viewer`.
- Chỉ `super-admin` được đặt/đổi `role` và `isActive` (chống tự nâng quyền).
- User có `isActive = false` không đăng nhập được.
- Media đọc public (phục vụ website), tạo/sửa/xóa cần đăng nhập.
- SiteSettings đọc public, cập nhật cần `admin`+.
