const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

/**
 * Google Indexing API Submission Script
 * This script submits the latest blog posts from blogPosts.js to Google for indexing.
 * Requires service-account.json in the root directory.
 */

const KEY_FILE = path.join(__dirname, 'service-account.json');
const BLOG_POSTS_PATH = path.join(__dirname, 'src', 'data', 'blogPosts.js');

async function indexLatestPosts() {
    console.log('🔍 Starting Google Indexing submission...');

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ Error: service-account.json not found.');
        console.error('Please follow the instructions in implementation_plan_indexing.md to set up your Google Service Account.');
        process.exit(1);
    }

    let blogContent;
    try {
        blogContent = fs.readFileSync(BLOG_POSTS_PATH, 'utf8');
    } catch (e) {
        console.error('❌ Error: Failed to read blogPosts.js');
        process.exit(1);
    }

    // Extract the most recent slugs (top of the array)
    const postMatches = [...blogContent.matchAll(/slug:\s*'([^']+)'/g)];
    if (postMatches.length === 0) {
        console.log('⚠️ No blog posts found to index.');
        return;
    }

    // Submit the top 3 most recent posts (or fewer if less exist)
    const latestSlugs = postMatches.slice(0, 3).map(m => m[1]);
    const urls = latestSlugs.map(slug => `https://stucarbon.com/blog/${slug}`);

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    try {
        const authClient = await auth.getClient();
        console.log('✅ Authorized successfully with Google.');

        for (const url of urls) {
            console.log(`🚀 Submitting URL: ${url}`);

            const res = await google.indexing('v3').urlNotifications.publish({
                auth: authClient,
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED'
                }
            });

            console.log(`✅ Success for ${url}:`, res.data.urlNotificationMetadata?.latestUpdate?.type || 'Submitted');
        }

        console.log('🎉 Indexing submission complete!');
    } catch (error) {
        console.error('❌ Error during indexing submission:');
        console.error(error.message);
        if (error.message.includes('403')) {
            console.error('👉 TIP: Ensure the Service Account email has "Owner" permissions in Google Search Console.');
        }
        process.exit(1);
    }
}

indexLatestPosts();
