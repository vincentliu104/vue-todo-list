<template>
  <div id="class">
    <h2><a href="https://vuejs.org/v2/guide/conditional.html#v-if">v-if</a></h2>
    <p>一次很多個可以用 tempalte 包起來</p>
    <p>v-else 一定要在 v-if 或 v-else-if 後方</p>
    <p>v-else-if 一定要在 v-if 或 v-else-if 後方</p>
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    <h2><a href="https://vuejs.org/v2/guide/conditional.html#v-show">v-show</a></h2>
    <p>永遠被繪製及保留在 DOM tree，不支援 template, v-else</p>
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'ConditionalRendering',
};
</script>
