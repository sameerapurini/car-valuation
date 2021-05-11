# car-valuation

This project is written on [Wdio] (https://webdriver.io/). 
Wdio is chosen instead of Cypress as the scenarios needed launch of 2 url's which Cypress cannot perform.

## Layout of the Project

The car registrations are fed in the feature file
Each car reg will have mileage field in car-input.json and the expected values for price, color,make, model in the car-output.json.The final page which displays the make, model , price etc are validated against the car-output.json.

## Running end-to-end tests

Before running the tests make sure you have npm installed in your machine. 
Perform a 'npm install' to get all the dependencies.
Run `'npm run e2e-tests' to execute the scenarios on Chrome.

## Tags in the feature file

A smoketest tag is added right now, it can be changed to a desired one in the wdio.conf file in line 75,
*tagExpression: '@smoketest'*

## Pages and cucumber files
More pages can be added as the project evolves, only 2 pages were added in order to project the use of page object model with cucumber as part of the delivery of the project.

## validation of additional registration numbers

In order to validate more data, enter the car reg number in the feature file's data table and also update the car-input and car-output json files accordingly.

# test reports

Cucumber reports are generated after the end of each test run. Allure or JUnit reports can also be generated as the dependencies are already added to the package file. Updating the conf file would perform the operation.

Some of the scenarios which would not satisfy the data would fail, for example the car price which keeps on updating.

