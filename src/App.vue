<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/HelloWorld">HelloWorld</router-link></li>
      <li><router-link to="/Template">Template</router-link></li>
      <li><router-link to="/ComputedProperties">ComputedProperties</router-link></li>
      <li><router-link to="/ClassAndStyleBinding">ClassAndStyleBinding</router-link></li>
      <li><router-link to="/ConditionalRendering">ConditionalRendering</router-link></li>
      <li><router-link to="/List">List</router-link></li>
      <li><router-link to="/EventHandling">EventHandling</router-link></li>
      <li><router-link to="/FormInputBindings">FormInputBindings</router-link></li>
      <li><router-link to="/Components">Components</router-link></li>
    </ul>
    <router-view/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Template msg="Welcome to Your Vue.js App"/>
    <ComputedProperties msg="Welcome to Your Vue.js App"/>
    <ClassAndStyleBinding />
    <ConditionalRendering />
    <List />
    <EventHandling />
    <FormInputBindings />
    <Components title="My Component" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Template from './components/Template.vue';
// import ComputedProperties from './components/ComputedProperties.vue';
// import ClassAndStyleBinding from './components/ClassAndStyleBinding.vue';
// import ConditionalRendering from './components/ConditionalRendering.vue';
// import List from './components/List.vue';
// import EventHandling from './components/EventHandling.vue';
// import FormInputBindings from './components/FormInputBindings.vue';
// import Components from './components/Components.vue';

// arrow function 沒有 this 所以避免使用
export default {
  // https://vuejs.org/images/lifecycle.png
  name: 'App',
  // components: {
  //   HelloWorld,
  //   Template,
  //   ComputedProperties,
  //   ClassAndStyleBinding,
  //   ConditionalRendering,
  //   List,
  //   EventHandling,
  //   FormInputBindings,
  //   Components,
  // },
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
