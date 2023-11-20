describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should log in successfully", () => {
    cy.visit("/login");
    cy.login("123@456.com", "123456");
    cy.url().should("eq", "http://localhost:3000/");
    cy.visit("/user");
    cy.get("#logoutButton").click();
  });
  it("Should fail to login", () => {
    cy.visit("/login");
    cy.login("9999@9999.com", "999999");
    cy.get("#alert").should("contain.text", "Failed to log in");
  });
  it("Should sign up successfully", () => {
    cy.visit("/signup");
    cy.newEmail().then((newEmail) => {
      cy.get("#emailField").type(newEmail);
    });
    cy.get("#passwordField").type("123456");
    cy.get("#passwordConfirmationField").type("123456");
    cy.get("#signUpButton").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
  it("Should fail to sign up (passwords do not match)", () => {
    cy.visit("/signup");
    cy.newEmail().then((newEmail) => {
      cy.get("#emailField").type(newEmail);
    });
    cy.get("#passwordField").type("123456");
    cy.get("#passwordConfirmationField").type("1234567");
    cy.get("#signUpButton").click();
    cy.get("#alert").should("contain.text", "Passwords do not match");
  });
  it("Should reset password successfully", () => {
    cy.visit("/password/reset");
    cy.get("#emailField").type("123@456.com");
    cy.get("#resetButton").click();
    cy.get("#alert").should(
      "contain.text",
      "Email sent. Please check your inbox."
    );
  });
  it("Should fail to send reset email", () => {
    cy.visit("/password/reset");
    cy.get("#emailField").type("99999");
    cy.get("#resetButton").click();
    cy.get("#alert").should("contain.text", "Failed to send reset email.");
  });
  it("Should log out", () => {
    cy.visit("/user");
    cy.get("#logoutButton").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
