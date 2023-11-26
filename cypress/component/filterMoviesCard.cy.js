import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import FilterMoviesCard from "../../src/components/filterMoviesCard";

const queryClient = new QueryClient();

describe("FilterMoviesCard Component Test", () => {
  let movieList;
  beforeEach(() => {
    cy.getMovieList().then((response) => {
      movieList = response.body.results;
    });
    cy.mount(
      <QueryClientProvider client={queryClient}>
        <Router>
          <FilterMoviesCard />
        </Router>
      </QueryClientProvider>
    );
  });
  it("should display filter options with default values", () => {
    cy.get("#ratingStart").should("have.value", "");
    cy.get("#ratingEnd").should("have.value", "");
    cy.get("label").contains("Release time from").should("exist");
    cy.get("label").contains("to").should("exist");
  });
  it("show movies with the rating", () => {
    let startRating = 3;
    let endRating = 8;
    const matchingMovies = movieList
      .filter((m) => m.vote_average >= startRating)
      .filter((m) => m.vote_average <= endRating);
    cy.get("#ratingStart").type(startRating);
    cy.get("#ratingEnd").type(endRating);
    cy.get(".MuiCardHeader-content").should(
      "have.length",
      matchingMovies.length
    );
    cy.get(".MuiCardHeader-content").each(($card, index) => {
      cy.wrap($card).find("p").contains(matchingMovies[index].title);
    });
    it("handles case when there are no matches", () => {
      let startRating = 100;
      let endRating = -1;
      const matchingMovies = movieList
        .filter((m) => m.vote_average >= startRating)
        .filter((m) => m.vote_average <= endRating);
      cy.get("label").contains("Release time from").type(startRating);
      cy.get("label").contains("to").type(endRating);
      cy.get(".MuiCardHeader-content").should("have.length", 0);
    });
  });
  it("show movies with the release date", () => {
    let startDate = new Date("30-09-2023");
    let endDate = new Date("30-10-2023");
    const matchingMovies = movieList
      .filter((m) => m.release_date >= startDate)
      .filter((m) => m.release_date <= endDate);
    cy.get("label").contains("Release time from").type(startDate);
    cy.get("label").contains("to").type(endDate);
    cy.get(".MuiCardHeader-content").should(
      "have.length",
      matchingMovies.length
    );
    cy.get(".MuiCardHeader-content").each(($card, index) => {
      cy.wrap($card).find("p").contains(matchingMovies[index].title);
    });
    it("handles case when there are no matches", () => {
      let startDate = new Date("30-11-2023");
      let endDate = new Date("30-09-2023");
      const matchingMovies = movieList
        .filter((m) => m.release_date >= startDate)
        .filter((m) => m.release_date <= endDate);
      cy.get("#ratingStart").type(startDate);
      cy.get("#ratingEnd").type(endDate);
      cy.get(".MuiCardHeader-content").should("have.length", 0);
    });
  });
});
