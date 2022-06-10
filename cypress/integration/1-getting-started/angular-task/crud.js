context('create-employee', () => {    
        it('navigates', () => {
            cy.visit('http://localhost:4200/create-employee')
          
            cy.get('#addnew').click()
          
            cy.get('[id="employee"]')
              .type('Prudhvi')
          
            cy.get('[id="employeedept"]')
              .type('sales')
          
              cy.get('input[formControlName="mobile"]')
              .type('9010712115')
          
            cy.get('[id="email"]')
             .type('prudhvi@gmail.com')
          
            cy.get('select[formcontrolName="gender"]')
            .select('male')
            .should('have.value', 'male')
             
            cy.get('select[formcontrolName="gender"]')
            .select('male')
            .should('have.value', 'male')

            cy.get('#save-btn').click()

            cy.get('#edit-btn').click()
             
            cy.get('[id="employee"]')
            .type('Prudhvi')
        
          cy.get('[id="employeedept"]')
            .type('sales')
        
            cy.get('input[formControlName="mobile"]')
            .type('9010712115')
        
          cy.get('[id="email"]')
           .type('prudhvi@gmail.com')

           cy.get('select[formcontrolName="gender"]')
            .select('female')
            .should('have.value', 'female')
             
            cy.get('#save-btn').click()

            
          }) 
    });
    
