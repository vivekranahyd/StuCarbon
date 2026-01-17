
import fs from 'fs';

const files = ['./lighthouse-final-home.json', './lighthouse-final-blog.json'];

files.forEach(file => {
    try {
        if (!fs.existsSync(file)) {
            console.log(`\n❌ File not found: ${file}`);
            return;
        }

        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        console.log(`\n========================================`);
        console.log(`📊 Report for: ${data.finalUrl}`);
        console.log(`========================================`);

        // Print Categories Scores
        Object.keys(data.categories).forEach(key => {
            const cat = data.categories[key];
            const score = cat.score * 100;
            const emoji = score >= 90 ? '🟢' : score >= 50 ? '🟠' : '🔴';
            console.log(`${emoji} ${cat.title}: ${score.toFixed(0)}`);
        });

        // Print Top Opportunities (Performance)
        console.log(`\n⚠️  Top Performance Opportunities:`);
        const audits = data.audits;
        const opportunities = Object.values(audits)
            .filter(audit => audit.details && audit.details.type === 'opportunity' && audit.score < 0.9)
            .sort((a, b) => (b.details.overallSavingsMs || 0) - (a.details.overallSavingsMs || 0))
            .slice(0, 5);

        if (opportunities.length === 0) console.log("   ✅ No major opportunities found!");

        opportunities.forEach(op => {
            console.log(`   - ${op.title} (${(op.details.overallSavingsMs || 0).toFixed(0)}ms savings)`);
        });

        // Check for specific common issues
        const diag = Object.values(audits).filter(a => a.score !== 1 && a.score !== null && !a.details?.type?.includes('opportunity'));
        console.log(`\n🛠️  Other Failed Audits (Top 3):`);
        diag.slice(0, 3).forEach(d => console.log(`   - ${d.title}`));

    } catch (err) {
        console.error(`Error parsing ${file}:`, err.message);
    }
});
