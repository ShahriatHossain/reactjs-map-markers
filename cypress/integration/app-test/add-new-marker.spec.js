describe ('Third Test', () => {
    it ('Accepts input', () => {
      // visit the app
      cy.visit ('/');

      // click on Add Map button
      cy.get('.btn-primary').click();

      cy.get(':nth-child(1) > #formName').type ('New marker');
      cy.get(':nth-child(2) > #formName').type ('Your position');
      cy.get(':nth-child(3) > #formName').type ('37.762391');
      cy.get(':nth-child(4) > #formName').type ('-122.439192');

      // click on save changes button
      cy.get('form > .btn').click();
    });
  });