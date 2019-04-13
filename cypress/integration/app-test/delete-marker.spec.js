describe ('Fifth Test', () => {
    it ('Delete marker', () => {
      // visit the app
      cy.visit ('/');

      // click on delete link
      cy.get(':nth-child(2) > .card > .card-body > :nth-child(6)').click();

      // click on delete button
      cy.get('form > .btn').click();
    });
  });