interface LogIn {
  document: string;
  password: string;
}

interface Keys {
  id: string;
  value: string;
}

interface KeyboardResponse {
  id: string;
  keys: Keys[]
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Obtem as informações do teclado numérico do login 
     * @example 
     *    cy.getKeyboardId()
     */
    getKeyboardId(): KeyboardResponse

    /**
     * Realiza o login na aplicação através da camada da API
     * @param {string} document Documento utilizado para acessar o portal
     * @param {string} password Senha utilizada para acessar o portal
     * @example 
     *    cy.loginApi('000000000000', '000000')
     */
    loginApi({document, password}: LogIn): void
  }
}