const { defineStep } = require('cucumber')
const carTaxHomePage = require('../pages/car-tax-home.page.js')
const weBuyAnyCarPage = require('../pages/we-buy-any-car.page.js')

const inputData = require("../data/car-input.json");
let assert = require('assert');

defineStep('I enter the car registration number {string}', function (carreg) {
    carTaxHomePage.regNumberEntry(carreg)
});

defineStep('I perform a free car check', function () {
    carTaxHomePage.freeCarCheckBtn()
})

defineStep('I check valuation', function () {
    carTaxHomePage.getValuation.click();
    browser.switchWindow('webuyanycar.com')
    browser.deleteCookies()
    const diffCar = weBuyAnyCarPage.valDiffCar
    let isExisting = diffCar.isExisting()
    while (isExisting) {
        diffCar.click();
        isExisting = diffCar.isExisting()
    }

})

defineStep('I enter details of {string}', function (carreg) {
    browser.pause(3000)
    weBuyAnyCarPage.enterReg.setValue(carreg);
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
        mileage.setValue(inputData[carreg].mileage);
        weBuyAnyCarPage.valueMyCar.click();
        weBuyAnyCarPage.yourDetails()
        weBuyAnyCarPage.yourValuation()
    }
})


