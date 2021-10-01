/// <reference types="cypress" />

import locators from '../../support/locators';
import { generateFakeEmail } from '../../utils/helpers';
import { cnpj, cpf } from 'cpf-cnpj-validator';

let email;
let emailRepresentative;
let documentRepresentative;
let cpfDocument;

describe('Send Invite Person', () => {
  before(() => {
    cy.loginWithStandardCredentials();
    cy.get(locators.productChoicePage.welcomeTitleMessage);
    cy.selectProduct();
    cy.get(locators.sidebar.sendInviteOption).click();
    email = generateFakeEmail();
    emailRepresentative = generateFakeEmail();
    documentRepresentative = cnpj.generate();
    cpfDocument = cpf.generate();
  });

  afterEach(() => {
    cy.deleteRegisterDatabase(cpfDocument);
  });

  it('should be able to send invite to individual person', () => {
    cy.get(locators.sendInvitePage.documentInput).type(cpfDocument);
    cy.get(locators.sendInvitePage.emailInput).type(email);
    cy.get(locators.sendInvitePage.sendInviteButton).click();
    cy.get(locators.sendInvitePage.inviteSuccessMessage).should(
      'have.text',
      'Seu convite foi enviado com sucesso!'
    );
    cy.xpath(locators.sendInvitePage.closeModalButton()).click();
  });

  it('should be able to send invite to which will be filled in by a representative', () => {
    cy.get(locators.sendInvitePage.documentInput).type(cpfDocument);
    cy.get(locators.sendInvitePage.filledByRepresentative).click();
    cy.get(locators.sendInvitePage.emailInput).type(email);
    cy.get(locators.sendInvitePage.documentRepresentativeInput).type(documentRepresentative);
    cy.get(locators.sendInvitePage.emailRepresentativeInput).type(emailRepresentative);
    cy.get(locators.sendInvitePage.sendInviteButton).click();
    cy.get(locators.sendInvitePage.inviteSuccessMessage).should(
      'have.text',
      'Seu convite foi enviado com sucesso!'
    );
    cy.xpath(locators.sendInvitePage.closeModalButton()).click();
    cy.xpath(locators.sendInvitePage.representativeIcon(cpfDocument)).should(
      'have.class',
      'text-c-green'
    );
  });

  it('should not be able to send invite without e-mail', () => {
    cy.get(locators.sendInvitePage.documentInput).type(cpfDocument);
    cy.get(locators.sendInvitePage.sendInviteButton).click();
    cy.get(locators.sendInvitePage.inviteSuccessMessage).should(
      'have.text',
      'O E-mail inserido não é válido'
    );
    cy.xpath(locators.sendInvitePage.closeModalButton()).click();
  });

  it('should not be able to send invite with invalid document', () => {
    const documentInvalid = '00000000000';

    cy.get(locators.sendInvitePage.documentInput).type(documentInvalid);
    cy.get(locators.sendInvitePage.emailInput).type(email);
    cy.get(locators.sendInvitePage.sendInviteButton).click();
    cy.get(locators.sendInvitePage.inviteSuccessMessage).should('have.text', 'Documento inválido!');
    cy.xpath(locators.sendInvitePage.closeModalButton()).click();
  });
});
