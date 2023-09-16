<script setup>

  /* imports */
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useTaskStore } from './stores/taskStore'

  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'

  const taskStore  = useTaskStore();

  const { tasks, loading, favs, totalCount, favsCount } = storeToRefs(taskStore)

  // fetch tasks
  taskStore.getTasks()

  const filter = ref('all');
</script>

<template>
  <main>

    <!-- heading -->
    <header class="bg-gray-300 pt-5 mb-5 text-center flex justify-center items-center">
      <img class="origin-top-left rotate-12" style="max-width: 60px;" src="./assets/pinia-logo.svg" alt="">
      <h1 class="m-0 pt-6 ml-3.5 text-gray-500" style="rotate: 2deg;">Pinia Tasks</h1>
    </header>

    <!-- new tak form  -->
    <div class="new-task-form">
      <TaskForm/>
    </div>

    <!-- filter -->
    <nav class="flex justify-center h-14 mb-10">
      <button 
        @click="filter = 'all'"
        :class="filter === 'all' ? 'border-b-indigo-500' : 'border-b-transparent'" 
        class="cursor-pointer border-t-0 border-t-0 border-r-0 border-l-0 bg-transparent">Toutes les tâches</button>
      <button 
        @click="filter = 'favs'"
        :class="filter === 'favs' ? 'border-b-indigo-500' : 'border-b-transparent'"
        class="ml-4 cursor-pointer border-t-0 border-r-0 border-l-0 bg-transparent">Les tâches favorites</button>
    </nav>

    <!-- loading -->
    <div class="loading border border-indigo-500 max-w-2xl bg-indigo-400 p-1.5 text-center my-8 mx-auto text-white" v-if="loading">Loading tâches...</div>

    <!-- task list -->
    <div
      v-if="filter === 'all'" 
      class="task-list container max-w-3xl mx-auto text-white px-4 mb-5">
      <p class="text-center text-gray-500">Vous avez {{ totalCount }} tâche{{ totalCount > 1 ? 's' : ''  }}</p>
      <div 
        v-for="(task, i) in tasks" 
        :key="task.id"
        :class="{'mb-4': i !== tasks.length - 1}">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div 
      v-if="filter === 'favs'"
      class="task-list container max-w-3xl mx-auto text-white px-4">
      <p class="text-center text-gray-500">Vous avez {{ favsCount }} tâche{{ favsCount > 1 ? 's' : ''  }} favorite</p>
      <div 
        v-for="(task, i) in favs" 
        :key="task.id"
        :class="{'mb-4': i !== favs.length - 1}">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <button @click="$reset">Reset state</button>
  </main>
</template>

<style>
  body {
    margin: 0;
    font-family: 'Poppins';
  }
</style>