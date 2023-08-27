<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

  const store = useCounterStore();
  const { state } = storeToRefs(store);
  const { increaseN, decreaseN } = store;
</script>

<template>
  <main>
    <h1>{{ state.count }}</h1>
    <div class="wrap">
      <button @click="increaseN">+</button>
      <button @click="decreaseN">-</button>
    </div>
  </main>
</template>
