// cypress/integration/home.spec.js
describe('Home Page', () => {
    it('should display Hero Section', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Welcome to TrustBank').should('be.visible');
      cy.contains('Get Started').should('be.visible');
    });
  
    it('should navigate to sign-up page', () => {
      cy.contains('Get Started').click();
      cy.url().should('include', '/signup');
    });
  });
  