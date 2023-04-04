// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { createMemoryHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import { routes } from '../../src/routes';
import { createStore } from "vuex";
// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue';

// Cypress.Commands.add('mount', mount)
// import { mount } from 'cypress/vue'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {};
  options.global.stubs = options.global.stubs || {}
  options.global.stubs['transition'] = false
  options.global.components = options.global.components || {}
  options.global.plugins = options.global.plugins || [];

  const { store = createStore(), ...mountOptions } = options

  // create router if one is not provided
  if (!options.router) {
    options.router = createRouter({
      routes: routes,
      history: createMemoryHistory(),
    });
  }

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(store)
      app.use(options.router);
    },
  });

  return mount(component, options);
});

// Custom specific plugin add for mount

// Cypress.Commands.add('mount', (component, ...args) => {
//   args.global = args.global || {}
//   args.global.plugins = args.global.plugins || []
//   args.global.plugins.push(new Vuetify(vuetifyOptions))

//   return mount(() => {
//     return h(VApp, {}, component)
//   }, ...args)
// })
// Example use:
// cy.mount(MyComponent)

// Config vue router to Cypress

// Cypress.Commands.add('mount', (component, options = {}) => {
//   // Setup options object
//   options.global = options.global || {}
//   options.global.plugins = options.global.plugins || []

//   // create router if one is not provided
//   if (!options.router) {
//     options.router = createRouter({
//       routes: routes,
//       history: createMemoryHistory(),
//     })
//   }

//   // Add router plugin
//   options.global.plugins.push({
//     install(app) {
//       app.use(options.router)
//     },
//   })
//   return mount(component, options)
// })

// Config global components

// import { mount } from 'cypress/vue'
// import Button from '../../src/components/Button.vue'

// Cypress.Commands.add('mount', (component, options = {}) => {
//   // Setup options object
//   options.global = options.global || {}
//   options.global.components = options.global.components || {}

//   // Register global components
//   options.global.components['Button'] = Button

//   return mount(component, options)
// })