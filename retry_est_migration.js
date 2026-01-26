import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPostsPath = path.join(__dirname, 'src', 'data', 'blogPosts.js');

function migrate() {
    console.log('🔄 Adding EST timezone to blog dates...');
    let content = fs.readFileSync(blogPostsPath, 'utf8');

    // More robust regex: look for date: '... AM/PM'
    // Matches: date: 'January 25, 2026 • 6:00 PM'
    const dateRegex = /date:\s*'([^']+\s(AM|PM))'/g;

    let match;
    let count = 0;

    // We use a replacement function to avoid escaping issues
    const newContent = content.replace(dateRegex, (match, p1) => {
        if (!p1.includes('EST')) {
            count++;
            return `date: '${p1} EST'`;
        }
        return match;
    });

    console.log(`💡 Updated ${count} dates.`);

    // Also update one dateModified for testing
    const finalContent = newContent.replace(
        /(slug: 'worst-winter-storms-us-history-vs-2026'[\s\S]*?dateModified: ')[^']+'/,
        `$12026-01-26T10:00:00+05:30'`
    );

    fs.writeFileSync(blogPostsPath, finalContent);
    console.log('✅ EST Timezone migration and test data update complete!');
}

migrate();
