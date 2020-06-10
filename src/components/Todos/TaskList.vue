<template>
  <div class="task_list">
    <Task v-for="todo in allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "./Task.vue";
export default {
  name: "TaskList",
  computed: mapGetters(["allTodos"]),
  components: {
    Task,
  },
};
</script>

<style scoped>
.task_list {
  max-height: 50vh;
  overflow-y: auto;
  background-color: transparent;
  border: 1px solid transparent;
  margin: 1rem 0;
  width: 100%;
}
</style>
