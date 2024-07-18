/// <reference types="cypress" />

describe('Authentication Flow', () => {
  it('should allow a user to sign up', () => {
    cy.visit('/signup');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
  });

  it('should allow a user to sign in', () => {
    cy.visit('/signin');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123');
    cy.get('button[type="submit"]').click();
  });

  it('should allow a user to sign out', () => {
    cy.visit('/dashboard');
    cy.get('button[aria-label="Sign out"]').click();
    cy.url().should('include', '/');
  });
});
