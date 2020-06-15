<template>
  <div id="class">
    <font color="red">{{ post.title }}</font>
    <button v-on:click="$emit('enlarge-text', 0.1)">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title', 'post'],
};
</script>
