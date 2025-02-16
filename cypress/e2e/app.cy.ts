/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Home Page", () => {
  it("should display the correct title and navigation links", () => {
    // Visit the home page
    cy.visit("http://localhost:3000/");

    // Check for the presence of the Next.js logo
    cy.get('img[alt="Next.js logo"]').should("be.visible");

    // Verify the page title
    cy.contains("h1", "Your Expected Title").should("be.visible");

    // Check for the presence of navigation links
    cy.get('a[href="https://vercel.com/new"]').should("be.visible");
    cy.get('a[href="https://nextjs.org/docs"]').should("be.visible");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
