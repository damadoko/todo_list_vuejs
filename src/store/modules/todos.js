import { dataMockUp } from "./dataMockup";

const initdata = JSON.parse(localStorage.getItem("DATA_LOCAL")) || dataMockUp;

const state = initdata;

const getters = {
  allTodos: (state) => state.todos,
  curentFilter: (state) => state.filter,
};

const actions = {
  completeTask({ commit }, id) {
    commit("setComplete", id);
  },
  deleteTask({ commit }, id) {
    commit("deleteTodo", id);
  },
  updateTask({ commit }, data) {
    commit("updateTodo", data);
  },
  addNew({ commit }, title) {
    commit("newTodo", title);
  },
  clearDonetask({ commit }) {
    commit("clear");
  },
  changeFilter({ commit }, status) {
    commit("filterTask", status);
  },
};

const mutations = {
  setComplete: (state, id) => {
    const index = state.todos.findIndex((item) => item.id === id);
    state.todos[index].completed = !state.todos[index].completed;
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter((item) => item.id !== id);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  updateTodo: (state, data) => {
    const index = state.todos.findIndex((item) => item.id === data.id);
    state.todos[index].title = data.title;
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  newTodo: (state, title) => {
    const newTodo = {
      id: state.todos[0].id + 1,
      title: title,
      completed: false,
    };
    state.todos.unshift(newTodo);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  clear: (state) => {
    state.todos = state.todos.filter((item) => !item.completed);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
  filterTask: (state, status) => {
    state.filter = status;
    // localStorage.setItem("DATA_LOCAL", JSON.stringify(state));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
