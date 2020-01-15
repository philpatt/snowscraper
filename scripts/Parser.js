const $ = require('cheerio');
class Parser {

    parseHtmlString(htmlStr) {
        const selector = '.ForecastProduct_bottomLineText > p'
        const domElement = $(selector, htmlStr);
        return domElement;
    }
}

module.exports = Parser;
