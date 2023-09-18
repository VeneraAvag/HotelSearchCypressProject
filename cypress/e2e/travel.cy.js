///<reference types="cypress" />


describe('The sanity test suit for travel site', () => {
  it('navigate to the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('verify tabs of the page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy="Hotels"]').should("be.visible")
    cy.get('[data-cy="Car"]').should("be.visible")
    cy.get('[data-cy="Flight"]').should("be.visible")
  })

  it('verify text of tabs on the page', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
    cy.get('[data-cy="Car"]').should("have.text", "car")
    cy.get('[data-cy="Flight"]').should("have.text", "flight")
  })

  it('verify elements on Hotel tabs', () => {
    cy.visit('http://localhost:3000')

    // cy.get('[data-cy="flight_chk"]').should("be.visible")
    cy.get('[class="btn-submit"]').should("be.visible")
    cy.get('[data-cy="cars_chk"]').should("be.visible")
    cy.contains('search').should("be.visible")
  })
})