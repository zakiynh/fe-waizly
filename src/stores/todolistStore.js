import { defineStore } from "pinia";
import axios from "axios";

export const useTodoListStore = defineStore("todoList", {
    state: () => ({
        todoList: [],
    }),
    getters: {
        getTodoList: (state) => state.todoList,
    },
    actions: {
        async fetchTodoList() {
            const response = await axios.get("http://localhost:3000/todoList");
            console.log(response);
            this.todoList = response.data;
        },
    },
})