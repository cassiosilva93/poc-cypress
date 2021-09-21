/// <reference types="cypress" />

const allureWriter = require('@shelex/cypress-allure-plugin')

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
}
