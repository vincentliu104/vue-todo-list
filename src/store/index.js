import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: 'do1', done: false },
      { id: 2, title: 'do1', done: false },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
