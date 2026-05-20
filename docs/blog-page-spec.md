# Blog Page (`/tin-tuc`) — Implementation Spec

## Tổng quan

Build trang tin tức listing tại route `/tin-tuc`. Gồm 3 phần: Hero, Featured article, Article grid + sidebar + pagination. Tất cả static data, chưa có backend.

## File Structure

```
app/
    tin-tuc/
        page.tsx                   # New — page assembly + metadata
    sitemap.ts                     # Edit — add /tin-tuc entry
components/
    sections/
        blog/
            BlogHero.tsx           # New — breadcrumb + heading
            BlogFeatured.tsx       # New — featured article 2-col (bg-alt)
            BlogGrid.tsx           # New — "use client" — filters + grid + sidebar + pagination
            BlogCard.tsx           # New — article card
            BlogFilters.tsx        # New — category filter tabs
            BlogSidebar.tsx        # New — search + popular + categories + CTA
            BlogPagination.tsx     # New — page controls
    sections/
        News.tsx                   # Edit — update "Xem tất cả" button href to "/tin-tuc"
lib/
    data.ts                        # Edit — update 2 nav link hrefs
    blog-data.ts                   # New — 12 articles + categories + per-page constant
types/
    index.ts                       # Edit — add BlogArticle, BlogCategory interfaces
```

**Total: 4 edited, 9 new files.**

---

## Step 1: Types — Edit `types/index.ts`

Append these interfaces after the existing ones:

```typescript
export interface BlogArticle {
    slug: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    content: string;
    imageLabel: string;
    author: string;
    authorInitials: string;
    readTime: number;
    featured?: boolean;
}

export interface BlogCategory {
    label: string;
    slug: string;
}
```

---

## Step 2: Data — Create `lib/blog-data.ts`

