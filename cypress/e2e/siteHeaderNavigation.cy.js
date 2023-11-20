describe("SiteHeader Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should navigate to Discover page", () => {
    cy.contains("Home").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("Should navigate to Favorites page", () => {
    cy.contains("Favorites").click();
    cy.url().should("include", "/movies/favorites");
  });
  it("Should navigate to Upcoming Movies page", () => {
    cy.contains("Upcoming").click();
    cy.url().should("include", "/movies/upcoming");
  });
  it("Should navigate to Daily Trending Movies page", () => {
    cy.contains("Trending").click();
    cy.contains("Day").click();
    cy.url().should("include", "/movies/trending/day");
  });
  it("Should navigate to Weekly Trending Movies page", () => {
    cy.contains("Trending").click();
    cy.contains("Week").click();
    cy.url().should("include", "/movies/trending/week");
  });
  it("Should navigate to User Profile page or Sign Up page", () => {
    cy.get('[data-testid="AccountCircleIcon"]').click({ multiple: true, force: true });
    cy.url().then((url) => {
      expect(url.includes("/user") || url.includes("/signup")).to.be.true;
    });
  });
});
