# Bảo vệ Thế An — Landing Page

> **Công ty Cổ phần Dịch vụ Bảo vệ Thế An**
> Vietnam Security Services · Est. 2014
> Dịch vụ bảo vệ chuyên nghiệp cho doanh nghiệp Việt Nam.

---

## 1. Tổng quan

Trang chủ marketing cho công ty dịch vụ bảo vệ Việt Nam — định vị B2B cao cấp (tòa nhà, nhà máy, kho bãi, công trình), phong cách kỷ luật và đáng tin cậy, không sử dụng hiệu ứng SaaS / cybersecurity / glassmorphism.

- **Ngôn ngữ:** Tiếng Việt
- **Bố cục:** Một trang dài, 12 section, responsive (desktop + mobile)
- **Tương tác:** Static — hover states + mobile menu drawer
- **Tweak panel:** Đổi tông gold, đổi độ sâu navy, mở preview mobile

---

## 2. Hệ thống thiết kế

### 2.1. Bảng màu

| Token             | Hex        | Sử dụng |
| ----------------- | ---------- | ------- |
| `--navy-900`      | `#07172E`  | Nền tối chính, footer, CTA band |
| `--navy-800`      | `#0B1E3F`  | Nền tối phụ |
| `--navy-700`      | `#13284E`  | Hover, placeholder photo |
| `--gold`          | `#C9A14A`  | Accent chính (CTA, gạch chân nav active) |
| `--gold-soft`     | `#E0C181`  | Accent trên nền tối |
| `--gold-deep`     | `#A68235`  | Eyebrow text, hover button |
| `--bg`            | `#FFFFFF`  | Nền sáng |
| `--bg-alt`        | `#F6F4EE`  | Nền section xen kẽ (warm off-white) |
| `--line`          | `#E4E0D4`  | Đường kẻ hairline |
| `--ink`           | `#0E1626`  | Text chính |
| `--ink-3`         | `#5A6377`  | Text phụ, muted |

**Tweak — Gold accent:**
- Muted (`#C9A14A`) — default, ấm và kín đáo
- Warm (`#E0B65C`) — vàng tươi hơn
- Amber (`#D17A3A`) — cam hổ phách

**Tweak — Navy depth:**
- Deep / Midnight (`#07172E`) — default, trang trọng
- Classic (`#0E2349`) — navy xanh truyền thống
- Soft (`#1A2C4E`) — navy nhẹ, hiện đại

### 2.2. Typography

- **Sans:** Be Vietnam Pro (400 / 500 / 600 / 700)
- **Serif:** Source Serif 4 (cho số thứ tự process, dấu trích dẫn, blockquote)

| Class        | Size                    | Sử dụng |
| ------------ | ----------------------- | ------- |
| `.h-display` | `clamp(36px, 4.6vw, 60px)` | Hero H1 |
| `.h-1`       | `clamp(30px, 3.3vw, 44px)` | Section title |
| `.h-2`       | `clamp(24px, 2.2vw, 32px)` | Sub-section |
| `.h-3`       | `20px`                  | Card title |
| `.lead`      | `18px`                  | Đoạn mở đầu |
| `.eyebrow`   | `12px / 0.18em letter-spacing / uppercase` | Section eyebrow (gạch ngang gold trước) |

### 2.3. Spacing & layout

- Container: `1240px` max-width, `24px` gutter
- Section padding-y: `96px` desktop / `64px` mobile
- Radius: `4px` (cards, buttons) — không bo tròn mạnh để giữ cảm giác corporate

---

## 3. Cấu trúc trang (12 section)

| #  | Section            | ID         | Tóm tắt |
| -- | ------------------ | ---------- | ------- |
| 01 | Header sticky      | `#top`     | Logo · 7 nav · hotline · CTA "Nhận báo giá" |
| 02 | Hero               | —          | Headline 2 dòng · 4 stat · hero image + badge "24/7" + tem "10+ năm kinh nghiệm" |
| 03 | Trust bar          | —          | 6 industry icons: Nhà máy · Tòa nhà · Chung cư · Kho bãi · Công trình · Sự kiện |
| 04 | About              | `#about`   | "Mười năm xây dựng uy tín" · 4 giá trị cốt lõi (Kỷ luật · Trách nhiệm · Tận tâm · An toàn) + stat card "24/7" |
| 05 | Services           | `#services`| 6 dịch vụ (tòa nhà, nhà máy, kho bãi, công trình, sự kiện, cửa hàng / siêu thị) |
| 06 | Why Choose (navy)  | —          | 6 lý do + 3 tag chứng nhận (Giấy phép ANTT · ISO 9001 · PCCC) |
| 07 | Process            | `#process` | 6 bước: Tiếp nhận → Khảo sát → Đề xuất → Ký hợp đồng → Triển khai → Giám sát |
| 08 | Standards          | —          | 6 tiêu chuẩn nhân sự (lý lịch, đào tạo 120h, PCCC, xử lý tình huống, tác phong, giám sát) + seal ISO 9001:2015 |
| 09 | Clients            | `#clients` | Logo grid 6×2 + testimonial + hợp tác summary card |
| 10 | CTA band (navy)    | `#contact` | Hotline `1900 8688` + "Nhận báo giá" |
| 11 | News               | `#news`    | 3 bài viết (Kinh nghiệm · Quy trình · Nhân sự) |
| 12 | Footer             | —          | 4 cột: brand + địa chỉ · liên kết nhanh · dịch vụ · báo giá + socials · copyright + MST |

---

