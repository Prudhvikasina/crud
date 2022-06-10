context('ag-grid', () => {
    it('Launch site', () => {
        cy.visit('http://localhost:4200//agngular-grid')
    });
    it('Interacting with text fields',()=>{
        cy.get('.btn').click(onBtnExport1())
    })
    
})