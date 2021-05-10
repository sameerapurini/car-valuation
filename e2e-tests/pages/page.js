class Page {
    openCarTaxUrl() {
        browser.url("https://cartaxcheck.co.uk/");
    }

    openWeBuyAnyCarUrl() {
        browser.url("https://www.webuyanycar.com/")
    }
}

module.exports = new Page()