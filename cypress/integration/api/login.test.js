/// <reference types="cypress" />

import '../../support/commands-api';

describe('Login API', () => {
  beforeEach(() => {
    cy.getKeyboardId();
  });

  it('should login with successfully when credentials is correct', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.loginApi(credentials.valid.document, credentials.valid.password)
        .should('not.be.empty')
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.have.property('message');
          expect(response.body).to.have.property('result');
          expect(response.body.message).to.be.equal('Login realizado');
        });
    })
  });

  it('should login failed when password is incorrect or document is not registered', () => {
    cy.fixture('credentials').then((credentials) => {
      cy.loginApi(credentials.valid.document, credentials.invalid.password)
        .should('not.be.empty')
        .then((response) => {
          console.log(response);
          expect(response.status).to.be.equal(400);
          expect(response.body).to.have.property('message');
          expect(response.body.message).to.be.equal('Usuário e senha não conferem ou o usuário está bloqueado!');
        });
    })
  });
});
