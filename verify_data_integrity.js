
import { blogPosts } from './src/data/blogPosts.js';

console.log(`Successfully imported blogPosts.js`);
console.log(`Total posts found: ${blogPosts.length}`);
console.log(`First post title: ${blogPosts[0].title}`);
console.log(`Last post title: ${blogPosts[blogPosts.length - 1].title}`);

const newPosts = blogPosts.filter(p => p.id >= 16);
const missingImages = newPosts.filter(p => !p.featuredImage);

if (missingImages.length > 0) {
    console.error('FAIL: The following NEW posts are missing images:');
    missingImages.forEach(p => console.log(`- ID ${p.id}: ${p.title}`));
} else {
    console.log(`SUCCESS: All ${newPosts.length} new posts (IDs 16+) have images.`);
}
