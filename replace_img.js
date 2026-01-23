
const fs = require('fs');
const path = require('path');
const target = 'c:/Users/Golu/Desktop/StuCarbon/public/blog/green-cities-2026.webp';
const source = 'c:/Users/Golu/Desktop/StuCarbon/public/blog/green-cities-2026-large.webp';

try {
    if (fs.existsSync(target)) {
        fs.unlinkSync(target);
        console.log('Deleted target');
    }
    fs.renameSync(source, target);
    console.log('Renamed source to target');
} catch (err) {
    console.error('Error:', err);
}
