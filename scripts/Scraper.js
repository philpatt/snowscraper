const rp = require('request-promise');
const cheerio = require('cheerio');

class Scraper {

    scrape(url) {
        return rp(url)
    }

    handleError(err) {
        console.log('error', err);
    }
}

module.exports = Scraper;
