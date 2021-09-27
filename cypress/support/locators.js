const locators = {
  loginPage: {
    documentInput: '#cpfInput',
    loginButton: '.btn-secondary',
    passwordDigitTyped: '.newLogin_password .newLogin_password_mask img',
    passwordWrongMessage: 'div[class="content-body"]',
    numberButton: (number) =>
      `//button[contains(text(), "${number}")][contains(@class, "btnKeyboars")]`,
  },
  productChoicePage: {
    welcomeTitleMessage: 'h3[class="box-title m-t-20 m-b-0 font-20"]',
    productOption: (productName) => `//label[contains(., "${productName}")]`,
  },
  sidebar: {
    sendInviteOption: 'a[href="/admin/invitation"]',
    cadastralAnalysisOption: 'a[href="/admin/registration"]',
    nextExpirationsOption: 'a[href="/admin/expiration"]',
    reasonsDessaprovalOption: 'a[href="/admin/return-reasons"]',
    suitabilityOption: 'a[href="/admin/suitability"]',
    sidebarOptions: 'div[class="d-color ng-tns-c2-0 ng-star-inserted"]',
  },
  sendInvitePage: {
    newInviteArea: 'div[class="card"]',
    documentInput: 'div[class="form-group form-default"] input[formcontrolname="socialNumber"]',
    emailInput: ':nth-child(2) > .form-control',
    personTypeInput: 'select[formcontrolname="type"]',
    sendInviteButton: 'div[class="form-group form-default"] button',
    inviteSuccessMessage: '#swal2-content',
  },
  cadastralAnalysisPage: {
    newRegisterModal: {
      documentInput: 'input[formcontrolname="document"]',
      confirmButton: 'button[type=submit]',
    },
    newRegisterButton: () => '//button[contains(., "novo cadastro")]',
  },
  registerFields: {
    fullnameInput: 'input[data-value="Nome Completo"]',
    emailInput: 'input[formcontrolname="item"]',
    transferedInvestorOptionsRadio: {
      noOptionRadio: 'label[for="fullRegister-no"]',
      yesOptionRadio: 'label[for="fullRegister-yes"]'
    }
  }
};

export default locators;
