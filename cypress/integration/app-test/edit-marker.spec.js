describe ('Four Test', () => {
    it ('Edit input', () => {
      // visit the app
      cy.visit ('/');

      // click on edit link
      cy.get(':nth-child(2) > .card > .card-body > :nth-child(5)').click();

      cy.get(':nth-child(1) > #formName').clear().type ('New marker1');
      // cy.get(':nth-child(2) > #formName').type ('Your position');
      // cy.get(':nth-child(3) > #formName').type ('37.762391');
      // cy.get(':nth-child(4) > #formName').type ('-122.439192');

      // click on save changes button
      cy.get('form > .btn').click();
    });
  });