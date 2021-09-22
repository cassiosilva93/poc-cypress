/// <reference types="cypress" />

it('Equality', () => {
  const a = 1;
  
  expect(a).equal(1)
});

it('Test', () => {
  const obj = {
    name: 'Cassio',
    age: 25,
  };
  
  expect(obj).to.be.deep.equal({name: 'Cassio', age: 25})
});