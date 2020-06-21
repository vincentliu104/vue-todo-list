export default {
  addTodo({ commit }, text) {
    commit('addTodo', {
      title: text,
      done: false,
    });
  },
  removeTodo({ commit }, todo) {
    commit('removeTodo', todo);
  },
};
