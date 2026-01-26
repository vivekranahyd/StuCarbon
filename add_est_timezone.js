import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPostsPath = path.join(__dirname, 'src', 'data', 'blogPosts.js');

function migrate() {
    console.log('🔄 Adding EST timezone to blog dates...');
    let content = fs.readFileSync(blogPostsPath, 'utf8');

    // Regex to match date field with a bullet and time but no EST
    // Example: date: 'January 25, 2026 • 6:00 PM'
    const dateRegex = /date:\s*'([^']+(AM|PM))'/g;

    let match;
    const replacements = [];

    while ((match = dateRegex.exec(content)) !== null) {
        const fullLine = match[0];
        const dateVal = match[1];

        if (!dateVal.includes('EST')) {
            const newDateVal = `${dateVal} EST`;
            const newLine = `date: '${newDateVal}'`;
            replacements.push({ old: fullLine, new: newLine });
        }
    }

    console.log(`💡 Found ${replacements.length} dates to update.`);

    replacements.forEach(r => {
        content = content.replace(r.old, r.new);
    });

    fs.writeFileSync(blogPostsPath, content);
    console.log('✅ EST Timezone migration complete!');
}

migrate();
