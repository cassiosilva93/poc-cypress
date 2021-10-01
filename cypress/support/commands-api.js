import { getDigitId } from '../utils/helpers';

Cypress.Commands.add('getKeyboardId', () => {
  cy.request({ 
    method: 'GET', 
    url: `${Cypress.config('baseUrlApi')}/Login/Keyboard`,
  }).then(({ body }) => {
    Cypress.env('keyboardId', body.id);
    Cypress.env('keysInfo', body.keys);
    return body;
  })
})

Cypress.Commands.add('loginApi', (document, password) => {
  const keysIds = [];
  const passwordArray = [...password];

  passwordArray.forEach((digit) => {
    const id = getDigitId(digit);
    keysIds.push(id)
  })

  cy.request({ 
    method: 'POST', 
    url: `${Cypress.config('baseUrlApi')}/Login`,
    body: {
      Document: document,
      KeyboardId: Cypress.env('keyboardId'),
      Password: keysIds
    },
    failOnStatusCode: false,
  })
});

