
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BLOG_IMAGES_DIR = path.join(__dirname, '../public/blog');
const MIN_WIDTH = 1200;

console.log(`🔎 Auditing images in ${BLOG_IMAGES_DIR} for Google Discover compliance (Min Width: ${MIN_WIDTH}px)...`);

try {
    const files = fs.readdirSync(BLOG_IMAGES_DIR).filter(file => /\.(webp|jpg|png|jpeg)$/i.test(file));
    let passed = 0;
    let failed = 0;

    files.forEach(file => {
        const filePath = path.join(BLOG_IMAGES_DIR, file);
        try {
            // Use ffprobe to get width
            const cmd = `ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=s=x:p=0 "${filePath}"`;
            const width = parseInt(execSync(cmd, { encoding: 'utf-8' }).trim());

            if (width < MIN_WIDTH) {
                console.error(`❌ [FAILED] ${file}: ${width}px (Too small)`);
                failed++;
            } else {
                console.log(`✅ [PASS] ${file}: ${width}px`);
                passed++;
            }
        } catch (e) {
            console.warn(`⚠️ [ERROR] Could not probe ${file}`);
        }
    });

    console.log('\n--- Summary ---');
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    if (failed > 0) {
        console.log('⚠️ Some images do not meet Google Discover requirements. Please upscale or replace them.');
        process.exit(1);
    } else {
        console.log('🎉 All images are compliant!');
    }

} catch (e) {
    console.error('Error reading directory:', e);
}
