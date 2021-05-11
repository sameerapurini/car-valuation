const fs = require('fs');
const wdioParallel = require('wdio-cucumber-parallel-execution');
const { removeSync } = require('fs-extra');
const reporter = require('cucumber-html-reporter');
const currentTime = new Date().toJSON().replace(/:/g, "-");
const sourceSpecDirectory = `e2e-tests/features`;
const jsonTmpDirectory = `e2e-tests/reports/json/tmp/`;
let featureFilePath = `${sourceSpecDirectory}/*.feature`;

exports.config = {

    runner: 'local',

    specs: [
        featureFilePath
    ],

    capabilities: [{

        maxInstances: 1,
        browserName: 'chrome',
    }],

    logLevel: 'error',
    bail: 0,
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',

    reporters: [

        ['cucumberjs-json', {
            jsonFolder: jsonTmpDirectory,
            language: 'en',

        }]],

    cucumberOpts: {
        require: ['e2e-tests/steps/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['[pretty]'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '@smoketest',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },


    onPrepare: () => {
        removeSync(jsonTmpDirectory);
        if (!fs.existsSync(jsonTmpDirectory)) {
            fs.mkdirSync(jsonTmpDirectory);
        }

    },

    onComplete: () => {

        try {
            let consolidatedJsonArray = wdioParallel.getConsolidatedData({
                parallelExecutionReportDirectory: jsonTmpDirectory
            });

            let jsonFile = `${jsonTmpDirectory}report.json`;
            fs.writeFileSync(jsonFile, JSON.stringify(consolidatedJsonArray));

            var options = {
                theme: 'bootstrap',
                jsonFile: jsonFile,
                output: `tests/reports/html/report-${currentTime}.html`,
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                ignoreBadJsonFile: true
            };

            reporter.generate(options);
        } catch (err) {
            console.log('err', err);
        }
    }
}