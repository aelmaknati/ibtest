// e2e-run-tests.js
const cypress = require('cypress')

var sails = require('sails');

sails.lift({
  hooks: {grunt: false},
  log: {level: 'warn'},

}, function () {

  cypress.run().then(() => {
    sails.lower();
  })
})

