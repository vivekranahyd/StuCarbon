import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rssPath = path.join(__dirname, 'public', 'rss.xml');

function generateRSS() {
    console.log('📡 Generating RSS Feed...');

    const now = new Date().toUTCString();

    let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
    <title>StuCarbon Blog</title>
    <link>https://stucarbon.com/blog</link>
    <description>Student-friendly sustainability hacks, carbon-busting tips, and guides.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://stucarbon.com/rss.xml" rel="self" type="application/rss+xml" />
`;

    blogPosts.forEach(post => {
        const pubDate = new Date(post.datePublished).toUTCString();
        const link = `https://stucarbon.com/blog/${post.slug}`;

        // Escape XML special characters
        const title = post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const desc = post.metaDescription.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        rss += `    <item>
        <title>${title}</title>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <pubDate>${pubDate}</pubDate>
        <description>${desc}</description>
        <category>${post.category}</category>
        ${post.featuredImage ? `<media:content url="https://stucarbon.com${post.featuredImage}" medium="image" />` : ''}
    </item>
`;
    });

    rss += `</channel>
</rss>`;

    fs.writeFileSync(rssPath, rss);
    console.log(`✅ RSS Feed generated at ${rssPath}`);
}

generateRSS();
