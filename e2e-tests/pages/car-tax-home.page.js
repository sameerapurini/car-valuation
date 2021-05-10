class CarTaxHomePage {

    get enterReg() { return $('//input[@id="vrm-input"]') }
    get freeCarCheck() { return $('//button[text()="Free Car Check"]') }
    get getValuation() { return $('//a[text()="Get Valuation"]') }

    regNumberEntry(value) {
        this.enterReg.click()
        this.enterReg.setValue(value);
    }

    freeCarCheckBtn() {
        this.freeCarCheck.click();
    }

}
module.exports = new CarTaxHomePage();