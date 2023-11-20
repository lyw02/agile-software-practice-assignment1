export const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

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
