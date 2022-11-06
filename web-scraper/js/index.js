const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://neetcode.io/practice');
    const html = await page.content();
    await fs.writeFile("index.html", html);
    await browser.close();
})();