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
  },
  sendInvitePage: {
    newInviteArea: 'div[class="card"]',
    documentInput: '.form-material > :nth-child(1) > .form-control',
    documentRepresentativeInput: '.ng-pristine.ng-star-inserted > :nth-child(1) > .form-control',
    emailInput: '.form-material > :nth-child(2) > .form-control',
    emailRepresentativeInput: '.ng-invalid.ng-star-inserted > :nth-child(2) > .form-control',
    personTypeInput: 'select[formcontrolname="type"]',
    sendInviteButton: 'div[class="form-group form-default"] button',
    personTypeInput: 'select[formcontrolname="type"]',
    inviteSuccessMessage: '#swal2-content',
    filledByRepresentative: 'label[for="madeByRepresentative"]',
    closeModalButton: () => '//button[contains(., "OK")]',
    representativeIcon: (document) => `//td[contains(., "${document}")]/following-sibling::td[4]/div/i`
  },
};

export default locators;
