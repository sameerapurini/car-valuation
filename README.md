# car-valuation

Car Valuation tests

This project was generated with [Wdio] (https://webdriver.io/)

## Layout of the Project

The car registrations are fed in the feature file
Each car reg will have mileage field in input-data.json and the exprected values for price, color,make, model in the output-data.json.The final page which displays the make, model , price etc are validated against the output json file.

## Running end-to-end tests

Before running the tests make sure you run ,'npm install' in order to get all the dependencies.
Run `'npm run e2e-tests' to execute the end-to-end tests.

## Tags in the feature file
A smoketest tag is added right now, it can be changed to a desired one in the wdio.conf file in line 75,

*tagExpression: '@smoketest'*


