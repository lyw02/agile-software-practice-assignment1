// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get("#emailField").type(email);
  cy.get("#passwordField").type(password);
  cy.get("#loginButton").click();
});

Cypress.Commands.add("newEmail", () => {
  let result = "";
  const characters = "0123456789";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  result += "@example.com";
  return result;
});

Cypress.Commands.add("getActorDetails", (actorId) => {
  return cy.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
      "TMDB_KEY"
    )}&language=en-US`,
  });
});

Cypress.Commands.add("getSearchResults", (searchText) => {
  return cy.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
      "TMDB_KEY"
    )}&language=en-US&query=${searchText}`,
  });
});

Cypress.Commands.add("getMovieList", () => {
  return cy.request({
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
      "TMDB_KEY"
    )}&language=en-US`,
  });
});

// import { mount } from 'cypress/react'
// import { MemoryRouter } from 'react-router-dom'

// Cypress.Commands.add('mount', (component, options = {}) => {
//   const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options

//   const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>

//   return mount(wrapped, mountOptions)
// })
