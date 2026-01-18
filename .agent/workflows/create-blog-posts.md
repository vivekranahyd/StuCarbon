---
description: How to create and publish new blog posts for StuCarbon
---

# Create Blog Posts Workflow

Follow these steps when adding new blog posts to the StuCarbon website:

## 1. Add Blog Post Data
Add the new blog post object(s) to `src/data/blogPosts.js`:
- Increment the `id` from the last post
- Create a unique, SEO-friendly `slug`
- **Catchy Title**: Title MUST be short (max 10 words) and highly clickable (Discover-optimized).
- Include all required fields: title, excerpt, category, date, readTime, emoji
- Add SEO meta: metaTitle, metaDescription, keywords
- Add structured data: author, datePublished, dateModified
- Write full content with intro, sections, conclusion, and FAQs
- Include relatedPosts array with 3 related slugs

## 2. Approve & Publish (AUTOMATED)
// turbo
Once you have verified the articles and visuals, run the master publish script:
```bash
node publish.cjs
```
This single command handles everything:
1.  **Sitemap**: Re-generates `sitemap.xml` automatically.
2.  **Git**: Adds changes, commits, and pushes to GitHub.
3.  **Indexing**: Sends the latest URLs to Google's Indexing API (only after the push is successful).

**Note**: Ensure your `service-account.json` is in the root directory for indexing to work.

## 3. Generate Images (Optional)
If the blog post needs a featured image, use the generate_image tool to create one and save it to `public/blog/`.

## 4. Performance Optimization (MANDATORY FINAL STEP)
// turbo
Ensure the article scores ~100 on PageSpeed Insights:
1.  **Optimize Images**: Run `node optimize_images.js`. This converts PNGs to WebP and resizes them to 1200px.
2.  **Verify Layout Shifts**: Confirm all images in `Blog.jsx` have explicit `width` and `height` attributes.
3.  **Check SEO Tags**: Verify JSON-LD and meta tags are present for "Best Practices".

## 5. Verify & Audit
// turbo
1.  **Local Audit**: Run `node analyze_lighthouse.js` to check scores.
2.  **Visual Check**: Verify the blog post renders correctly at `/blog/{slug}`.
3.  **Sitemap**: Verify the sitemap is valid XML and the new link works.
4.  **Links**: Confirm all internal links work.

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

