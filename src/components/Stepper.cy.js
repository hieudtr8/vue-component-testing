import Stepper from './Stepper.vue';

describe('<Stepper />', () => {
  // Test default menu
  it('should have deftault 0', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper);
    cy.get('[data-cy=counter]').should('have.text', 0);
  });
  // Test pass prop
  it('should have deftault 100', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper, { props: { initial: 100 } });
    cy.get('[data-cy=counter]').should('have.text', 100);
  });
  // Test event
  it('when increment, counter increment', () => {
    cy.mount(Stepper);
    cy.get('[data-cy=increment').click();
    cy.get('[data-cy=counter').should('have.text', 1);
  });
  it('when increment, counter decrement', () => {
    cy.mount(Stepper);
    cy.get('[data-cy=decrement').click();
    cy.get('[data-cy=counter').should('have.text', -1);
  });
  // Test event handlers
  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
    // cy.mount(Stepper, { props: { initial: 100 } });
    // cy.get('[data-cy=increment]').click();
    // cy.get('@vue').should(({ wrapper }) => {
    //   expect(wrapper.emitted('change')).to.have.length;
    //   expect(wrapper.emitted('change')[0][0]).to.equal('101');
    // });
  });
});
