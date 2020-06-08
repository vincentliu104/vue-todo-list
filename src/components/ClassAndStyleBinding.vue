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
    <h3>Array Syntax</h3>
    <div v-bind:class="[activeClass, errorClass]">list of classes</div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">toggle</div>
    <div v-bind:class="[{ active: isActive }, errorClass]">toggle - object</div>
    <h3>With Components</h3>
    <p>todo</p>
    <h2><a href="https://vuejs.org/v2/guide/class-and-style.html#Binding-Inline-Styles">Binding Inline Styles</a></h2>
    <h3>Object Syntax</h3>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      v-bind:style - inline
    </div>
    <div v-bind:style="styleObject">v-bind:style - object</div>
    <h3>Array Syntax</h3>
    <div v-bind:style="[baseStyles, overridingStyles]">array</div>
    <h3>Auto-prefixing</h3>
    <p>todo</p>
    <h3>Multiple Values</h3>
    <p>todo</p>
  </div>
</template>

<style lang="stylus">
.active {
  background-color: yellow;
}
.text-danger {
  color: red;
}
</style>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'ClassAndStyleBinding',
  data() {
    return {
      // classes
      isActive: true,
      hasError: false,
      error: null,
      classObject: {
        active: true,
        'text-danger': false,
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      // inline
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px',
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
