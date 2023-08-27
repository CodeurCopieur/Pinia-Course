import { defineStore } from "pinia";
import { computed, reactive } from 'vue'

export const  useCounterStore = defineStore('counter', () => {
  const state = reactive({count: 0});

  const countDoubled = computed(()=> {
    return state.count * 2;
  })

  const increaseN = () => {
    state.count++
  }
  const decreaseN = () => {
    state.count--
  }

  return { state, countDoubled, increaseN, decreaseN };
})