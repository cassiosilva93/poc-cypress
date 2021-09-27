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

Cypress.Commands.add('startRegister', (document) => {
  cy.xpath(locators.cadastralAnalysisPage.newRegisterButton()).click();
  cy.get(locators.cadastralAnalysisPage.newRegisterModal.documentInput).type(document).tab();
  cy.get(locators.cadastralAnalysisPage.newRegisterModal.confirmButton, {timeout: 10000}).should('not.be.disabled')
  cy.get(locators.cadastralAnalysisPage.newRegisterModal.confirmButton).click()
});
  