<template>
  <div id="class">
    <font color="red">{{ post.title }}</font>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['title', 'post'],
};
</script>
