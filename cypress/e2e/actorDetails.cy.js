describe("Actor details", () => {
  let actorDetails;
  const actorId = 2037;
  beforeEach(() => {
    cy.getActorDetails(actorId).then((response) => {
      actorDetails = response.body;
    });
    cy.visit(`/actors/${actorId}`);
  });
  it("should display actor name", () => {
    cy.get("h3").should("contain.text", actorDetails.name);
  });
  it("should expand and fold biography", () => {
    cy.get("#biography").should("contain.text", "Expand");
    cy.get("#expandButton").click();
    cy.get("#biography").should("contain.text", "Fold");
    cy.get("#foldButton").click();
  });
  it("should navigate to movie details when clicking on a movie", () => {
    cy.get(".actingListBox .movieLink").first().click();
    cy.url().should("include", "/movies/");
  });
});
