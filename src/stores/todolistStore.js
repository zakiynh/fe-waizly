import { defineStore } from "pinia";
import axios from "axios";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
    todoListById: {},
    weatherApi: {},
  }),
  getters: {
    getTodoList: (state) => state.todoList,
    getTodoListById: (state) => state.todoListById,
    getCurrentWeather: (state) => state.weatherApi,
  },
  actions: {
    async fetchTodoList() {
      const response = await axios.get("http://localhost:3000/todoList");
      this.todoList = response.data;
    },
    async addTodoList(todo) {
      const response = await axios.post(
        "http://localhost:3000/todoList",
        JSON.stringify(todo, null, 2),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      this.todoList.push(response.data);
    },
    async deleteTodo(id) {
      await axios.delete(`http://localhost:3000/todoList/${id}`);
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    async updateTodoListStatus(id) {
      const todo = this.todoList.find((todo) => todo.id === id);
      todo.status = !todo.status;
      await axios.put(
        `http://localhost:3000/todoList/${id}`,
        JSON.stringify(todo, null, 2),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return Promise.resolve(todo.status);
    },
    async editTodoList(id, todo) {
      await axios.put(
        `http://localhost:3000/todoList/${id}`,
        JSON.stringify(todo, null, 2),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    async fetchTodoListById(id) {
      const response = await axios.get(`http://localhost:3000/todoList/${id}`);
      this.todoListById = response.data;
    },

    async getWeather() {
      // using api from https://openweathermap.org/current

      const apiKey = "c4659adb208fb6f1cc07de3b2dbc6976";
      const city = "Jakarta";
      const countryCode = "ID";

      const urlCurrentConditions = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(urlCurrentConditions);
      const data = await response.json();
      const temperature = data.main.temp;
      console.log(`Current temperature in ${city}: ${temperature}°C`);
      this.weatherApi = `Current temperature in ${city}: ${temperature}°C`;
    } catch (error) {
      console.error(error);
    }

    },
  },
});
