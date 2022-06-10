beforeEach('Launch site', ()=>{
    cy.visit('http://localhost:4200/register')
  })
  
  it('Interacting with text fields',()=>{
    cy.get('input[formControlEmail="Email"]')
      .type('Prudhvi@gmail.com')
      .should('have.value','Prudhvi@gmail.com')

    cy.get('input[formControlPassword="password"]')
      .type('prudhvi@123')
      .should('have.value','prudhvi@123')

    cy.get('input[formControlPassword="password1"]')
      .type('prudhvi@123')
      .should('have.value','prudhvi@123')

    cy.get('.signin-btn').click()
  
  })
  