export default {
  addTodo({ commit }, text) {
    commit('addTodo', {
      id: Date.now(),
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
