<script setup>

  /* imports */
  import { Icon } from '@iconify/vue'

  defineProps({
    task: {
      type: Object,
      default: ()=> {}
    },
  });
</script>

<template>
  <div 
    class="flex items-center py-4 px-6 bg-weather-secondary rounded-md shadow-md cursor-pointer text-gray-500">
    <div class="flex flex-col flex-1">
      <h2 class="text-3xl my-3"> {{ task.title }}</h2>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2">
        <span class="text-xs">
          <Icon icon="icon-park-outline:like" class="text-3xl" />
        </span>
        <span class="text-xs">
          <Icon icon="lucide:trash-2" class="text-3xl" />
        </span>
      </div>
    </div>
  </div>
</template>