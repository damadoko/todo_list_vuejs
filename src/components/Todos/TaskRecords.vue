<template>
  <div class="records">
    <div class="wrapper">
      <div class="record">
        <p class="num">{{ allTodos.length }}</p>
        <p>Total tasks</p>
      </div>
      <div cclass="record">
        <p class="num">
          {{ allTodos.filter((item) => item.completed).length }}
        </p>
        <p>Done tasks</p>
      </div>
      <div class="record">
        <p class="num">
          {{ allTodos.filter((item) => !item.completed).length }}
        </p>
        <p>Remain tasks</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TaskRecords",
  computed: mapGetters(["allTodos"]),
  data() {
    return {
      // all: this.allTodos,
      // done: this.allTodos.filter((item) => item.completed).length,
    };
  },
};
</script>

<style scoped>
.records {
  position: fixed;
  bottom: 5vh;
  margin-top: 1rem;
}

.wrapper {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.record {
  align-items: center;
  margin: 0.5rem 0;
}

.num {
  text-align: center;
  border: none;
  background: transparent;
  font-size: 2rem;
  font-weight: 900;
}
</style>
