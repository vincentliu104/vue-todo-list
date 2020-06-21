<template>
  <div id="class">
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
  // computed: mapState({ // vuex binding
  //   todos: (state) => state.todos,
  //   countAlias: 'count', // countAlias: (state) => state.count
  // }),
  // computed: mapState([
  // // 映射 this.count 为 store.state.count
  //   'todos',
  //   'count',
  // ]),
};
</script>
