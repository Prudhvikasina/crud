describe('Bar Chart Tests', function() {
    it('Should match image snapshot', function() {
        cy.visit('http://localhost:4200/graphs');
        cy.get('.pie-chart')
    });
  });