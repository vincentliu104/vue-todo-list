<template>
  <div id="class">
    {{ $route.params.id }}
    {{ todo.title }}
    {{ todo.done }}
    <button v-on:click="backtoList()">backtoList</button>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',
  computed: {
    todo() {
      return this.$store.getters.getTodoById(this.$route.params.id);
    },
  },
  methods: {
    backtoList() {
      this.$router.push('/TodoList');
    },
  },
};
</script>
