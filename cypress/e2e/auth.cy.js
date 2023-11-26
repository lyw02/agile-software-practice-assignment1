describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  before(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      console.error("Caught unhandled exception:", err.message);
      return false;
    });
  });
  it("Should log in successfully", () => {
    cy.visit("/login");
    cy.login("123@456.com", "123456");
    cy.url().should("eq", "http://localhost:3000/");
    cy.visit("/user");
    cy.get("#logoutButton").click();
  });
  it("Should fail to login", () => {
    // cy.visit("/login");
    // cy.login("9999@9999.com", "999999");
    // cy.get("#alert").should("contain.text", "Failed to log in");

    cy.visit("/login");
    cy.intercept("POST", "/api/login", {
      statusCode: 401,
      body: { error: "Fail to login." },
    }).as("loginFailed");
    cy.login("9999@9999.com", "999999");
    cy.wait("@loginFailed");
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("Invalid credentials");
      return false;
    });
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
    // cy.visit("/signup");
    // cy.newEmail().then((newEmail) => {
    //   cy.get("#emailField").type(newEmail);
    // });
    // cy.get("#passwordField").type("123456");
    // cy.get("#passwordConfirmationField").type("1234567");
    // cy.get("#signUpButton").click();
    // cy.get("#alert").should("contain.text", "Passwords do not match");

    cy.visit("/signup");
    cy.newEmail().then((newEmail) => {
      cy.get("#emailField").type(newEmail);
    });
    cy.get("#passwordField").type("123456");
    cy.get("#passwordConfirmationField").type("1234567");
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("Passwords do not match");
      return false;
    });
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
    // cy.visit("/password/reset");
    // cy.get("#emailField").type("99999");
    // cy.get("#resetButton").click();
    // cy.get("#alert").should("contain.text", "Failed to send reset email.");

    cy.visit("/password/reset");
    cy.get("#emailField").type("99999");
    cy.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("Failed to send reset email.");
      return false;
    });
  });
  it("Should log out", () => {
    cy.visit("/user");
    cy.get("#logoutButton").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  after(() => {
    cy.off("uncaught:exception");
  });
});
