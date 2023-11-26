describe("Searching", () => {
  let searchResults;
  const searchText = "example";
  beforeEach(() => {
    cy.getSearchResults(searchText).then((response) => {
      searchResults = response.body;
    });
    cy.visit("/");
  });
  it("should jump to search result page", () => {
    cy.get("#searchField").type(searchText);
    cy.get("#searchButton").click();
    cy.url().should("include", `search/${searchText}`);
    it("should display movie list", () => {
      cy.get(".movieTitle")
        .first()
        .should("contain.text", searchResults[0].name);
    });
  });
});
