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
     * Realiza o login na aplicação
     * @param {string} document Documento utilizado para acessar o portal
     * @param {string} password Senha utilizada para acessar o portal
     * @example 
     *    cy.login('000000000000', '000000')
     */
    login({document, password}: LogIn): void

    /**
     * Realiza o login na aplicação com um usuário padrão
     * @example 
     *    cy.loginWithStandardCredentials()
     */
    loginWithStandardCredentials(): void

    /**
     * Realiza a redirecionamento de rota para o produto VxCadastro 
     * @example 
     *    cy.selectProduct()
     */
     selectProduct(): void

     /**
     * Realiza a exclusão dos registros nas collections Agent, Company/Person e Invitation 
     * @param {string} document Documento que será excluído
     * @example 
     *    cy.deleteRegisterDatabase('00000000000')
     */
    deleteRegisterDatabase(document: string): void

    /**
     * Obtem as informações do teclado número do login 
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