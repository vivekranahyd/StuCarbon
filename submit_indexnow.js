import { blogPosts } from './src/data/blogPosts.js';

async function submitToIndexNow() {
    console.log('🚀 Submitting to IndexNow...');

    const host = 'stucarbon.com';
    const key = '4a2f8c9e1d3b4a5f6e7d8c9b0a1'; // Placeholder key - User must generate real one
    const keyLocation = `https://${host}/${key}.txt`;

    // Collect all blog URLs
    const urlList = blogPosts.map(post => `https://${host}/blog/${post.slug}`);

    // Add main pages
    urlList.unshift(`https://${host}/blog`);
    urlList.unshift(`https://${host}/`);

    const data = {
        host: host,
        key: key,
        keyLocation: keyLocation,
        urlList: urlList
    };

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('✅ Successfully submitted URLs to IndexNow.');
        } else {
            console.error('❌ Failed to submit to IndexNow:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('❌ Error submitting to IndexNow:', error);
    }
}

submitToIndexNow();