```typescript
import type { BlogArticle, BlogCategory } from "@/types";

export const BLOG_PER_PAGE = 9;

export const BLOG_CATEGORIES: BlogCategory[] = [
    { label: "Kinh nghiệm", slug: "kinh-nghiem" },
    { label: "Quy trình", slug: "quy-trinh" },
    { label: "Nhân sự", slug: "nhan-su" },
    { label: "Bảo vệ nhà máy", slug: "bao-ve-nha-may" },
    { label: "An ninh doanh nghiệp", slug: "an-ninh-doanh-nghiep" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: "quy-trinh-trien-khai-bao-ve-nha-may",
        category: "Bảo vệ nhà máy",
        date: "12 · 05 · 2026",
        title: "Quy trình triển khai dịch vụ bảo vệ nhà máy chuyên nghiệp",
        excerpt: "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ.",
        content: "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ ngay từ ngày đầu tiên triển khai. Bài viết tổng hợp kinh nghiệm thực tế tại các khu công nghiệp Bình Dương, Đồng Nai và Long An.",
        imageLabel: "IMG · F01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 8,
        featured: true,
    },
    {
        slug: "kinh-nghiem-lua-chon-cong-ty-bao-ve",
        category: "Kinh nghiệm",
        date: "12 · 05 · 2026",
        title: "Kinh nghiệm lựa chọn công ty bảo vệ uy tín cho doanh nghiệp",
        excerpt: "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn.",
        content: "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn. Từ giấy phép, kinh nghiệm, quy trình đào tạo đến chế độ giám sát và cam kết SLA.",
        imageLabel: "ART · 01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "quy-trinh-bao-ve-nha-may-chuyen-nghiep",
        category: "Quy trình",
        date: "28 · 04 · 2026",
        title: "Quy trình bảo vệ nhà máy chuyên nghiệp theo chuẩn doanh nghiệp",
        excerpt: "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp.",
        content: "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp. Áp dụng tại hơn 50 nhà máy trên toàn quốc.",
        imageLabel: "ART · 02",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "tieu-chuan-nhan-vien-bao-ve-chuyen-nghiep",
        category: "Nhân sự",
        date: "15 · 04 · 2026",
        title: "Những tiêu chuẩn cần có của một nhân viên bảo vệ chuyên nghiệp",
        excerpt: "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp.",
        content: "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp với nhân viên bảo vệ thông thường.",
        imageLabel: "ART · 03",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 5,
    },
    {
        slug: "giai-phap-an-ninh-toa-nha-van-phong",
        category: "An ninh doanh nghiệp",
        date: "08 · 04 · 2026",
        title: "Giải pháp an ninh toàn diện cho tòa nhà văn phòng hạng A",
        excerpt: "Hệ thống kiểm soát ra vào, tuần tra định kỳ và phối hợp BQL — mô hình an ninh hiệu quả cho tòa nhà thương mại.",
        content: "Hệ thống kiểm soát ra vào, tuần tra định kỳ và phối hợp BQL — mô hình an ninh hiệu quả cho tòa nhà thương mại tại TP.HCM và Hà Nội.",
        imageLabel: "ART · 04",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "dao-tao-ky-nang-pccc-cho-bao-ve",
        category: "Nhân sự",
        date: "01 · 04 · 2026",
        title: "Đào tạo kỹ năng PCCC cho đội ngũ bảo vệ chuyên nghiệp",
        excerpt: "Chương trình huấn luyện PCCC 40 giờ — từ lý thuyết đến thực hành diễn tập tại hiện trường.",
        content: "Chương trình huấn luyện PCCC 40 giờ bắt buộc cho toàn bộ nhân viên bảo vệ, bao gồm lý thuyết, thực hành sử dụng bình chữa cháy và diễn tập sơ tán.",
        imageLabel: "ART · 05",
        author: "Phòng Đào tạo — Bảo vệ Thế An",
        authorInitials: "PĐ",
        readTime: 5,
    },
    {
        slug: "bao-ve-kho-bai-logistics",
        category: "Quy trình",
        date: "25 · 03 · 2026",
        title: "Bảo vệ kho bãi logistics — kiểm soát hàng hóa và phương tiện",
        excerpt: "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển tại các khu logistics lớn.",
        content: "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển tại các khu logistics lớn tại Bình Dương và Long An.",
        imageLabel: "ART · 06",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "an-ninh-su-kien-quy-mo-lon",
        category: "Kinh nghiệm",
        date: "18 · 03 · 2026",
        title: "Kinh nghiệm tổ chức an ninh cho sự kiện quy mô lớn",
        excerpt: "Triển khai nhanh, kiểm soát đám đông và phối hợp với ban tổ chức — bài học từ các sự kiện 5.000+ người tham dự.",
        content: "Kinh nghiệm triển khai đội ngũ an ninh cho các sự kiện 5.000+ người, từ lập phương án, bố trí nhân sự đến xử lý sự cố trong thời gian thực.",
        imageLabel: "ART · 07",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 8,
    },
    {
        slug: "kiem-soat-ra-vao-bang-cong-nghe",
        category: "An ninh doanh nghiệp",
        date: "10 · 03 · 2026",
        title: "Kiểm soát ra vào bằng công nghệ — xu hướng an ninh hiện đại",
        excerpt: "Tích hợp thẻ từ, nhận diện khuôn mặt và hệ thống camera AI vào quy trình bảo vệ tòa nhà và khu công nghiệp.",
        content: "Xu hướng tích hợp công nghệ vào hệ thống an ninh: thẻ từ, nhận diện khuôn mặt, camera AI — và cách Bảo vệ Thế An áp dụng tại các dự án.",
        imageLabel: "ART · 08",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 6,
    },
    {
        slug: "quan-ly-ca-truc-bao-ve-hieu-qua",
        category: "Quy trình",
        date: "02 · 03 · 2026",
        title: "Quản lý ca trực bảo vệ hiệu quả — công cụ và phương pháp",
        excerpt: "Hệ thống chấm công GPS, báo cáo ca trực tự động và quy trình giám sát đảm bảo nhân viên vận hành đúng cam kết.",
        content: "Hệ thống chấm công GPS, báo cáo ca trực tự động và quy trình giám sát đảm bảo nhân viên vận hành đúng cam kết SLA với khách hàng.",
        imageLabel: "ART · 09",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 5,
    },
    {
        slug: "bao-ve-cong-trinh-xay-dung",
        category: "Bảo vệ nhà máy",
        date: "22 · 02 · 2026",
        title: "Đặc thù bảo vệ công trình xây dựng — rủi ro và giải pháp",
        excerpt: "Quản lý vật tư, kiểm soát nhân công ra vào và đảm bảo an toàn lao động tại công trường xây dựng.",
        content: "Bảo vệ công trình xây dựng đòi hỏi sự kết hợp giữa quản lý vật tư, kiểm soát nhân công và đảm bảo an toàn lao động — những bài học thực tế từ 50+ công trình.",
        imageLabel: "ART · 10",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorInitials: "PT",
        readTime: 7,
    },
    {
        slug: "tuyen-dung-va-giu-chan-nhan-su-bao-ve",
        category: "Nhân sự",
        date: "15 · 02 · 2026",
        title: "Tuyển dụng và giữ chân nhân sự bảo vệ — thách thức ngành",
        excerpt: "Chiến lược tuyển dụng, chế độ đãi ngộ và lộ trình phát triển nghề nghiệp giúp giảm tỷ lệ nghỉ việc dưới 10%.",
        content: "Ngành bảo vệ đối mặt tỷ lệ nghỉ việc cao. Bài viết chia sẻ chiến lược tuyển dụng, đãi ngộ và phát triển nghề nghiệp giúp Bảo vệ Thế An duy trì tỷ lệ nghỉ việc dưới 10%.",
        imageLabel: "ART · 11",
        author: "Phòng Nhân sự — Bảo vệ Thế An",
        authorInitials: "NS",
        readTime: 6,
    },
];
```

