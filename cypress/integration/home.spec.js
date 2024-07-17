describe('Home Page', () => {
  it('should navigate to sign-up page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Get Started').click();
    cy.url().should('include', '/signup');
  });
});
