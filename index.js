const puppeteer = require('puppeteer')

async function goToTTM() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.thaiticketmajor.com/concert/blackpink-2019-world-tour-in-your-area-bangkok-encore.html')

    await page.$$('a.btn').then(x => { 
        console.log(x.length)
        for (let i = 0; i == x.length; i++) {
            
        }
    
    
    }).catch( err => console.log(err))
    
    //await page.click('a.btn', clickCount="1");
}

goToTTM()