---

## Step 3: Update nav links — Edit `lib/data.ts`

Tìm 2 chỗ có `{ label: "Tin tức", href: "#news" }` → đổi thành `{ label: "Tin tức", href: "/tin-tuc" }`:
- `NAV_LINKS` (khoảng dòng 21)
- `FOOTER_LINKS` (khoảng dòng 276)

## Step 4: Update News section — Edit `components/sections/News.tsx`

Đổi `<Button href="#news" ...>` thành `<Button href="/tin-tuc" ...>` (dòng 19).

---

## Step 5: BlogHero — `components/sections/blog/BlogHero.tsx`

Server component, ~35 lines.

```
- Breadcrumb: Link "Trang chủ" / span "Tin tức" (pattern from ContactHero.tsx)
- Eyebrow text="Tin tức & Kiến thức"
- h1.heading-1: "Tin tức & Kiến thức an ninh"
- p: "Cập nhật kiến thức, kinh nghiệm và giải pháp bảo vệ chuyên nghiệp cho doanh nghiệp."
```

Imports: Container, Eyebrow, Link from next/link.

---

## Step 6: BlogFeatured — `components/sections/blog/BlogFeatured.tsx`

Server component, ~80 lines. Nhận props `{ article: BlogArticle }`.

```
<section className="bg-bg-alt py-20 md:py-24">
  <Container>
    <Eyebrow text="Bài viết nổi bật" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <!-- Left: Photo -->
      <Photo label={article.imageLabel} className="aspect-[16/10]"
        overlay={
          <div className="p-4 flex flex-col justify-between h-full">
            <span "bg-gold text-white text-[11px] ...">BÀI ĐỌC NHIỀU</span>
            <span "text-[11px] text-white uppercase ...">
              {article.imageLabel caption text}
            </span>
          </div>
        }
      />
      <!-- Right -->
      <div>
        <div className="flex items-center gap-2 text-xs text-ink-3 uppercase tracking-wider mb-3">
          <span className="font-semibold text-gold-deep">{article.category}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime} phút đọc</span>
        </div>
        <h2 className="heading-2 text-ink mb-4">{article.title}</h2>
        <p className="text-ink-3 leading-relaxed mb-6">{article.content}</p>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-sm font-bold text-gold-soft">
            {article.authorInitials}
          </div>
          <div>
            <div className="text-sm font-semibold text-ink">{article.author}</div>
            <div className="text-xs text-ink-3">Cập nhật ngày ...</div>
          </div>
        </div>
        <Button href={`/tin-tuc/${article.slug}`} arrow>Đọc tiếp</Button>
      </div>
    </div>
  </Container>
</section>
```

---

## Step 7: BlogCard — `components/sections/blog/BlogCard.tsx`

Server component, ~45 lines. Nhận props `{ article: BlogArticle }`.

