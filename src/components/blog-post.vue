<template>
  <div id="class">
    <font color="red">{{ post.title }} font size {{ postFontSize }}</font>
    <button v-on:click="$emit('enlarge-text', 0.2)">
      Enlarge text
    </button>
    <button v-on:click="$emit('reduce-text', 0.2)">
      Reduce text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title', 'post', 'postFontSize'],
};
</script>
