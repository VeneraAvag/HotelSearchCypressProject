///<reference types="cypress"/>

describe('Verification of Cars tab functionality', () => {

    const carTab = '[data-cy="Car"]'
    const location = '[name="location"]'
    const dropOff = '[name="dropoff"]'
    const carGroupList = '[name="car-group"]'
    const driverAgeList = '[name="driver-age"]'

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get(carTab).click()
    })

    it('chooses location', () => {
        cy.get(location).type('Toronto').should('have.value', 'Toronto')
    })

    it('chooses dropOff name', () => {
        cy.get(dropOff).clear().type('06/08/2023').should('have.value', '06/08/2023')
    })

    it('chooses an option from Car Group', () => {
        cy.get(carGroupList).should('be.visible')
        cy.get(carGroupList).select('Group 1', { force: true })
        cy.get('[title="Group 1"]').should('be.visible')

        cy.get(carGroupList).should('be.visible')
        cy.get(carGroupList).select('Group 2', { force: true })
        cy.get('[title="Group 2"]').should('be.visible')

        cy.get(carGroupList).should('be.visible')
        cy.get(carGroupList).select('Group 3', { force: true })
        cy.get('[title="Group 3"]').should('be.visible')
    })

    it('chooses an option from Driver age', () => {
        cy.get(driverAgeList).should('be.visible')
        cy.get(driverAgeList).select('23', { force: true }).should('have.value', '23')
        cy.get(driverAgeList).select('24', { force: true }).should('have.value', '24')
        cy.get(driverAgeList).select('25', { force: true }).should('have.value', '25')
        cy.get(driverAgeList).select('26', { force: true }).should('have.value', '26')
    })
})