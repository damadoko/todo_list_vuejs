<template>
  <header>
    <h3>Todo List</h3>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  text-transform: uppercase;
  margin-bottom: 2rem;
  border-bottom: 2px solid #61c08d;
  transition: all 0.5s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header::hover {
  transform: scale(1.1);
  border-color: #030303;
}

h3 {
  padding-left: 7rem;
}
</style>
