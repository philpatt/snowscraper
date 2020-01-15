const cheerio = require('cheerio');
const axios = require('axios');
const Scraper = require('./scripts/Scraper');
const Parser = require('./scripts/Parser');
// NWAC URL
const cascadeEastSouthURL = 'https://www.nwac.us/avalanche-forecast/current/cascade-east-south/';

const scraper = new Scraper();

scraper.scrape(cascadeEastSouthURL)
    .then(htmlResponse =>
        // parse html string to json
        Parser.parseHtmlString(htmlResponse)
    )
    .then(function (jsonResponse) {
        // json to file
    })
    .then(function (fileResponse) {
        // if file creation is successfule
        // send file to email (?)
    })
    .catch(function (err) {
        console.log('Scraper Error: ', err);
    })


