<template>
  <div id="template">
    <span v-bind:title="message">
      滑鼠在這裡停幾秒
    </span>
    <hr>
    <h2>Template Syntax</h2>
    <h3>Interpolations</h3>
    <h4>Text</h4>
    <!-- Mustache syntax (double curly braces), replace/update by value of message -->
    {{ message }}
    <span v-once>This will never change: {{ message }}</span>
    <hr>
    <h4>Raw HTML</h4>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <hr>
    <h4>Attributes</h4>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <hr>
    <h4>Using JavaScript Expressions</h4>
    <br>
    <div>
      {{ isButtonDisabled + 1 }}<br>
      isButtonDisabled: {{ isButtonDisabled ? 'true' : 'false' }}<br>

      <div v-bind:id="'list-' + dynamicId">
        {{ message.split('').reverse().join('') }}<br>
      </div><br>
    </div>
    <hr>
    <h3>Directives</h3>
    單一 JS 表達式
    <p v-if="seen">Now you see me</p>
    <p><button v-on:click="switchSeen">switch</button></p>
    <h4>Arguments</h4>
    <a v-bind:href="vue"> Arguments? </a>
    <h4>Dynamic Arguments</h4>
    todo
    <h4>Modifiers</h4>
    . 之後 ex: .prevent，event 發生時會呼叫 event.preventDefault()
    <form v-on:submit.prevent="onSubmit"> <input type="submit" value="點我啊"> </form>
    <h3>Shorthands</h3>
    <h4>v-bind Shorthand</h4>
    <!-- full syntax -->
    <a v-bind:href="vue"> full syntax </a>
    <br>
    <!-- shorthand -->
    <a :href="vue"> shorthand </a>
    <h4>v-on Shorthand</h4>
    <p v-if="seen">Shorthand</p>
    <!-- full syntax -->
    <a v-on:click="switchSeen"> full syntax </a>
    <br>
    <!-- shorthand -->
    <a @click="switchSeen"> shorthand </a>
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'Template',
  props: {
    msg: String,
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mount() {
    console.log('mount');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  data() {
    console.log('data');

    return {
      message: `頁面載入於 ${new Date().toLocaleString()}`,
      rawHtml: '<span style="color:red">This should br red.</span>',
      dynamicId: 'dynamicId',
      isButtonDisabled: true,
      seen: true,
      vue: 'https://vuejs.org/v2/guide/syntax.html#Arguments',
    };
  },
  methods: {
    switchSeen() {
      this.seen = !this.seen;
    },
    onSubmit() {
      console.log('submit clicked');
    },
  },
  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('');
    },
  },
};
</script>
