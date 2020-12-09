const puppeteer = require('puppeteer');

class Scraper {

    // returns a response
    async scrape(url) {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        // add all necessary selectors
        // perhaps via json so its this file doesnt need to change
        await page.waitForSelector('.afp-bottomLine-text')


        // todo should parse be added here??
        // need to figure out more methods with puppeteer.Page class
        await page.screenshot({path: 'example.png'});
        await browser.close();
        console.log(page);
    }

    handleError(err) {
        console.log('error', err);
    }
}

module.exports = Scraper;