Pattern giống `News.tsx` article cards:
```
<article>
  <Photo label={article.imageLabel} className="aspect-[16/10] mb-4"
    overlay={category badge}
  />
  <div className="flex items-center gap-3 mb-2">
    <span "text-xs font-semibold text-gold-deep uppercase">{article.category}</span>
    <span "text-xs text-ink-3">{article.date}</span>
  </div>
  <h3 className="heading-3 text-ink mb-2">{article.title}</h3>
  <p className="text-sm text-ink-3 leading-relaxed mb-3 line-clamp-3">{article.excerpt}</p>
  <a href={`/tin-tuc/${article.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-gold-deep hover:text-gold">
    Đọc bài viết <ArrowRight size={14} />
  </a>
</article>
```

---

## Step 8: BlogFilters — `components/sections/blog/BlogFilters.tsx`

~40 lines. Render bên trong BlogGrid (client tree), KHÔNG cần `"use client"` riêng.

Props: `{ categories: BlogCategory[]; activeCategory: string | null; onCategoryChange: (slug: string | null) => void }`

```
<div className="flex flex-wrap gap-2 mb-8">
  <button
    onClick={() => onCategoryChange(null)}
    className={active === null ? "bg-navy-900 text-white ..." : "border border-line text-ink-3 ..."}
  >
    Tất cả
  </button>
  {categories.map(cat => (
    <button
      key={cat.slug}
      onClick={() => onCategoryChange(cat.slug)}
      className={active === cat.slug ? "bg-navy-900 text-white ..." : "border border-line ..."}
    >
      {cat.label}
    </button>
  ))}
</div>
```

Button style: `px-4 py-2 rounded text-sm font-medium transition-colors`.

---

## Step 9: BlogSidebar — `components/sections/blog/BlogSidebar.tsx`

~90 lines. Props: `{ articles: BlogArticle[]; categories: BlogCategory[] }`.

```
<aside className="space-y-6">
  <!-- Search (visual only) -->
  <div className="relative">
    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
    <input placeholder="Tìm kiếm bài viết..." className="w-full bg-bg-alt border border-line rounded pl-10 pr-4 h-12 text-sm" />
  </div>

  <!-- Popular articles -->
  <div className="border border-line rounded p-5">
    <h4 className="text-sm font-semibold text-ink mb-4">Bài viết đọc nhiều</h4>
    <div className="space-y-3">
      {articles.slice(0, 4).map((a, i) => (
        <a key={a.slug} href={`/tin-tuc/${a.slug}`} className="flex gap-3 group">
          <span className="text-sm font-semibold text-gold-deep font-serif">{String(i+1).padStart(2,'0')}</span>
          <span className="text-sm text-ink group-hover:text-gold-deep">{a.title}</span>
        </a>
      ))}
    </div>
  </div>

  <!-- Categories -->
  <div className="border border-line rounded p-5">
    <h4 className="text-sm font-semibold text-ink mb-4">Chuyên mục</h4>
    <div className="space-y-2">
      {categories.map(cat => {
        const count = articles.filter(a => a.category === cat.label).length;
        return (
          <div key={cat.slug} className="flex justify-between text-sm">
            <span className="text-ink-3">{cat.label}</span>
            <span className="text-ink font-medium">{count}</span>
          </div>
        );
      })}
    </div>
  </div>

  <!-- CTA card -->
  <div className="bg-navy-900 text-white rounded p-6">
    <Eyebrow text="Liên hệ tư vấn" light />
    <p className="text-sm text-white/60 mt-3 mb-4">Cần tư vấn dịch vụ bảo vệ? Gọi hotline hoặc để lại thông tin.</p>
    <p className="text-xl font-bold text-gold font-serif mb-4">1900 8688</p>
    <Button href="/lien-he" variant="outline" arrow className="w-full border-navy-700 text-white hover:border-gold-soft">
      Yêu cầu khảo sát
    </Button>
  </div>
</aside>
```

---

## Step 10: BlogPagination — `components/sections/blog/BlogPagination.tsx`

~45 lines. Render bên trong BlogGrid client tree, KHÔNG cần `"use client"`.

Props: `{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }`

```
<nav className="flex items-center justify-center gap-2 mt-12">
  <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="...">
    <ChevronLeft size={16} />
  </button>
  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
    <button key={page} onClick={() => onPageChange(page)}
      className={page === currentPage ? "bg-navy-900 text-white" : "border border-line text-ink-3 hover:border-ink"}
      + " w-10 h-10 rounded text-sm font-medium"
    >
      {page}
    </button>
  ))}
  <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="...">
    <ChevronRight size={16} />
  </button>
