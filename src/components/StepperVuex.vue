<template>
  <div>
    <button @click="decrement">Decrement</button>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from "vue"
export default {
  setup() {
    const store = useStore()

    const count = computed(() => store.state.count)

    const increment = () => {
      store.dispatch('increment')
    }
    const decrement = () => {
      store.dispatch('decrement')
    }

    return {
      count,
      increment,
      decrement
    }
  }
}
</script>