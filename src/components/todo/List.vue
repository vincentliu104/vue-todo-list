<template>
  <div id="class">
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>
