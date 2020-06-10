<template>
  <div class="task" :class="{ hide: taskFilter() }">
    <div class="task_info" :class="{ done: todo.completed }">
      <i class="fas fa-check" @click="completeTask(todo.id)" />
      <input type="text" :value="todo.title" @input="updateTitle" />
    </div>
    <i
      class="fas fa-times"
      :class="{ delete: todo.completed }"
      @click="deleteTask(todo.id)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Task",
  props: ["todo"],
  computed: mapGetters(["curentFilter"]),
  methods: {
    ...mapActions(["completeTask", "deleteTask", "updateTask"]),
    updateTitle(e) {
      const data = {
        title: e.target.value,
        id: this.todo.id,
      };
      this.updateTask(data);
    },
    taskFilter() {
      if (
        (this.curentFilter === "done" && !this.todo.completed) ||
        (this.curentFilter === "remain" && this.todo.completed)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #d2d2d2;
  transition: all 0.4s ease-in-out;
  width: 100%;
  color: #61c08d;
}

.done {
  color: #d2d2d2;
}

.delete {
  display: inline-block !important;
}

.hide {
  display: none !important;
}

.task_info {
  display: flex;
  max-width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.task_info input {
  margin-left: 2rem;
  overflow: hidden;
  text-align: justify;
  border: 0;
  background: transparent;
  font-size: 1.25rem;
  color: inherit;
  width: 70vw;
}

.fa-times {
  color: #d2d2d2;
  margin-right: 0.5rem;
  transition: all 0.25s ease-in-out;
  display: none;
}
</style>
