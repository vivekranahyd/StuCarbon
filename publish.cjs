const { execSync } = require('child_process');

/**
 * Unified Publish Script for StuCarbon
 * 1. Generates and validates sitemap
 * 2. Staging, Committing, and Pushing to GitHub
 * 3. Submitting to Google Indexing API (only if push succeeds)
 */

function runCommand(command) {
    console.log(`\n🏃 Running: ${command}`);
    try {
        const output = execSync(command, { encoding: 'utf8', stdio: 'inherit' });
        return true;
    } catch (error) {
        console.error(`\n❌ Error executing command: ${command}`);
        return false;
    }
}

async function publish() {
    console.log('🚀 Starting Universal Publish Flow...');

    // 1. Sitemap Generation & Validation
    console.log('\n--- Step 1: Sitemap ---');
    if (!runCommand('node generate_sitemap.cjs')) return;
    if (!runCommand('node validate_sitemap.cjs')) return;

    // 2. Git Workflow
    console.log('\n--- Step 2: GitHub Push ---');
    runCommand('git add .');

    // Check if there are changes to commit
    try {
        execSync('git diff --cached --quiet');
        console.log('💡 No changes to commit.');
    } catch (e) {
        // execSync throws if there ARE changes
        if (!runCommand('git commit -m "publish: automated sitemap update and blog indexing"')) {
            console.log('⚠️ Commit failed or nothing to commit.');
        }
    }

    if (!runCommand('git push')) {
        console.error('\n🛑 Git push failed. Stopping flow to prevent indexing desync.');
        process.exit(1);
    }

    // 3. Google Indexing
    console.log('\n--- Step 3: Google Indexing ---');
    if (!runCommand('node index_urls.cjs')) {
        console.warn('⚠️ Indexing notification failed, but code is already live.');
    }

    console.log('\n✨ ALL DONE! Your site is live and Google has been notified.');
}

publish();
