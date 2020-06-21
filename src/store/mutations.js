export default {
  addTodo(state, todo) {
    console.log(todo);
    state.todos.push(todo);
  },
  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
};
