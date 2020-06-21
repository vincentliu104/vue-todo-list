import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: 'do1', done: true },
      { id: 2, title: 'do1', done: false },
    ],
    count: 2,
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
