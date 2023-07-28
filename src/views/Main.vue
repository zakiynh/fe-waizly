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
      
      <router-view />
    </section>
  </template>

<script>
    import { defineComponent, onMounted, computed, ref } from 'vue';
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