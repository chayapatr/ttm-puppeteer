const puppeteer = require('puppeteer')

async function goToTTM() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.thaiticketmajor.com/concert/blackpink-2019-world-tour-in-your-area-bangkok-encore.html')
}

goToTTM()