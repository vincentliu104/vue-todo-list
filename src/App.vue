<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Template msg="Welcome to Your Vue.js App"/>
    <ComputedProperties msg="Welcome to Your Vue.js App"/>
    <ClassAndStyleBinding />
    <ConditionalRendering />
    <List />
    <EventHandling />
    <FormInputBindings />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Template from './components/Template.vue';
import ComputedProperties from './components/ComputedProperties.vue';
import ClassAndStyleBinding from './components/ClassAndStyleBinding.vue';
import ConditionalRendering from './components/ConditionalRendering.vue';
import List from './components/List.vue';
import EventHandling from './components/EventHandling.vue';
import FormInputBindings from './components/FormInputBindings.vue';

// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'App',
  components: {
    HelloWorld,
    Template,
    ComputedProperties,
    ClassAndStyleBinding,
    ConditionalRendering,
    List,
    EventHandling,
    FormInputBindings,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
