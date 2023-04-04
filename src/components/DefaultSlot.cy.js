import DefaultSlot from './DefaultSlot.vue'

describe('<DefaultSlot />', () => {
  // Basic slot
  it('Basic slots', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(DefaultSlot, {
      slots: {
        default: 'Hello There'
      }
    })
    cy.get('div.content').should('have.text','Hello There')
  })
  // Named slot
  it('Named slots', () => {
    // see: https://on.cypress.io/mounting-vue
    const slots = {
      header: 'My header',
      footer: 'My footer',
    }
    cy.mount(DefaultSlot, {
      slots,
    })
    cy.get('header').should('have.text', 'My header')
    cy.get('footer').should('have.text', 'My footer')
  })
  
})