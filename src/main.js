import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

// vm0.a = 'this is a pencil'
const data = { a: 'this is an apple' };

// Vue Instance
const vm = new Vue({
  // options https://vuejs.org/v2/api/#Options-Data
  store, // for all sub component
  render: (h) => h(App),
  data,
  router,
}).$mount('#app');

console.log(vm);
