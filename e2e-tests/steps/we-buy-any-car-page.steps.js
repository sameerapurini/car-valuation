const { defineStep } = require('cucumber')
const weBuyAnyCarPage = require('../pages/we-buy-any-car.page.js')
const page = require('../pages/page.js')
const inputData = require("../data/car-input.json");
const outputData = require("../data/car-output.json");
let assert = require('assert');


defineStep('I land on the we buy car page to input the values from the text file for {string}', function (carreg) {
    weBuyAnyCarPage.enterReg.setValue(carreg)
    const goBtn = weBuyAnyCarPage.goBtn
    let isExisting = goBtn.isExisting()
    const mileage = weBuyAnyCarPage.mileage
    let isVisible = mileage.isExisting()

    if (isExisting) {
        goBtn.click()
        weBuyAnyCarPage.carDetails(inputData[carreg].mileage)
        weBuyAnyCarPage.yourDetails()
        weBuyAnyCarPage.yourValuation()
    }
    else if (isVisible) {
        page.await()
        mileage.setValue(inputData[carreg].mileage);
        weBuyAnyCarPage.valueMyCar.click();
        weBuyAnyCarPage.yourDetails()
        weBuyAnyCarPage.yourValuation()
    }
})

defineStep('I get a free valuation', function () {
    weBuyAnyCarPage.yourDetails()
})

defineStep('I perform the validation by comparing with the output file for {string}', function (carreg) {
    assert.equal(weBuyAnyCarPage.model.getText(), outputData[carreg].model)
    assert.equal(weBuyAnyCarPage.color.getText(), outputData[carreg].color)
    assert.equal(weBuyAnyCarPage.make.getText(), outputData[carreg].make)
    assert.equal(weBuyAnyCarPage.year.getText(), outputData[carreg].year)
})

defineStep('I navigate back to car valuation page to continue checks on another car', function () {
    browser.switchWindow('cartaxcheck.co.uk/')
    browser.deleteCookies()
})