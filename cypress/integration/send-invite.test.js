/// <reference types="cypress" />

import locators from "../support/locators";

describe('Send Invite Page', () => {
  before(() => {
    cy.loginWithStandardCredentials()
    cy.get(locators.productChoicePage.welcomeTitleMessage)
  })

  it('should be able to send invite', () => {
    cy.selectProduct();
    cy.get(locators.sidebar.sendInviteOption).click()
    cy.get(locators.sendInvitePage.documentInput).type('25874049401')
    cy.get(locators.sendInvitePage.emailInput).type('cos@vortx.com.br')
    cy.get(locators.sendInvitePage.sendInviteButton).click()
    cy.get(locators.sendInvitePage.inviteSuccessMessage).should('have.text', 'Seu convite foi enviado com sucesso!')
  });
});