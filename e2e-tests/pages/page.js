class Page {
    openCarTaxUrl() {
        browser.url("https://cartaxcheck.co.uk/");
    }

    openWeBuyAnyCarUrl() {
        browser.url("https://www.webuyanycar.com/")
    }

    await() {
        browser.pause(3000)
    }
}

module.exports = new Page()