const axios = require('axios');
const Scraper = require('./scripts/Scraper');
const Parser = require('./scripts/Parser');
// NWAC URL
const cascadeEastSouthURL = 'https://www.nwac.us/avalanche-forecast/current/cascade-east-south/';

const scraper = new Scraper();
const parser = new Parser();

scraper.scrape(cascadeEastSouthURL)
    .then(html =>

    // parse html string to json
        console.log(parser.parseHtmlString(html))
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


