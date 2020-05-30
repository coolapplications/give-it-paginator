describe('My mercadolibre test on cypress', () => {
  it('Gets iphone and show details', () => {
    cy.visit('/');
    cy.get('[type="text"]').click().type('iphone 11');
    cy.contains('iphone', { matchCase: false });
  });
});