## 4. Nội dung chính

### 4.1. Hero

> **Dịch vụ bảo vệ chuyên nghiệp cho doanh nghiệp Việt Nam**
>
> Cung cấp đội ngũ bảo vệ được đào tạo bài bản, quy trình vận hành chặt chẽ và giám sát 24/7 — giúp doanh nghiệp an tâm tập trung vào hoạt động kinh doanh.

**Stats:**
- 10+ năm kinh nghiệm
- 500+ nhân sự chính thức
- 200+ khách hàng doanh nghiệp
- 24/7 giám sát ca trực

### 4.2. Services

| # | Tên | Mô tả |
| - | --- | ----- |
| 01 | Bảo vệ tòa nhà | Kiểm soát ra vào, tuần tra định kỳ, hỗ trợ cư dân, phối hợp BQL |
| 02 | Bảo vệ nhà máy | An ninh khu sản xuất, kiểm soát phương tiện, PCCC |
| 03 | Bảo vệ kho bãi | Giám sát hàng hóa, xuất nhập kho, camera 24/7 |
| 04 | Bảo vệ công trình | Quản lý vật tư, nhân công ra vào, an ninh thi công |
| 05 | Bảo vệ sự kiện | Triển khai nhanh, kiểm soát đám đông |
| 06 | Bảo vệ cửa hàng / siêu thị | Phòng chống thất thoát, hỗ trợ khách hàng |

### 4.3. Quy trình hợp tác (6 bước)

1. **Tiếp nhận nhu cầu** — Tư vấn qua hotline / email
2. **Khảo sát địa điểm** — Đánh giá thực địa, rủi ro, đặc thù vận hành
3. **Đề xuất phương án** — Thiết kế giải pháp an ninh, nhân sự, thiết bị
4. **Ký hợp đồng** — Cam kết SLA, phạm vi, trách nhiệm
5. **Triển khai nhân sự** — Bố trí ca trực, bàn giao theo điều lệnh
6. **Giám sát & báo cáo** — Kiểm tra định kỳ, báo cáo minh bạch

### 4.4. Tiêu chuẩn nhân sự

| Mã    | Tiêu chuẩn                          | Tần suất |
| ----- | ----------------------------------- | -------- |
| TC·01 | Kiểm tra lý lịch nhân sự            | Bắt buộc trước tuyển |
| TC·02 | Đào tạo nghiệp vụ bảo vệ            | 120 giờ / khóa |
| TC·03 | Kỹ năng PCCC                        | Định kỳ hàng quý |
| TC·04 | Kỹ năng xử lý tình huống            | Diễn tập thường xuyên |
| TC·05 | Tác phong, giao tiếp, điều lệnh     | Đánh giá tháng |
| TC·06 | Giám sát và đánh giá định kỳ        | Báo cáo hàng tuần |

---

## 5. Thông tin liên hệ (placeholder)

- **Địa chỉ:** Tầng 8, Tòa nhà Centec, 72–74 Nguyễn Thị Minh Khai, Q.3, TP. Hồ Chí Minh
- **Hotline 24/7:** 1900 8688
- **Email:** contact@baovethean.vn
- **Giờ làm việc:** T2 – T7: 08:00 – 17:30 · Hotline khẩn cấp 24/7
- **MST:** 0312345678
- **Mạng xã hội:** Facebook · LinkedIn · YouTube · Zalo

---

## 6. Cấu trúc file

```
index.html              Entry — load fonts, css, JSX scripts
styles.css              Tokens + tất cả style
tweaks-panel.jsx        Tweaks panel scaffold
comp-shared.jsx         Icons (Ico), <Photo>, <Mark>
comp-top.jsx            Header, MobileDrawer, Hero, Trustbar, About
comp-mid.jsx            Services, WhyChoose, Process, Standards
comp-bottom.jsx         Clients, CtaBand, News, Footer
app.jsx                 App composition + theme switching + mobile preview iframe
```

---

## 7. Việc cần làm trước khi launch

- [ ] Thay tất cả `Photo` placeholder bằng ảnh thật (đội bảo vệ ca trực, trung tâm điều hành, buổi tập huấn, văn phòng, sự kiện…)
- [ ] Cập nhật logo khách hàng thật (thay text "VINACONEX" etc. bằng SVG/PNG có sự đồng ý)
- [ ] Cập nhật MST, địa chỉ, hotline thật của doanh nghiệp
- [ ] Cập nhật giấy phép ANTT thực tế (số giấy phép, ngày cấp, cơ quan cấp)
- [ ] Kết nối form "Nhận báo giá" với CRM / email / Zalo OA
- [ ] Tracking: GA4, Meta Pixel, conversion goals (cuộc gọi hotline, submit form)
- [ ] SEO: meta description theo từng trang, schema.org `LocalBusiness` / `SecurityService`
- [ ] Sitemap.xml, robots.txt, favicon, OG image
- [ ] Bài viết blog thật (3 placeholder hiện tại chỉ có tiêu đề + tóm tắt)
- [ ] Trang con: trang chi tiết từng dịch vụ, trang Giới thiệu đầy đủ, trang Tuyển dụng (đặc biệt quan trọng cho ngành bảo vệ)
- [ ] Chính sách bảo mật + Điều khoản sử dụng (link footer hiện chưa có nội dung)
- [ ] Test trên trình duyệt Việt Nam phổ biến (Cốc Cốc, Chrome trên Android tầm trung)

---

*File này dùng cho mục đích bàn giao thiết kế — không phải nội dung public.*
