import locators from './locators';

Cypress.Commands.add('login', (document, password) => {
  cy.visit('/');
  cy.get(locators.loginPage.documentInput).type(document);

  [...password].forEach((number, index) => {
    cy.xpath(locators.loginPage.numberButton(number)).click();

    cy.get(locators.loginPage.passwordDigitTyped).should('have.length', index + 1);
  });

  cy.get(locators.loginPage.loginButton).click();
});

Cypress.Commands.add('loginWithStandardCredentials', () => {
  cy.visit('/');

  cy.fixture('credentials').then((credentials) => {
    cy.get(locators.loginPage.documentInput).type(credentials.valid.document);

    [...credentials.valid.password].forEach((number) => {
      cy.xpath(locators.loginPage.numberButton(number)).click();
    });

    cy.get(locators.loginPage.loginButton).click();
  });
});

Cypress.Commands.add('selectProduct', () => {
  cy.visit('https://vxcadastrouat.vortx.com.br/');
});
