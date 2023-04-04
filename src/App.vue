<template>
  <div>
    <h1>Vue Cypress Component Testing</h1>
    <nav>
      <router-link to="/default-slot">Default Slot</router-link> |
      <router-link to="/stepper">Stepper</router-link> |
      <router-link to="/about">About</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>