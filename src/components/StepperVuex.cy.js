import StepperVuex from './StepperVuex.vue'
import { createStore } from "vuex"
describe('<StepperVuex />', () => {
  it('renders', () => {
    const store = createStore();
    cy.mount(StepperVuex, {store})
  })
  it('renders the count from the store', () => {
    const store = createStore();
    cy.mount(StepperVuex, {
      global: {
        plugins: [store],
        async beforeCreate() {
          await store.restored
        }
      }
    })
  })
  it('set count', () => {
    const store = createStore();
    cy.mount(StepperVuex, {store})
    cy.get('button').contains('Increment').click()
  })
})