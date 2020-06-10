<template>
  <div class="todos">
    <AddTask />
    <FilterTask />
    <TaskList />
    <TaskRecords />
  </div>
</template>

<script>
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import TaskRecords from "./TaskRecords";

export default {
  name: "Todos",
  components: {
    TaskList,
    AddTask,
    FilterTask,
    TaskRecords,
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 85vh;
  margin: 0 0.5rem;
  position: relative;
}
</style>
