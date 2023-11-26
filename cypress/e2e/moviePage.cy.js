describe("Movie details", () => {
  let movieDetails;
  const movieId = 901362;
  beforeEach(() => {
    cy.getMovieDetails(movieId).then((response) => {
      movieDetails = response.body;
    });
    cy.visit(`/movies/${movieId}`);
    cy.wait(2000);
  });
  it("should navigate to actor details when clicking on a actor", () => {
    cy.get("a").eq(2).should("exist").click();
    cy.url().should("include", "/actors/");
  });
  it("should switch to similar movies list when clicking button", () => {
    it("should navigate to movie details when clicking on a movie in similar movies list", () => {
      cy.get("#similarMovies").click();
      cy.get(".movieEntry").first().click();
      cy.url().should("include", "/movies/");
    });
  });
});
