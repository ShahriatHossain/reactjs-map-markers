describe('Second Test', () => {
    it('Check marker exist', () => {
        cy.visit('/');
        cy.get('[style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"] > div > img');
    })
})