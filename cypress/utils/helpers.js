const generateFakeEmail = () => {
  const prefix = Math.random().toString(36).substring(7);
  const email = `test_${prefix}@vortx.com.br`;

  return email;
};

const getDigitId = (digit) => {
  let keyId;
  const keysInfosArray = Cypress.env('keysInfo');

  keysInfosArray.map((keyInfo) => {
    if (keyInfo.value.includes(digit)) keyId = keyInfo.id
  })

  return keyId;
}

export {
  generateFakeEmail,
  getDigitId
}
