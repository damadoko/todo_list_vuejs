<template>
  <form @submit="addTask" class="add_task">
    <input type="text" v-model="title" placeholder="Add new todo ..." />
    <button class="add" type="submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addNew"]),
    addTask(e) {
      e.preventDefault();
      this.addNew(this.title);
      this.title = "";
    },
  },
};
</script>

<style scoped>
.add_task {
  display: flex;
  width: 100%;
}

.add_task input {
  padding: 0.75rem;
  border-radius: 50px;
  width: 90%;
  font-size: 1.3rem;
  color: #030303;
}

.add_task input:focus {
  outline: none;
}

.add {
  position: relative;
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 50%;
  background: #61c08d;
  transition: all 0.4s ease;
  font-size: 1.3rem;
  font-weight: bold;
}

.add::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 30%;
  height: 4px;
  width: 40%;
  background-color: #ffffff;
  transition: all 0.7s ease-in-out;
  transform: translateY(-2px);
}

.add:hover::before {
  transform: translateY(-2px) rotate(180deg);
}

.add::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 30%;
  height: 4px;
  width: 40%;
  background-color: #ffffff;
  transition: all 0.7s ease-in-out;
  transform: translateY(-2px) rotate(90deg);
}

.add:hover::after {
  transform: translateY(-2px) rotate(270deg);
}

.add:focus {
  outline: none;
}
</style>
