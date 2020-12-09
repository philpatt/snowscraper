const axios = require('axios');
const Scraper = require('./scripts/Scraper');
const Parser = require('./scripts/Parser');
const Mailer = require('./scripts/Mailer');

// NWAC URL
const cascadeEastSouthURL = 'https://nwac.us/avalanche-forecast/#/west-slopes-central';

const scraper = new Scraper();
const parser = new Parser();
// const mailer = new Mailer();

scraper.scrape(cascadeEastSouthURL)
    .then( function (html) {
        // parse html string to json
        // need to figure out how puppeteer scrapes
        // parser.parseHtmlString(html)
    })
    .then(function (jsonResponse) {
        // json to file
        // mailer.send()
    })
    .then(function (fileResponse) {
        // if file creation is successfule
        // send file to email (?)
    })
    .catch(function (err) {
        console.log('Scraper Error: ', err);
    })



