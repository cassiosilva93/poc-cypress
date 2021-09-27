/// <reference types="@shelex/cypress-allure-plugin" />

import './commands';
import 'cypress-xpath';
import '@shelex/cypress-allure-plugin';
import 'cypress-plugin-tab';

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'data-wc',
    'data-cy',
    'data-test',
    'data-testid',
    'id',
    'class',
    'tag',
    'attributes',
    'nth-child',
  ],
});
