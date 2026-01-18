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

    let credentials;
    // Check for environment variable first (safer for production/CI)
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
        console.log('📄 Using credentials from environment variable.');
        try {
            credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
        } catch (e) {
            console.error('❌ Error: Failed to parse GOOGLE_APPLICATION_CREDENTIALS_JSON env var.');
            process.exit(1);
        }
    } else if (fs.existsSync(KEY_FILE)) {
        console.log('📂 Using credentials from service-account.json file.');
        credentials = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
    } else {
        console.error('❌ Error: service-account.json not found and no environment variable set.');
        console.error('Please follow the instructions in implementation_plan_indexing.md.');
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

    // Submit the top 3 most recent posts (standard limit)
    const latestSlugs = postMatches.slice(0, 3).map(m => m[1]);
    const urls = latestSlugs.map(slug => `https://stucarbon.com/blog/${slug}`);

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
        credentials, // Pass the parsed credentials object directly
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    try {
        const authClient = await auth.getClient();
        console.log('✅ Authorized successfully with Google.');

        for (const url of urls) {
            console.log(`🚀 Checking/Submitting URL: ${url}`);

            // 1. Publish notification
            const pubRes = await google.indexing('v3').urlNotifications.publish({
                auth: authClient,
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED'
                }
            });
            console.log(`   ✅ Submission: ${pubRes.data.urlNotificationMetadata?.latestUpdate?.type || 'OK'}`);

            // 2. Get metadata to see what Google recorded
            try {
                const metaRes = await google.indexing('v3').urlNotifications.getMetadata({
                    auth: authClient,
                    url: url
                });

                const latest = metaRes.data.latestUpdate;
                if (latest) {
                    console.log(`   🔍 Google Record: Type: ${latest.type}, Time: ${latest.notifyTime}`);
                } else {
                    console.log(`   🔍 Google Record: No previous record found.`);
                }
            } catch (metaError) {
                if (metaError.message.includes('404')) {
                    console.log(`   🔍 Google Record: URL not yet in Indexing API registry (this is normal for brand new URLs).`);
                } else {
                    console.log(`   🔍 Google Record: Error fetching metadata: ${metaError.message}`);
                }
            }
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
