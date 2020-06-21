export default {
  addTodo({ commit }, text) {
    commit('addTodo', {
      title: text,
      done: false,
    });
  },
  toggleTodo({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done });
  },
  removeTodo({ commit }, todo) {
    commit('removeTodo', todo);
  },
};
