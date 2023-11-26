describe("Sorting", () => {
  let movieList;
  let expectedTitleArray;
  let expectedReleaseDateArray;
  let expectedRatingArray;
  beforeEach(() => {
    cy.visit(`/`);
    cy.getMovieList().then((response) => {
      movieList = response.body.results;
    });
  });
  it("should sort by title (asc)", () => {
    cy.get("#sortBy").click();
    cy.get("#title").click();
    expectedTitleArray = movieList.map((movie) => movie.title).sort();
    let actualTitleArray = [];
    cy.get(".movieTitle")
      .each(($element) => {
        const movieTitle = $element.text().trim();
        actualTitleArray.push(movieTitle);
      })
      .then(() => {
        expect(actualTitleArray).to.deep.equal(expectedTitleArray);
      });
  });
  it("should sort by release date (desc)", () => {
    cy.get("#sortBy").click();
    cy.get("#releaseDate").click();
    expectedReleaseDateArray = movieList
      .map((movie) => movie.release_date)
      .sort((a, b) => {
        return new Date(b) - new Date(a);
      });
    let actualReleaseDateArray = [];
    cy.get(".releaseDate")
      .each(($element) => {
        const releaseDate = $element.text().trim();
        actualReleaseDateArray.push(releaseDate);
      })
      .then(() => {
        expect(actualReleaseDateArray).to.deep.equal(expectedReleaseDateArray);
      });
  });
  it("should sort by rating (desc)", () => {
    cy.get("#sortBy").click();
    cy.get("#rating").click();
    expectedRatingArray = movieList
      .map((movie) => movie.vote_average)
      .sort((a, b) => b - a)
      .map((num) => {
        return num.toString();
      });
    let actualRatingArray = [];
    cy.get(".rating")
      .each(($element) => {
        const rating = $element.text().trim();
        actualRatingArray.push(rating);
      })
      .then(() => {
        expect(actualRatingArray).to.deep.equal(expectedRatingArray);
      });
  });
});
