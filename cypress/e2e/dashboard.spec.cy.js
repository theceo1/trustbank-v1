// cypress/e2e/dashboard.spec.cy.js
describe('Dashboard Page', () => {
  it('should load the dashboard and display cards', () => {
    cy.visit('/dashboard');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Account Balance').should('be.visible');
    cy.contains('Trade').should('be.visible');
  });

  it('should open the modal when clicking the button', () => {
    cy.visit('/dashboard');
    
    // Increase timeout and log elements
    cy.get('button', { timeout: 10000 }).then($buttons => {
      cy.log($buttons);
    });

    cy.get('button', { timeout: 10000 }).contains('Moon').then($button => {
      cy.log($button);
      cy.wrap($button).click();
    });

    cy.contains('Modal Title', { timeout: 10000 }).should('be.visible');
  });
});
