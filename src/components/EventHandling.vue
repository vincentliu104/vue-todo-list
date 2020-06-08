<template>
  <div id="class">
    <h3>Listening to Events</h3>
    <p>用 v-on</p>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <h3>Method Event Handlers</h3>
    <p>v-on 裡可以用 method name</p>
    <div id="example-2">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="greet">Greet</button> or $vm0.greet()
      <p>{{ vincent }} click {{ clicks }} time(s)</p>
    </div>
    <h3>Methods in Inline Handlers</h3>
    <p>inline statement</p>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <p>如果需要 DOM event 可以放在參數裡</p>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <h3><a href="https://vuejs.org/v2/guide/events.html#Event-Modifiers">Event Modifiers</a></h3>
    <p>常用 event.preventDefault(), event.stopPropagation(), v-on 提供很多修飾符號</p>
    <p>v-on:click.prevent.self 會阻擋所有點擊, v-on:click.self.prevent 僅阻擋 element 點擊</p>
    <h3>Key Modifiers</h3>
    <p>特定鍵才觸發</p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values">KeyboardEvent.key</a>
    <input v-on:keyup.enter.page-down="inputKey" placeholder="key modifer - enter">
    <input v-on:keyup.ctrl.67="inputKey" placeholder="system modifer - ctrl + c">
    <input v-on:mousedown.left="inputKey" placeholder="mouse modifer - left">
  </div>
</template>

<script>
// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'EventHandling',
  data() {
    return {
      counter: 0,
      vincent: 'Vincent',
      clicks: 0,
    };
  },
  methods: {
    greet(event) {
      console.log(event);
      // `this` inside methods points to the Vue instance
      this.clicks += 1;
    },
    say(message) {
      alert(message);
    },
    warn(message, event) {
    // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    inputKey(event) {
      console.log(event.key, event.type);
    },
  },
};
</script>
