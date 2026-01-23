import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './src/data/blogPosts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

// Only run if dist exists (i.e. after build)
if (!fs.existsSync(distDir) || !fs.existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
}

console.log(`🚀 Starting Post-Build Prerender for ${blogPosts.length} posts...`);

const template = fs.readFileSync(templatePath, 'utf-8');

blogPosts.forEach(post => {
    // 1. Create directory structure in dist/blog/slug
    const postDir = path.join(distDir, 'blog', post.slug);
    if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
    }

    // 2. Generate SEO Meta Tags
    // We replace the default title and add Open Graph / Twitter tags
    const metaTags = `
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
    // Replace <title>...</title> with new title
    // Inject other meta tags before </head>
    let html = template.replace(/<title>.*<\/title>/, ''); // Remove original title
    html = html.replace('</head>', `${metaTags}\n</head>`);

    // 4. Write index.html
    const outputPath = path.join(postDir, 'index.html');
    fs.writeFileSync(outputPath, html);
});

console.log(`✅ generated static files for ${blogPosts.length} posts in dist/`);
