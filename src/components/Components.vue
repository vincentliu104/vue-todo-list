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
    <h3>Listening to Child Components Events</h3>
    <h4>Emitting a Value With an Event</h4>
    <p>用 <a href="https://vuejs.org/v2/api/#vm-emit">$emit</a> 送出 event value</p>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-bind:postFontSize="postFontSize"
        v-on:enlarge-text="onEnlargeText"
        v-on:reduce-text="onReduceText"
      ></BlogPost>
    </div>
    <h4>Using v-model on Components</h4>
    <p>input v-model = v-bind + v-on($event.target.value)</p>
    <p>component v-model = v-bind + v-on($event)</p>
    <h3>Content Distribution with Slots</h3>
    <p>把內容傳給 component，用 <a href="https://vuejs.org/v2/guide/components-slots.html">Slot</a>顯示</p>
    <alert-box>
      Something bad happened.
    </alert-box>
    <h3>Dynamic Components</h3>
    <p>v-bind:is + component 名稱或component’s options object</p>
  </div>
</template>

<script>
import ButtonCounter from './button-counter.vue';
import AlertBox from './alert-box.vue';
import BlogPost from './blog-post.vue';

export default {
  name: 'Components',
  props: ['title'],
  components: {
    ButtonCounter,
    BlogPost,
    AlertBox,
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
    onReduceText(reduceAmount) {
      console.log(`reduceAmount: ${reduceAmount}`);

      this.postFontSize -= reduceAmount;
    },
  },
};
</script>
