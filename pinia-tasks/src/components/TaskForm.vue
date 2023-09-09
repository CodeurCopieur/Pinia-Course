<script setup>
  /* imports */
  import { reactive } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import { useTaskStore } from '../stores/taskStore'


  const taskStore  = useTaskStore();


  const state = reactive({
    newTask: ''
  });

  const handleSubmit = () => {

    console.log('ou');
    if (state.newTask.length > 0) {
      taskStore.addTask({
        id: uuidv4(),
        title: state.newTask,
        isFav: false
      })

      state.newTask = ''
    }
  };
</script>

<template>
  <form 
    @submit.prevent="handleSubmit"
    class="w-full max-w-md mx-auto">
    <div class="flex items-center border-b-indigo-500  py-2">
      <input
        v-model="state.newTask"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text" placeholder="Ajouter Todo" aria-label="Full name">
      <button
        :disabled="!state.newTask"
        :class="state.newTask ? 'cursor-pointer bg-black' : 'bg-gray opacity-50'"
        class="flex-no-shrin px-6 py-2 border-1 text-white border-none hover:text-white">
        Sign Up
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>