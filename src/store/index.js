import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { title: 'do1', done: true },
      { title: 'do1', done: false },
    ],
    count: 2,
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    allTodosCount: (state) => state.todos.length,
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },
  mutations,
  actions,
  modules: {
  },
});
