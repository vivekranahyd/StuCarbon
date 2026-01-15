---
description: How to create and publish new blog posts for StuCarbon
---

# Create Blog Posts Workflow

Follow these steps when adding new blog posts to the StuCarbon website:

## 1. Add Blog Post Data
Add the new blog post object(s) to `src/data/blogPosts.js`:
- Increment the `id` from the last post
- Create a unique, SEO-friendly `slug`
- Include all required fields: title, excerpt, category, date, readTime, emoji
- Add SEO meta: metaTitle, metaDescription, keywords
- Add structured data: author, datePublished, dateModified
- Write full content with intro, sections, conclusion, and FAQs
- Include relatedPosts array with 3 related slugs

## 2. Update Sitemap (REQUIRED)
// turbo
Add entries to `public/sitemap.xml` for each new blog post:
```xml
<url>
  <loc>https://stucarbon.com/blog/{slug}</loc>
  <lastmod>{YYYY-MM-DD}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

Also update the `lastmod` date for the main blog page entry:
```xml
<url>
  <loc>https://stucarbon.com/blog</loc>
  <lastmod>{today's date}</lastmod>
  ...
</url>
```

## 3. Generate Images (Optional)
If the blog post needs a featured image, use the generate_image tool to create one and save it to `public/blog/`.

## 4. Verify
- Check that the blog post renders correctly at `/blog/{slug}`
- Verify the sitemap is valid XML
- Confirm all internal links work

## Notes
- Date format in sitemap: `YYYY-MM-DD`
- Date format in blogPosts.js: `Month DD, YYYY` (e.g., "January 15, 2026")
- datePublished/dateModified format: ISO 8601 (e.g., "2026-01-15T10:00:00+05:30")

## JSON-LD Structured Data Guidelines
All pages with JSON-LD structured data MUST use the shared `safeJsonStringify` utility from `src/utils/jsonLd.js`. This prevents Google Search Console parsing errors by escaping special characters.

**How to use:**
```jsx
import { safeJsonStringify } from '../../utils/jsonLd';

<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: safeJsonStringify(yourDataObject) }}
/>
```

**Never use:**
- Template literals with `{``}` for JSON-LD
- Plain `JSON.stringify()` without the safe wrapper

