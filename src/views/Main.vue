<template>
    <section id="container">
      <h3>Todo List</h3>
      <div class="tab">
        <button type="button" class="btn btn-sm btn-primary">List</button>
        <button type="button" class="btn btn-sm btn-primary">Add New Todo</button>
      </div>
      <router-view />
      <Toast />
    </section>
  </template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Main',
        components: {
            // Button
        },
        setup() {
            return {};
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