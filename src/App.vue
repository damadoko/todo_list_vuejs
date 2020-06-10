<template>
  <div id="app">
    <Header />
    <Todos />
  </div>
</template>

<script>
import Header from "./components/Layout/Header.vue";
import Todos from "./components/Todos/Todos.vue";

export default {
  name: "App",
  components: {
    Header,
    Todos,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
