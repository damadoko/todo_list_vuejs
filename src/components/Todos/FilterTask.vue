<template>
  <div class="filter">
    <button class="clear" type="button" @click="clearDonetask">
      Clear Done Tasks
    </button>
    <div>
      <label>Filter by:</label>
      <button class="filter_btn" type="button" @click="changeFilter('all')">
        All
      </button>
      <button class="filter_btn" type="button" @click="changeFilter('done')">
        Done
      </button>
      <button class="filter_btn" type="button" @click="changeFilter('remain')">
        Remain
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTask",
  methods: {
    ...mapActions(["clearDonetask", "changeFilter"]),
  },
};
</script>

<style scoped>
.filter {
  width: 100%;
  margin-top: 1rem;
  display: flex !important;
  text-align: right;
  justify-content: space-between;
}

.filter_btn {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #61c08d;
  display: inline-block;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 5px;
}

.filter_btn:focus {
  outline: none;
}

.disabled {
  background-color: #d2d2d2 !important;
}

.current {
  background-color: #629b7d;
}

.clear {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #61c08d;
  color: #ffffff;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
}

.clear:hover {
  transform: scale(1.1);
}

.clear:focus {
  outline: none;
}
</style>
