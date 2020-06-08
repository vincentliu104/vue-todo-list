<template>
  <div id="class">
    <font color="red">v-bind</font> 與 class, style 結合
    <h2><a href="https://vuejs.org/v2/guide/class-and-style.html#Binding-HTML-Classes">Binding HTML Classes</a></h2>
    <h3>Object Syntax</h3>
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >ex1 - inline active {{ String(isActive) }}, hasError {{ String(hasError) }}</div>
    <div v-bind:class="classObject">ex2 - object {{ classObject.active }}</div>
    <div v-bind:class="classObject2">ex3 - computed property</div>
    <h2><a href="https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles">Binding Inline Styles</a></h2>
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'ClassAndStyleBinding',
  data() {
    return {
      isActive: true,
      hasError: false,
      error: null,
      classObject: {
        active: true,
        'text-danger': false,
      },
    };
  },
  computed: {
    classObject2() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      };
    },
  },
};
</script>
