/// <reference types="cypress" />

it('Equality', () => {
  const a = 1;
  
  expect(a).equal(1)
  expect(a, 'Should be 1').equal(1)
  expect(a).to.be.equal(1)
  expect(a).not.to.be.equal('b')
});