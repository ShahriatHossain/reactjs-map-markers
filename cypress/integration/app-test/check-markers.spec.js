describe('Second Test', () => {
    it('Check marker exist', () => {
        cy.visit('/');
        cy.get('div').should('have.class', 'card-title');
    })
})