// download-images.js - Download free food images from Unsplash
// Run with: node download-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Dish names and their Unsplash search queries
const dishes = [
    { name: 'samosa', query: 'samosa indian snack' },
    { name: 'omelette', query: 'omelette breakfast eggs' },
    { name: 'boiled-eggs', query: 'boiled eggs breakfast' },
    { name: 'smokie', query: 'sausage hot dog' },
    { name: 'fried-eggs', query: 'fried eggs breakfast' },
    { name: 'black-tea', query: 'black tea cup' },
    { name: 'kenyan-tea', query: 'chai tea kenyan' },
    { name: 'mango-juice', query: 'mango juice glass' },
    { name: 'pineapple-juice', query: 'pineapple juice' },
    { name: 'orange-juice', query: 'orange juice fresh' },
    { name: 'banana-juice', query: 'banana smoothie' },
    { name: 'cake', query: 'slice cake dessert' },
    { name: 'chapati', query: 'chapati flatbread kenyan' },
    { name: 'mahamri', query: 'mahamri mandazi kenyan' },
    { name: 'sausage', query: 'sausage breakfast' },
    { name: 'uji', query: 'porridge kenyan uji' },
    { name: 'coffee', query: 'coffee cup' },
    { name: 'fruit-salad', query: 'fruit salad bowl' },
    { name: 'arrowroots', query: 'arrowroots nduma' },
    { name: 'sweet-potatoes', query: 'sweet potatoes roasted' },
    { name: 'cassava', query: 'cassava root' },
    { name: 'githeri', query: 'githeri kenyan beans maize' },
    { name: 'mukimo', query: 'mukimo kenyan food' },
    { name: 'matoke', query: 'matoke green bananas' },
    { name: 'millet-porridge', query: 'millet porridge' },
    { name: 'oatmeal', query: 'oatmeal breakfast bowl' },
    { name: 'pancakes', query: 'pancakes breakfast' },
    { name: 'french-toast', query: 'french toast breakfast' },
    { name: 'baked-beans', query: 'baked beans toast' },
    { name: 'sausage-egg', query: 'sausage eggs breakfast' },
    { name: 'full-kenyan', query: 'kenyan breakfast' },
    { name: 'masala-chai', query: 'masala chai tea' },
    { name: 'yogurt-parfait', query: 'yogurt parfait granola' },
    { name: 'smoothie-bowl', query: 'smoothie bowl' },
    { name: 'avocado-toast', query: 'avocado toast' },
    { name: 'plantain', query: 'plantain fried' },
    { name: 'doughnuts', query: 'doughnuts' },
    { name: 'bread-butter', query: 'bread butter' },
    { name: 'chapati-beans', query: 'chapati beans kenyan' },
    { name: 'chapati-ndengu', query: 'chapati ndengu kenyan' },
    { name: 'chapati-njahi', query: 'chapati njahi kenyan' },
    { name: 'chapati-beef', query: 'chapati beef stew' },
    { name: 'rice-beef', query: 'rice beef stew kenyan' },
    { name: 'chips-chicken', query: 'chips fried chicken' },
    { name: 'chips-lamb', query: 'chips lamb chops' },
    { name: 'rice-beans', query: 'rice beans kenyan' },
    { name: 'pilau', query: 'pilau rice kenyan' },
    { name: 'shawarma', query: 'shawarma wrap' },
    { name: 'rice-chicken', query: 'rice chicken kenyan' },
    { name: 'ugali-beef-spinach', query: 'ugali beef spinach' },
    { name: 'nyama-choma', query: 'nyama choma kenyan' },
    { name: 'vegetable-rice', query: 'vegetable rice' },
    { name: 'soda', query: 'soda can drink' },
    { name: 'pasta-chicken', query: 'pasta chicken' },
    { name: 'pasta-beef', query: 'pasta beef' },
    { name: 'fish-chips', query: 'fish chips' },
    { name: 'grilled-chicken', query: 'grilled chicken' },
    { name: 'mutton-stew', query: 'mutton stew' },
    { name: 'veg-curry', query: 'vegetable curry rice' }
];

// Download image from Unsplash
function downloadImage(query, filename) {
    return new Promise((resolve, reject) => {
        const url = `https://source.unsplash.com/400x300/?${encodeURIComponent(query)}`;
        const filepath = path.join(imagesDir, `${filename}.jpg`);
        
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ Downloaded: ${filename}.jpg`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            console.log(`❌ Failed: ${filename}.jpg`);
            reject(err);
        });
    });
}

// Download all images
async function downloadAllImages() {
    console.log('📥 Starting image download...');
    console.log(`📁 Saving to: ${imagesDir}`);
    
    for (const dish of dishes) {
        try {
            await downloadImage(dish.query, dish.name);
        } catch (error) {
            console.log(`⚠️ Skipping ${dish.name}`);
        }
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('🎉 All images downloaded!');
}

downloadAllImages();