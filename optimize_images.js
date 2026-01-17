
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'public', 'blog');
const files = fs.readdirSync(blogDir);

async function convert() {
    console.log(`Found ${files.length} files in ${blogDir}`);

    for (const file of files) {
        if (file.endsWith('.png')) {
            const inputPath = path.join(blogDir, file);
            const outputPath = path.join(blogDir, file.replace('.png', '.webp'));

            try {
                await sharp(inputPath)
                    .resize(1200, 630, { fit: 'inside' }) // SEO optimal size
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`✅ Converted: ${file} -> ${path.basename(outputPath)}`);
            } catch (err) {
                console.error(`❌ Failed to convert ${file}:`, err.message);
            }
        }
    }
}

convert();
