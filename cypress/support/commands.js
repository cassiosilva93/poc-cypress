import { cnpj } from 'cpf-cnpj-validator';
import locators from './locators';

const collections = [
  'Invitation',
  'Gestor',
  'Person',
  'Company'
]

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
  cy.intercept('GET', 'https://apis-stg.vortx.com.br/vxlogin/api/Products').as('products')
  cy.wait('@products')
  cy.visit('https://vxcadastrouat.vortx.com.br/');
});

Cypress.Commands.add('deleteRegisterDatabase', (document) => {
  const isCnpj = cnpj.isValid(document);

  isCnpj 
    ? cy.task(`companyRepository.deleteCompanyByDocument`, document)
    : cy.task(`personRepository.deletePersonByDocument`, document)

  cy.task(`invitationRepository.deleteInvitationByDocument`, document)
  cy.task(`agentRepository.deleteAgentByDocument`, document)
})

