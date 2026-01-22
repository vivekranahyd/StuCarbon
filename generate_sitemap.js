const fs = require('fs');
const path = require('path');

/**
 * Super simple sitemap generator to prevent manual XML errors.
 * It reads the blogPosts.js file as text to avoid ESM import issues in plain Node.
 */

const blogPostsPath = path.join(__dirname, 'src', 'data', 'blogPosts.js');
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

const staticRoutes = [
    { loc: 'https://stucarbon.com/', lastmod: '2026-01-14', freq: 'weekly', priority: '1.0' },
    { loc: 'https://stucarbon.com/carbon-footprint-calculator-for-kids', lastmod: new Date().toISOString().split('T')[0], freq: 'weekly', priority: '1.0' },
    { loc: 'https://stucarbon.com/about', lastmod: '2026-01-14', freq: 'monthly', priority: '0.8' },
    { loc: 'https://stucarbon.com/blog', lastmod: new Date().toISOString().split('T')[0], freq: 'weekly', priority: '0.9' },
    { loc: 'https://stucarbon.com/contact', lastmod: '2026-01-14', freq: 'monthly', priority: '0.6' },
    { loc: 'https://stucarbon.com/privacy-policy', lastmod: '2026-01-14', freq: 'yearly', priority: '0.3' },
    { loc: 'https://stucarbon.com/terms-of-service', lastmod: '2026-01-14', freq: 'yearly', priority: '0.3' },
];

function generateSitemap() {
    console.log('🚀 Generating sitemap.xml...');

    let blogContent;
    try {
        blogContent = fs.readFileSync(blogPostsPath, 'utf8');
    } catch (e) {
        console.error('Failed to read blogPosts.js');
        return;
    }

    // Extract slugs and dates using regex (more robust for this use case than attempting to eval ES modules)
    const postMatches = [...blogContent.matchAll(/slug:\s*'([^']+)',[\s\S]*?datePublished:\s*'(\d{4}-\d{2}-\d{2})/g)];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    staticRoutes.forEach(route => {
        xml += `  <url>\n    <loc>${route.loc}</loc>\n    <lastmod>${route.lastmod}</lastmod>\n    <changefreq>${route.freq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
    });

    // Add blog posts
    postMatches.forEach(match => {
        const slug = match[1];
        const date = match[2];
        xml += `  <url>\n    <loc>https://stucarbon.com/blog/${slug}</loc>\n    <lastmod>${date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;

    fs.writeFileSync(sitemapPath, xml);
    console.log(`✅ sitemap.xml generated successfully with ${postMatches.length} blog posts.`);
}

generateSitemap();
