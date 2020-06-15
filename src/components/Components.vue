<template>
  <div id="class">
    <h2>Component</h2>
    <ButtonCounter />
    <h3>Reusing Components</h3>
    <p>component 裡的 data 必須是 function，讓所有 instance 獨立使用</p>
    <div id="components-demo">
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
    </div>
    <h3>Organizing Components</h3>
    <p>global or local</p>
    <h3>Passing Data to Child Components with Props</h3>
    {{ title }}
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-bind:postFontSize="postFontSize"
        v-on:enlarge-text="onEnlargeText"
      ></BlogPost>
    </div>
  </div>
</template>

<script>
import ButtonCounter from './button-counter.vue';
import BlogPost from './blog-post.vue';

export default {
  name: 'Components',
  props: ['title'],
  components: {
    ButtonCounter,
    BlogPost,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'blablabla' },
        { id: 2, title: 'Blogging with Vue', content: 'blablabla' },
        { id: 3, title: 'Why Vue is so fun', content: 'blablabla' },
      ],
      postFontSize: 1,
    };
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      console.log(`enlargeAmount: ${enlargeAmount}`);

      this.postFontSize += enlargeAmount;
    },
  },
};
</script>
