interface LogIn {
  document: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Realiza o login na aplicação
     * @example 
     *    cy.login('000000000000', '000000')
     */
    login(document: string, password: string): void

    /**
     * Realiza o login na aplicação com um usuário padrão
     * @example 
     *    cy.loginWithStandardCredentials()
     */
    loginWithStandardCredentials(): void
  }
}