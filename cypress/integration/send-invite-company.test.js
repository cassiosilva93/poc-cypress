/// <reference types="cypress" />

import locators from '../support/locators';
import { generateFakeEmail } from '../utils/helpers';
import { cnpj } from 'cpf-cnpj-validator';

let email;
let cnpjDocument;

const optionsPerson = [
  'Fundo de investimento',
  'Gestor',
  'Emissor',
  'Escriturador',
  'Liquidante',
  'PJ',
];

describe('Send Invite Company', () => {
  before(() => {
    cy.loginWithStandardCredentials();
    cy.get(locators.productChoicePage.welcomeTitleMessage);
    cy.selectProduct();
    cy.get(locators.sidebar.sendInviteOption).click();
    email = generateFakeEmail();
    cnpjDocument = cnpj.generate();
  });

  afterEach(() => {
    cy.deleteRegisterDatabase(cnpjDocument);
  });

  optionsPerson.forEach((optionType) => {
    it(`should be able to send invite to ${optionType}`, () => {
      cy.get(locators.sendInvitePage.documentInput).type(cnpjDocument);
      cy.get(locators.sendInvitePage.emailInput).type(email);
      cy.get(locators.sendInvitePage.personTypeInput).children().should('have.length', 6);
      cy.get('select').select(optionType);
      cy.get(locators.sendInvitePage.sendInviteButton).click();
      cy.get(locators.sendInvitePage.inviteSuccessMessage).should(
        'have.text',
        'Seu convite foi enviado com sucesso!'
      );
      cy.xpath(locators.sendInvitePage.closeModalButton()).click();
    });
  });
});
