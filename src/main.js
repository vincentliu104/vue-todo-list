import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

// vm0.a = 'this is a pencil'
const data = { a: 'this is an apple' };

// Vue Instance
const vm = new Vue({
  // options https://vuejs.org/v2/api/#Options-Data
  store,
  render: (h) => h(App),
  data,
}).$mount('#app');

console.log(vm);
