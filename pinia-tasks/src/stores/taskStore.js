import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: ()=> ({
    tasks: [
      {id: 1, title: 'test 1', isFav: false},
      {id: 2, title: 'test 2', isFav: true}
    ]}),
    getters: {
      favs() {
        return this.tasks.filter( t => t.isFav)
      },
      favsCount() {
        return this.tasks.reduce((p, c) => {
          return c.isFav ? p + 1 : p
        }, 0)
      },
      totalCount: (state) =>{
        return state.tasks.length
      }
    }
  
})