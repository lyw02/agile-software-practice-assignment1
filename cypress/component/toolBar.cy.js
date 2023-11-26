import { BrowserRouter as Router } from "react-router-dom";
import ToolBar from "../../src/components/toolBar";
import React from "react";

describe("ToolBar Component Test", () => {
  it("should render the search button", () => {
    cy.mount(
      <Router>
        <ToolBar />
      </Router>
    );
    cy.get("#searchButton").should("exist");
  });
  it("should render the view type toggle buttons", () => {
    cy.mount(
      <Router>
        <ToolBar />
      </Router>
    );
    cy.get("#cardButton").should("exist");
    cy.get("#listButton").should("exist");
  });
  it("should render the sort by select menu", () => {
    cy.mount(
      <Router>
        <ToolBar />
      </Router>
    );
    cy.get("#sortBy").should("exist");
  });
  it("should enter search text and jump to search results page", () => {
    const searchText = "example";
    cy.mount(
      <Router>
        <ToolBar />
      </Router>
    );
    cy.get("#searchField").type(searchText);
    cy.get("#searchButton").click();
    cy.location("pathname").should("eq", `/search/${searchText}`);
  });
  it("should select sort option", () => {
    const setSortBy = cy.stub();
    cy.mount(
      <Router>
        <ToolBar setSortBy={setSortBy} />
      </Router>
    );
    cy.get("#sortBy").click();
    cy.get("#rating").click();
    cy.wrap(setSortBy).should("have.been.calledWith", "rating");
  });
  it("should change view type", () => {
    const setViewType = cy.stub();
    cy.mount(
      <Router>
        <ToolBar setViewType={setViewType} />
      </Router>
    );
    cy.get("#cardButton").click();
    cy.wrap(setViewType).should("have.been.calledWith", "Card");
    cy.get("#listButton").click();
    cy.wrap(setViewType).should("have.been.calledWith", "List");
  });
});
