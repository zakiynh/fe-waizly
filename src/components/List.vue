<template>
  <!-- <div v-if="todoList.length === 0" class="empty-todo">
      <h4>No to-do list</h4>
      <img src="../assets/no-task.png" alt="" />
    </div> -->
  <div class="content-wrapper">
    <div
      v-for="item in todoList"
      class="card"
      :class="{ 'todo-done': item.status, 'todo-unfinish': !item.status }"
    >
      <div class="title">{{ item.title }}</div>
      <div class="action">
        <button type="button" class="btn btn-outline-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            ></path>
          </svg>
        </button>
        <!-- <Button
            icon="pi pi-pencil"
            aria-label="Submit"
            severity="warning"
            rounded
            raised
            @click="pushToEdit(item.id)"
          /> -->
        <button type="button" class="btn btn-outline-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check2-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"
            ></path>
            <path
              d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"
            ></path>
          </svg>
        </button>
        <!-- <Button
            :icon="!item.status ? 'pi pi-check' : 'pi pi-times'"
            aria-label="Submit"
            severity="secondary"
            rounded
            raised
            @click="updateStatusById(item.id, !item.status)"
          /> -->

        <button type="button" class="btn btn-outline-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
            ></path>
          </svg>
        </button>

        <!-- <Button
          icon="pi pi-trash"
          aria-label="Submit"
          severity="danger"
          rounded
          raised
          @click="deleteTodoById(item.id)"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useTodoListStore } from "../stores/todolistStore";

export default defineComponent({
  setup() {
    const router = useRouter();
    const todoListStore = useTodoListStore();
    const todoList = computed(() => todoListStore.todoList);
    onMounted(() => {
      todoListStore.fetchTodoList();
    });
    return {
      todoList,
    };
  },
});
</script>

<style lang="scss" scoped>
.empty-todo {
  width: 70vw;
  background-color: #526d82;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 16px;
  h4 {
    font-size: larger;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
.content-wrapper {
  // height: 100vh;
  width: 70vw;
  background-color: #526d82;
  border-radius: 12px;
  padding: 16px;
  gap: 28px;
  display: flex;
  flex-direction: column;
  .card {
    background-color: #9db2bf;
    width: 100%;
    height: 150px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    .title {
      font-size: 36px;
    }
    .action {
      display: flex;
      flex-direction: row;
      gap: 12px;
      i {
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
  .todo-done {
    box-shadow: 0 0px 5px 4px rgb(43, 206, 135);
  }
  .todo-unfinish {
    box-shadow: 0 0px 5px 4px #ea4f30;
  }
}
</style>
