<template>
  <div id="class">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  // computed: {
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  // },
  computed: mapState({ // vuex binding
    todos: (state) => state.todos,
    countAlias: 'count', // countAlias: (state) => state.count
  }),
};
</script>
