import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: Date.now(), title: '包粽子', done: false },
      { id: Date.now() + 1, title: '喝雄黃', done: false },
      { id: Date.now() + 2, title: '划龍舟', done: false },
      { id: Date.now() + 3, title: '掛艾草', done: false },
    ],
    count: 2,
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    allTodosCount: (state) => state.todos.length,
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    getTodoById: (state) => (id) => state.todos.find((todo) => String(todo.id) === String(id)),
  },
  mutations,
  actions,
  modules: {
  },
});
