describe("User Profile", () => {
  it("should prompt the user to log in (if not logged in)", () => {
    cy.visit("/user");
    cy.get("#pleaseLogin").should("contain.text", "Please log in.");
  });
  it("should display user profile information (if logged in)", () => {
    cy.login("123@456.com", "123456");
    cy.url().should("eq", "http://localhost:3000/");
    cy.visit("/user");
    cy.get("#emailLabel").should("contain.text", "Email");
    cy.get("#email").should("contain.text", "123@456.com");
    cy.get("#logoutButton").click();
  });
});
