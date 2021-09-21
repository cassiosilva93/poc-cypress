import './commands'
import 'cypress-xpath';

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
