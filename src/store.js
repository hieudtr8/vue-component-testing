import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    setCount(state, payload) {
      state.count = payload
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement({commit}) {
      commit('decrement')
    }
  },
  getters: {
    count: state => state.count
  }
})

export default store