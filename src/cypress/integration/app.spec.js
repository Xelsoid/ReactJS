/// <reference types="Cypress" />
const BASE_DELAY = 1000;

context('Actions', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
      .wait(BASE_DELAY);
  });

  it('focus search input', () => {
    cy.get('#searchFilm').type('best films')
      .get('#Search').click()
      .get('.film-description').should('be.not.visible')
      .wait(BASE_DELAY)
      .get('.film-gallery button:first').click()
      .get('.film-description').should('be.visible')
  })
});
