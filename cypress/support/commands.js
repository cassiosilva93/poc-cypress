import { cnpj } from 'cpf-cnpj-validator';
import locators from './locators';

Cypress.Commands.add('login', (document, password) => {
  cy.visit(`${Cypress.config('baseUrlInterface')}`);
  cy.get(locators.loginPage.documentInput).type(document);

  [...password].forEach((number, index) => {
    cy.xpath(locators.loginPage.numberButton(number)).click();

    cy.get(locators.loginPage.passwordDigitTyped).should('have.length', index + 1);
  });

  cy.get(locators.loginPage.loginButton).click();
});

Cypress.Commands.add('loginWithStandardCredentials', () => {
  cy.visit(`${Cypress.config('baseUrlInterface')}`);
  cy.fixture('credentials').then((credentials) => {
    cy.get(locators.loginPage.documentInput).type(credentials.valid.document);

    [...credentials.valid.password].forEach((number) => {
      cy.xpath(locators.loginPage.numberButton(number)).click();
    });

    cy.get(locators.loginPage.loginButton).click();
  });
});

Cypress.Commands.add('selectProduct', () => {
  cy.intercept('GET', `${Cypress.config('baseUrlApi')}/Products`).as('products')
  cy.wait('@products')
  cy.visit(`${Cypress.config('baseUrlVxCadastro')}`);
});

Cypress.Commands.add('deleteRegisterDatabase', (document) => {
  const isCnpj = cnpj.isValid(document);

  isCnpj 
    ? cy.task(`companyRepository.deleteCompanyByDocument`, document)
    : cy.task(`personRepository.deletePersonByDocument`, document)

  cy.task(`invitationRepository.deleteInvitationByDocument`, document)
  cy.task(`agentRepository.deleteAgentByDocument`, document)
})

