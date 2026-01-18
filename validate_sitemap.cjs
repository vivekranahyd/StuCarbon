const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

try {
    const xmlData = fs.readFileSync(sitemapPath, 'utf8');
    const parser = new XMLParser({
        stopNodes: ["*.lastmod"],
        parseTagValue: false
    });

    // This will throw if the XML is invalid
    parser.parse(xmlData, true);
    console.log('✅ sitemap.xml is valid XML.');
    process.exit(0);
} catch (error) {
    console.error('❌ Sitemap Validation Error:');
    console.error(error.message);
    process.exit(1);
}
