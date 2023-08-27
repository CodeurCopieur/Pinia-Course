<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

  const store = useCounterStore();
  const { state, countDoubled } = storeToRefs(store);
  const { increaseN, decreaseN } = store;
</script>

<template>
  <main>
    <h1>{{ state.count }}</h1>
    <div class="wrap">
      <button @click="increaseN">+</button>
      <button @click="decreaseN">-</button>
    </div>
    <hr>
    <div class="doubled">
      <h2>Nombre doublé :</h2>
      <p>{{ countDoubled }}</p>
    </div>
    <hr>
    <input type="number" v-model="state.count">
  </main>
</template>
