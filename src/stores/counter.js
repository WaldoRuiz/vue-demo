import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    history: [],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
      this.history.push(`+1 → ${this.count}`)
    },
    decrement() {
      this.count--
      this.history.push(`-1 → ${this.count}`)
    },
    reset() {
      this.count = 0
      this.history = []
    },
  },
})
