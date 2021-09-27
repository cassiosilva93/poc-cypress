/// <reference types="cypress" />

import locators from "../support/locators";

describe('Login page', () => {
  it('should login successfully', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.login(credentials.valid.document, credentials.valid.password);
      cy.get(locators.productChoicePage.welcomeTitleMessage)
        .should('have.text', 'Olá, seja bem-vindo ao nosso Portal :)')
    })
  });

  it('should login failed when incorrect password', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.login(credentials.valid.document, credentials.invalid.password);
      cy.get(locators.loginPage.passwordWrongMessage)
        .should('contain.text', 'Usuário e senha não confere')
      })
  });

  it('should login failed when incorrect document', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.login(credentials.invalid.document, credentials.valid.password);
      cy.get(locators.loginPage.passwordWrongMessage)
        .should('contain.text', 'Usuário e senha não confere')
    })
  });
});

