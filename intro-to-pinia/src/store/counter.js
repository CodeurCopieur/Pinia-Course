import { defineStore } from "pinia";
import { reactive } from 'vue'

export const  useCounterStore = defineStore('counter', () => {
  const state = reactive({count: 0});

  const increaseN = () => {
    state.count++
  }
  const decreaseN = () => {
    state.count--
  }

  return { state, increaseN, decreaseN };
})