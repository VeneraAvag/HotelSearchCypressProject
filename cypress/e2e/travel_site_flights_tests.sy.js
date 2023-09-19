///<reference types="cypress"/>

describe('Flights functionality verification', () => {

    const flightTab = '[data-cy="Flight"]'
    const origin = '[placeholder="City or airport"][name="origin"]'
    const destination = '[name="destination"]'
    const checkIn = '[id="input-start-2"]'
    const checkOut = '[id="input-end-2"]'
    const businessRadioBtn = '[id="business"]'
    const economyRadioBtn = '[id="economy"]'
    const firstClassRadioBtn = '[id="f_class"]'


    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get(flightTab).click()
    })

    it('navigate to the Flights tab', () => {
        cy.get(origin).should("be.visible")
        cy.get(flightTab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flightTab).invoke('text').should('eq', 'flight')
    })

    it('populate Origin and Destination fields', () => {
        cy.get(origin).type('Paris').invoke("val").should("eq", "Paris")
        // cy.get(origin).type('Paris').should('have.value', 'Paris')
        cy.get(destination).type('London').invoke("val").should("eq", "London")
        // cy.get(destination).type('London').should('have.value', "London")
    })

    it('populate CheckIn and CheckOut dates', () => {
        cy.get(checkIn).type('10/10/2025').invoke('val').should('eq', '10/10/2025')
        cy.get(checkOut).clear().type('10/10/2026').invoke('val').should('eq', '10/10/2026')
    })

    it('check radio buttons', () => {
        cy.get(businessRadioBtn).click().should('be.checked')
        cy.get(economyRadioBtn).click().should('be.checked')
        cy.get(firstClassRadioBtn).click().should('be.checked')
    })


})