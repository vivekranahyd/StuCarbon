
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(__dirname, 'index.html');
const distDir = path.join(__dirname, 'public/blog');

// Read the index.html template
const template = fs.readFileSync(templatePath, 'utf-8');

// Ensure output directory exists (though we will create subdirs)
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

console.log(`🚀 Starting Prerender for ${blogPosts.length} posts...`);

blogPosts.forEach(post => {
    // 1. Create directory for the slug
    const postDir = path.join(distDir, post.slug);
    if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
    }

    // 2. Generate SEO Meta Tags
    const metaTags = `
    <!-- Statically Injected SEO Tags -->
    <title>${post.metaTitle}</title>
    <meta name="description" content="${post.metaDescription}">
    <meta name="keywords" content="${post.keywords.join(', ')}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${post.metaTitle}">
    <meta property="og:description" content="${post.metaDescription}">
    <meta property="og:url" content="https://stucarbon.com/blog/${post.slug}">
    <meta property="og:image" content="https://stucarbon.com${post.featuredImage}">
    <meta property="og:type" content="article">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.metaTitle}">
    <meta name="twitter:description" content="${post.metaDescription}">
    <meta name="twitter:image" content="https://stucarbon.com${post.featuredImage}">
    `;

    // 3. Inject into template
    // We inject before </head>
    const html = template.replace('</head>', `${metaTags}\n</head>`);

    // 4. Write index.html
    const outputPath = path.join(postDir, 'index.html');
    fs.writeFileSync(outputPath, html);

    console.log(`✅ Prerendered: /blog/${post.slug}`);
});

console.log(`\n🎉 Success! All posts have valid static HTML for Twitter/Google.`);
