context('Navigation', () => {
    it('can navigate around the website', () => {
      cy.visit('http://localhost:4200/');
      cy.visit('http://localhost:4200/aboutus');
      cy.visit('http://localhost:4200/contactus');
      cy.visit('http://localhost:4200/Grpahs');
      cy.visit('http://localhost:4200/login');
      cy.visit('http://localhost:4200/register');
      cy.visit('http://localhost:4200/user');
      cy.visit('http://localhost:4200/users');
      cy.visit('http://localhost:4200/youtube');
      cy.visit('http://localhost:4200/Images');
      cy.visit('http://localhost:4200/sorting');
      cy.visit('http://localhost:4200/filterpipes');
      cy.visit('http://localhost:4200/customizedcell');
      cy.visit('http://localhost:4200/scroll');
      cy.visit('http://localhost:4200/ag-grid');
      cy.visit('http://localhost:4200/totalvalue');
    });
  })
