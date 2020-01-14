const rp = require('request-promise');
const cheerio = require('cheerio');
const axios = require('axios');

const cascadeEastSouthURL = 'https://www.nwac.us/avalanche-forecast/current/cascade-east-south/';
class Scraper {

    scrape(url) {
        rp(url)
            .then(function (res) {
                return res;
            })
            .catch(this.handleError)
    }

    handleError(err) {
        console.log('error', err);
    }
}




const scraper = new Scraper();
let data;
try {
    data = scraper.scrape(cascadeEastSouthURL)
    console.log('data', data);

} catch(error) {
    console.log('error')
}


