// e2e-run-tests.js
const cypress = require('cypress')

var sails = require('sails');

sails.lift({
  hooks: {grunt: false},
  log: {level: 'warn'},

}, function () {

  cypress.run({
    reporter : "mocha-junit-reporter",
    config: {
      video: false,
    },
    reporterOptions : {
      mochaFile : "test-results-cypress.xml"
    }

  }).then(() => {
    sails.lower();
  })
})