</nav>
```

---

## Step 11: BlogGrid — `components/sections/blog/BlogGrid.tsx`

**"use client"** — duy nhất 1 client boundary. ~100 lines.

Props: `{ articles: BlogArticle[]; categories: BlogCategory[] }`

```typescript
"use client";

import { useState, useMemo } from "react";
import BlogFilters from "./BlogFilters";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";
import BlogPagination from "./BlogPagination";
import Container from "@/components/ui/Container";
import { BLOG_PER_PAGE } from "@/lib/blog-data";
import type { BlogArticle, BlogCategory } from "@/types";

export default function BlogGrid({ articles, categories }: { articles: BlogArticle[]; categories: BlogCategory[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        if (!activeCategory) return articles;
        const cat = categories.find(c => c.slug === activeCategory);
        if (!cat) return articles;
        return articles.filter(a => a.category === cat.label);
    }, [articles, categories, activeCategory]);

    const totalPages = Math.ceil(filtered.length / BLOG_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * BLOG_PER_PAGE, currentPage * BLOG_PER_PAGE);

    function handleCategoryChange(slug: string | null) {
        setActiveCategory(slug);
        setCurrentPage(1);
    }

    return (
        <section className="py-20 md:py-24">
            <Container>
                {/* Count badge */}
                <div className="flex items-center justify-between mb-6">
                    <BlogFilters categories={categories} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
                    <span className="hidden md:block px-3 py-1.5 border border-line rounded text-xs font-medium text-ink-3 whitespace-nowrap">
                        Hiển thị {(currentPage-1)*BLOG_PER_PAGE + 1}–{Math.min(currentPage*BLOG_PER_PAGE, filtered.length)} trong {filtered.length} bài viết
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
                    {/* Article grid */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginated.map(article => (
                                <BlogCard key={article.slug} article={article} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        )}
                    </div>

                    {/* Sidebar */}
                    <BlogSidebar articles={articles} categories={categories} />
                </div>
            </Container>
        </section>
    );
}
```

---

## Step 12: Page assembly — `app/tin-tuc/page.tsx`

```typescript
import type { Metadata } from "next";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogFeatured from "@/components/sections/blog/BlogFeatured";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Tin tức & Kiến thức an ninh",
    description: "Cập nhật kiến thức, kinh nghiệm và giải pháp bảo vệ chuyên nghiệp cho doanh nghiệp. Tin tức mới nhất từ Bảo vệ Thế An.",
};

export default function BlogPage() {
    const featured = BLOG_ARTICLES.find((a) => a.featured) ?? BLOG_ARTICLES[0];
    const articles = BLOG_ARTICLES.filter((a) => a.slug !== featured.slug);

    return (
        <>
            <BlogHero />
            <BlogFeatured article={featured} />
            <BlogGrid articles={articles} categories={BLOG_CATEGORIES} />
        </>
    );
}
```

---

## Step 13: Sitemap — Edit `app/sitemap.ts`

Thêm entry:
```typescript
{
    url: "https://baovethean.vn/tin-tuc",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
},
```

---

## Key Decisions

- **Route `/tin-tuc`** — Vietnamese slug cho SEO
- **1 "use client" boundary**: chỉ `BlogGrid.tsx`. Các children (BlogFilters, BlogCard, BlogSidebar, BlogPagination) render trong client tree nên không cần directive riêng.
- **12 articles static** — đủ cho 2 trang pagination (9 + 3 sau khi trừ featured)
- **Filter + pagination client-side** — state trong BlogGrid, reset page khi đổi category
- **Badge count động** — nằm trong BlogGrid để cập nhật theo filter
- **Search sidebar visual only** — chưa wire logic
- **Reuse**: Container, Eyebrow, Button, Photo, article card pattern từ News.tsx, breadcrumb từ ContactHero.tsx
- **Icons**: lucide-react — Search, ChevronLeft, ChevronRight, ArrowRight

## Verification

1. `npm run build` — no errors
2. Dev server → `/tin-tuc` renders 3 sections
3. Featured article: 2-col layout with author info + "Đọc tiếp" button
4. Category filter: click tab → grid filters, count badge updates, page resets to 1
5. Pagination: click page 2 → shows remaining articles
6. Sidebar: search input, popular articles, categories, CTA card visible
7. Responsive: 1440px, 768px, 375px
8. Nav: "Tin tức" in Header/Footer → /tin-tuc
