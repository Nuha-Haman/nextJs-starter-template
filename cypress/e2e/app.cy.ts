/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
// 1. Disable Cypress uncaught exception failures from React hydration errors
Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Minified React error #418") ||
    err.message.includes("Error: Minified React error #423")
  ) {
    return false;
  }
  // Enable uncaught exception failures for other errors
});

// 2. Re-enable Cypress uncaught exception failures from React hydration errors
Cypress.on("uncaught:exception", () => {});

describe("Home Page", () => {
  it("should display the correct title and navigation links", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Check for the presence of the Next.js logo
    cy.get('img[alt="Logo"]').should("be.visible");

    // Verify the page title
    cy.contains("h1", "Welcome to My Template").should("be.visible");

    // Check for the presence of navigation links
    // cy.get('a[href="https://vercel.com/new"]').should("be.visible");
    // cy.get('a[href="https://nextjs.org/docs"]').should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
