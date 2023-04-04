import App from './App.vue'
describe('Test Router', () => {
  it('renders', () => {
    cy.mount(App)
  })
  it('nagivate to About then render About Page', () => {
    cy.mount(App)
    cy.get('a').contains('About').click()
    cy.get('h1').should('contain', 'About us')
  })
  it('nagivate to Stepper then render Stepper Page', () => {
    cy.mount(App)
    cy.get('a').contains('Stepper').click()
    cy.get('[data-cy="counter"]').should('have.text',0)
  })
})