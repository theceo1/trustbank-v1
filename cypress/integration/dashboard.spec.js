// cypress/integration/dashboard.spec.js
describe('Dashboard Page', () => {
    it('should load the dashboard and display cards', () => {
      cy.visit('/dashboard');
      cy.contains('Dashboard').should('be.visible');
      cy.contains('Account Balance').should('be.visible');
      cy.contains('Trade').should('be.visible');
      cy.contains('Market Prices').should('be.visible');
      cy.contains('Recent Transactions').should('be.visible');
    });
  
    it('should open the modal when clicking the button', () => {
      cy.visit('/dashboard');
      cy.get('button').contains('Moon').click();
      cy.contains('Modal Title').should('be.visible');
    });
  });
  