
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Map of generated filenames to target blog directory names
const images = [
    { src: 'blizzard_1888_nyc', dest: 'storm-1888-nyc' },
    { src: 'storm_of_century_1993_map', dest: 'storm-1993-map' },
    { src: 'knickerbocker_1922_collapse', dest: 'storm-1922-knickerbocker' },
    { src: 'great_lakes_1913_ship', dest: 'storm-1913-ship' },
    { src: 'snowmageddon_2010_dc', dest: 'storm-2010-snowmageddon' },
    { src: 'armistice_blizzard_1940_boat', dest: 'storm-1940-armistice' },
    { src: 'ice_crisis_2026_futuristic', dest: 'storm-2026-ice-crisis' }
];

const sourceDir = 'C:\\Users\\Golu\\.gemini\\antigravity\\brain\\66cc19f5-8281-450e-a504-baaa0818d71e';
const destDir = path.join(process.cwd(), 'public', 'blog');

async function processImages() {
    console.log('🚀 Starting batch optimization...');

    for (const img of images) {
        // Find the full source filename (handling the timestamp suffix)
        const sourceFiles = fs.readdirSync(sourceDir).filter(f => f.startsWith(img.src) && f.endsWith('.png'));

        if (sourceFiles.length === 0) {
            console.error(`❌ Could not find source for: ${img.src}`);
            continue;
        }

        // Use the most recent one if duplicates exist
        const sourceFile = sourceFiles[sourceFiles.length - 1];
        const inputPath = path.join(sourceDir, sourceFile);
        const outputPath = path.join(destDir, `${img.dest}.webp`);

        try {
            await sharp(inputPath)
                .resize(1200, 800, { fit: 'inside' }) // Good size for blog content
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`✅ Processed: ${img.dest}.webp`);
        } catch (err) {
            console.error(`❌ Error processing ${img.dest}:`, err);
        }
    }
}

processImages();
