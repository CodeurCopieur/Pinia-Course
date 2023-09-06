import { defineStore } from "pinia";
import { computed, reactive } from 'vue'

export const  useTaskStore = defineStore('taskStore', () => {
  state: ()=> ({
    tasks: [
      {id: 1, title: 'test 1', isFav: false},
      {id: 2, title: 'test 2', isFav: true}
    ],
    name: 'CodeurCopieur'
  })
})