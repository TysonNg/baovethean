# Capability Profile PDF Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cho phép khách truy cập xem trực tiếp và tải hồ sơ năng lực PDF từ trang `/ho-so-nang-luc`.

**Architecture:** PDF được phục vụ như tài nguyên tĩnh từ `public/documents/ho-so-nang-luc.pdf`. Server Component hiện có nhúng tài liệu bằng `iframe`, đồng thời cung cấp liên kết mở tab mới, liên kết tải xuống và nội dung dự phòng.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4, TypeScript, Tailwind CSS 4, Node.js test runner.

## Global Constraints

- Tên URL của PDF phải dùng ký tự ASCII: `/documents/ho-so-nang-luc.pdf`.
- Không thêm thư viện PDF phía máy khách hoặc API mới.
- Giữ nguyên hero và danh sách nội dung hồ sơ hiện có.
- Trình xem phải responsive và có liên kết dự phòng.
- Không sửa các thay đổi không liên quan đang có trong worktree.

---

### Task 1: Tích hợp tài liệu hồ sơ năng lực

**Files:**
- Create: `lib/capability-profile.test.mts`
- Create: `public/documents/ho-so-nang-luc.pdf`
- Modify: `app/(frontend)/ho-so-nang-luc/page.tsx`

**Interfaces:**
- Consumes: file nguồn `Hồ sơ năng lực.pdf`.
- Produces: URL công khai `/documents/ho-so-nang-luc.pdf` và giao diện xem/tải trên `/ho-so-nang-luc`.

- [ ] **Step 1: Viết kiểm thử thất bại cho tài nguyên và giao diện**

```ts
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../app/(frontend)/ho-so-nang-luc/page.tsx", import.meta.url);
const pdfPath = new URL("../public/documents/ho-so-nang-luc.pdf", import.meta.url);
const pdfUrl = "/documents/ho-so-nang-luc.pdf";

test("publishes the capability profile PDF", async () => {
    const file = await stat(pdfPath);
    assert.ok(file.size > 0);
});

test("offers embedded viewing, full-screen opening, downloading, and fallback", async () => {
    const source = await readFile(pagePath, "utf8");
    assert.match(source, /const PROFILE_PDF_URL = "\/documents\/ho-so-nang-luc\.pdf"/);
    assert.match(source, /<iframe/);
    assert.match(source, /src=\{`\$\{PROFILE_PDF_URL\}#view=FitH`\}/);
    assert.match(source, /target="_blank"/);
    assert.match(source, /download/);
    assert.match(source, /Nếu trình duyệt không hiển thị được PDF/);
});
```

- [ ] **Step 2: Chạy kiểm thử để xác nhận trạng thái RED**

Run: `node --test lib/capability-profile.test.mts`

Expected: FAIL vì `public/documents/ho-so-nang-luc.pdf` và phần tử `iframe` chưa tồn tại.

- [ ] **Step 3: Sao chép PDF sang đường dẫn công khai**

Tạo thư mục `public/documents`, sau đó sao chép nguyên vẹn `Hồ sơ năng lực.pdf` thành `public/documents/ho-so-nang-luc.pdf`. Xác nhận kích thước hai file bằng nhau.

- [ ] **Step 4: Cập nhật trang hồ sơ năng lực**

Trong `app/(frontend)/ho-so-nang-luc/page.tsx`:

- Khai báo `const PROFILE_PDF_URL = "/documents/ho-so-nang-luc.pdf";`.
- Thay nội dung “đang chờ tài liệu” bằng trạng thái tài liệu đã sẵn sàng.
- Thay nút neo nội bộ bằng liên kết mở PDF trong tab mới với `target="_blank"` và `rel="noreferrer"`.
- Thay nút vô hiệu hóa bằng thẻ `<a href={PROFILE_PDF_URL} download>`.
- Thêm một khối bên dưới grid chứa tiêu đề “Xem trực tiếp hồ sơ năng lực” và:

```tsx
<iframe
    src={`${PROFILE_PDF_URL}#view=FitH`}
    title="Hồ sơ năng lực Bảo vệ Thế An"
    className="h-[70vh] min-h-[520px] w-full bg-white md:min-h-[720px]"
>
    <p>
        Nếu trình duyệt không hiển thị được PDF,{" "}
        <a href={PROFILE_PDF_URL} target="_blank" rel="noreferrer">
            mở hồ sơ năng lực tại đây
        </a>
        .
    </p>
</iframe>
```

- [ ] **Step 5: Chạy kiểm thử để xác nhận trạng thái GREEN**

Run: `node --test lib/capability-profile.test.mts`

Expected: 2 tests PASS.

- [ ] **Step 6: Kiểm tra chất lượng**

Run: `npx eslint "app/(frontend)/ho-so-nang-luc/page.tsx" lib/capability-profile.test.mts`

Expected: exit code 0.

Run: `npm run build`

Expected: build thành công và route `/ho-so-nang-luc` được tạo.

- [ ] **Step 7: Kiểm tra tài nguyên cuối**

Run: `Get-FileHash '.\Hồ sơ năng lực.pdf'; Get-FileHash '.\public\documents\ho-so-nang-luc.pdf'`

Expected: hai giá trị SHA256 giống nhau.
