<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

  const store = useCounterStore();
  const { count } = storeToRefs(store);
</script>

<template>
  <main>
    <h1>{{ count }}</h1>
  </main>
</template>
