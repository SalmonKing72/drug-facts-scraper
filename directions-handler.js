const puppeteer = require('puppeteer');
const $ = require('cheerio');

module.exports = function (drugSetId) {
    let url = `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${drugSetId}&audience=consumer`;

    puppeteer
        .launch()
        .then(function(browser) {
            return browser.newPage();
        })
        .then(function(page) {
            return page.goto(url).then(async function() {
                const [directionsButton] = await page.$x("//a[contains(., 'Directions')]");
                if (directionsButton) {
                    await directionsButton.click();          
                }
                return page.content();
            });
        })
        .then(function(html) {
            return $('#anch_127', html).each(function() {
                $content = $(this).parent().find('.Section');
                console.log($content.html());
                return;
            });
        })
        .catch(function(err) {
            console.error(err);
        });
}
