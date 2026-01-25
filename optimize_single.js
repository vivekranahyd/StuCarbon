
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'blog', 'winter-storm-history.webp');
const tempPath = path.join(process.cwd(), 'public', 'blog', 'winter-storm-history-temp.webp');

async function optimize() {
    console.log(`Optimizing ${filePath}...`);
    try {
        await sharp(filePath)
            .resize(1200, 675, { fit: 'cover' }) // 16:9 for Discover
            .webp({ quality: 80, effort: 6 }) // High compression effort
            .toFile(tempPath);

        // Replace original
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);

        console.log('✅ Optimization complete.');
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

optimize();
