/// <reference types="Cypress" />
const BASE_DELAY = 1000;

context('Actions', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
      .wait(BASE_DELAY);
  });

  it('focus search input', () => {
    cy.get('#searchFilm').type('best films')
      .get('#btnSearch').click()
      .get('.film-description').should('be.not.visible')
      .wait(BASE_DELAY)
      .get('.film-gallery button:first').click()
      .get('.film-description').should('be.visible')
      .get('#closeDescription').click()
      .get('.film-description').should('be.not.visible')
      .get('.film-gallery button:first').click()
      .get('.film-description').should('be.visible')
      .reload()
      .get('.film-gallery').should('be.visible')
  })
});
