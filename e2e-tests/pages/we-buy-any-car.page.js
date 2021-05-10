class WeBuyAnyCarPage {

    get enterReg() { return $('//input[@id="vehicleReg"]') }
    get goBtn() { return $('//form[@id="vehicleReg-form"]//div//button') }
    get mileage() { return $('[id="Mileage"]') }
    get valueMyCar() { return $('//span[text()="Value my car "]') }
    get yourName() { return $('#CustomerName') }
    get emailAddress() { return $('//input[@id="EmailAddress"]') }
    get postCode() { return $('//input[@id="Postcode"]') }
    get telNum() { return $('//input[@id="TelephoneNumber"]') }
    get myValuation() { return $('//span[text()=" Get my valuation "]') }
    get yourValHeader() { return $('//h1[text()=" Your valuation "]') }
    get valDiffCar() { return $('#e2e-valueDifferentCar') }
    get amount() { return $('//*[@id="wbac-app-container"]/div/div/valuation/section[2]/div/div[1]/div[1]/div[2]/div/div[1]/div/div') }
    get card() { return $('//div//span[text()="0"]') }
    get btn() { return $('//div//span[text()="Full"]') }
    get contBtn() { return $('//button[@id="advance-btn"]') }
    get make() { return $('//*[@id="wbac-app-container"]/div/div/valuation/section[2]/div/div[1]/div[1]/div[4]/vehicle-details/div[3]/div[2]/div[1]/div[2]') }
    get model() { return $('//*[@id="wbac-app-container"]/div/div/valuation/section[2]/div/div[1]/div[1]/div[4]/vehicle-details/div[3]/div[2]/div[2]/div[2]') }

    get color() { return $('//*[@id="wbac-app-container"]/div/div/valuation/section[2]/div/div[1]/div[1]/div[4]/vehicle-details/div[3]/div[2]/div[4]/div[2]') }

    get year() { return $('//*[@id="wbac-app-container"]/div/div/valuation/section[2]/div/div[1]/div[1]/div[4]/vehicle-details/div[3]/div[2]/div[3]/div[2]') }


    yourDetails() {
        if (this.yourName.isExisting()) {
            this.yourName.setValue("test")
        }
        this.emailAddress.setValue("test@gmail.com")
        this.postCode.setValue("W1A 1AA")
        this.telNum.setValue("07212346577")
        this.myValuation.click()
    }

    yourValuation() {
        this.yourValHeader.isDisplayed()
    }


    carDetails(miles) {
        this.mileage.setValue(miles);
        this.card.click()
        this.btn.click()
        this.contBtn.click()
    }


}

module.exports = new WeBuyAnyCarPage();