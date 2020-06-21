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
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },
  mutations: {
    addTodo(state, todo) {
      console.log(todo);
      state.todos.push(todo);
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
  },
  actions: {
    addTodo({ commit }, text) {
      commit('addTodo', {
        text,
        done: false,
      });
    },
  },
  modules: {
  },
});
