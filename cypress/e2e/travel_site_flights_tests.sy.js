///<reference types="cypress"/>
import { data } from "../fixtures/params.json"

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
        // cy.viewport(400, 300)
        // cy.screenshot('flight_page_screen')

        cy.get(origin).should("be.visible")
        cy.get(flightTab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flightTab).invoke('text').should('eq', 'flight')
    })

    it('populate Origin and Destination fields', () => {
        data.forEach(element => {
            cy.get(origin).clear().type(element.from).invoke("val").should("eq", element.from)
            cy.get(destination).clear().type(element.to).invoke("val").should("eq", element.to)
        })
    })

    // it('populate CheckIn and CheckOut dates', () => {
    //     cy.get(checkIn).type('10/10/2025').invoke('val').should('eq', '10/10/2025')
    //     cy.get(checkOut).clear().type('10/10/2026').invoke('val').should('eq', '10/10/2026')
    // })

    // it('check radio buttons', () => {
    //     cy.get(businessRadioBtn).click().should('be.checked')
    //     cy.get(economyRadioBtn).click().should('be.checked')
    //     cy.get(firstClassRadioBtn).click().should('be.checked')
    // })


})