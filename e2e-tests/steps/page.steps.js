const { defineStep } = require('cucumber')
const Page = require('../pages/page.js')

defineStep('I launch the car tax valuation page', function () {
    browser.deleteCookies()
    Page.openCarTaxUrl()
})

defineStep('I launch the we buy any car page', function () {
    browser.deleteCookies()
    Page.openWeBuyAnyCarUrl()
});