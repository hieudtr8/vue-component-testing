import { createRouter, createWebHistory } from 'vue-router'
// import App from './App.vue'
import DefaultSlot from './components/DefaultSlot.vue'
import Stepper from './components/Stepper.vue'
import StepperVuex from './components/StepperVuex.vue'
import About from './components/About.vue'
export const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   // component: App
  // },
  {
    path: '/default-slot',
    name: 'DefaultSlot',
    component: DefaultSlot
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: Stepper
  },
  {
    path: '/stepper-vuex',
    name: 'StepperVuex',
    component: StepperVuex
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router