<template>
    <section id="container">
      <div style="display: flex; flex-direction: row; justify-content: end; color: aliceblue; width: 72%;">
        <h5>
          {{ weather }}
        </h5>
      </div>
      <h3>Todo List</h3>
      <div class="tab">
        <button type="button" class="btn btn-sm btn-primary" @click="pushToList">List</button>
        <button type="button" class="btn btn-sm btn-primary" @click="pushToAddTodo">Add New Todo</button>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: end; color: aliceblue; width: 72%;">
        <div class="input-group rounded" style="display: flex; flex-direction: row; justify-content: end; width: 25%;">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
        </div>
      </div>
      <router-view />
    </section>
  </template>

<script>
    import { defineComponent, onMounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useTodoListStore } from '../stores/todolistStore';
    
    export default defineComponent({
        name: 'Main',
        components: {
            // Button
        },
        setup() {
          const router = useRouter();
          const todoListStore = useTodoListStore();
          const weather = computed (() => todoListStore.getCurrentWeather);
          onMounted(() => {
            todoListStore.getWeather();
          });
          const pushToAddTodo = () => {
            router.push({ name: "Add" });
          };
          const pushToList = () => {
            router.push({ name: "List" });
          };
            return {pushToAddTodo, pushToList, weather};
        },
    });

    

</script>

<style lang="scss" scoped>
#container {
  background-color: #27374d;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 24px;
  font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  .logout {
    width: 100vw;
    display: flex;
    justify-content: start;
    color: white;
    margin-left: 16px;
    cursor: pointer;
  }
  h3 {
    font-size: 64px;
    color: white;
    font-weight: 500;
  }
  .tab {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>