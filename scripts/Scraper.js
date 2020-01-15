const rp = require('request-promise');

class Scraper {

    async scrape(url) {
        let promise = rp(url);
        let result = await promise;
        console.log(typeof promise);
        console.log('scrape');
        return result;
    }

    handleError(err) {
        console.log('error', err);
    }
}

module.exports = Scraper;
