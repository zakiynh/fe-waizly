<template>
  <section id="container-card-input-todo">
    <div class="wrapper">
      <div class="title">
        <label for="">Title</label>
        <input type="text" v-model="titleInput" />
      </div>
      <div class="description">
        <label for="">Description</label>
        <textarea
          v-model="descriptionInput"
          autoResize
          rows="5"
          cols="30"
        ></textarea>
      </div>
      <button @click="submitButton" class="btn btn-primary">
        {{ buttonLabel }}
      </button>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTodoListStore } from "../stores/todolistStore";
import Swal from 'sweetalert2'
// import { Actions } from "../store/enums.";
export default defineComponent({
  setup() {
    const titleInput = ref("");
    const descriptionInput = ref("");
    const route = useRoute();
    const router = useRouter();
    const buttonLabel = ref("Add New Todo");
    const todoListStore = useTodoListStore();
    const todoList = computed(() => todoListStore.todoList);
    let todolistByid = computed(() => todoListStore.getTodoListById);
    onMounted(async () => {
      todoListStore.fetchTodoList();
      if (route.params.id) {
        const todo = await todoListStore.fetchTodoListById(route.params.id);
        console.log("todo: ", todolistByid.value);
        titleInput.value = todolistByid.value.title;
        descriptionInput.value = todolistByid.value.description;
        buttonLabel.value = "Edit Todo";
      }
    });

    const submitButton = () => {
      const data = {
        title: titleInput.value,
        description: descriptionInput.value,
        status: false,
        id: todoList.value.length + 1,
      };
      if (buttonLabel.value === "Add New Todo") {
        todoListStore.addTodoList(data);
      } else {
        todoListStore.editTodoList(route.params.id, data);
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      todoListStore.fetchTodoList();
      router.push({ path: "/" });
    };

    return {
      titleInput,
      descriptionInput,
      buttonLabel,
      submitButton,
      buttonLabel,
    };
  },
});
</script>

<style lang="scss">
#container-card-input-todo {
  .wrapper {
    width: 70vw;
    // height: 150px;
    background-color: #526d82;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
    .title {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .description {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
