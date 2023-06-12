// https://on.cypress.io/api

describe('Basic visuals', () => {
  it('Shows the title of the application', () => {
    cy.visit('/')
    cy.contains('De derde kamer.')
  })
})