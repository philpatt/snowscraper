const $ = require('cheerio');
class Parser {

    parseHtmlString(htmlStr) {
        // console.log(htmlStr)
        const selector = '.afp-bottomLine-text > .afp-html-p > span'

        // parser is broken with puppetteer
        // const element = $(selector, htmlStr.body).text();
        return element;
    }
}

module.exports = Parser;
