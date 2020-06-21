<template>
  <div id="class">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  computed: mapState({
    products: (state) => state.todos,
  }),
};
</script>
