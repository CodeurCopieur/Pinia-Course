<script setup>

  /* imports */
  import { useTaskStore } from './stores/taskStore'
  import TaskDetails from './components/TaskDetails.vue'

  const taskStore  = useTaskStore();
</script>

<template>
  <main>

    <!-- heading -->
    <header class="bg-gray-300 pt-5 text-center flex justify-center items-center">
      <img class="origin-top-left rotate-12" style="max-width: 60px;" src="./assets/pinia-logo.svg" alt="">
      <h1 class="m-0 pt-6 ml-3.5 text-gray-500" style="rotate: 2deg;">Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list container max-w-3xl mx-auto text-white px-4">
      <div 
        v-for="(task, i) in taskStore.tasks" 
        :key="task.id"
        :class="{'mb-4': i !== taskStore.tasks.length - 1}">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<style>
  body {
    margin: 0;
    font-family: 'Poppins';
  }
</style>