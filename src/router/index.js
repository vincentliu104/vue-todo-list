import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Template from '../components/Template.vue';
import ComputedProperties from '../components/ComputedProperties.vue';
import ClassAndStyleBinding from '../components/ClassAndStyleBinding.vue';
import ConditionalRendering from '../components/ConditionalRendering.vue';
import List from '../components/List.vue';
import EventHandling from '../components/EventHandling.vue';
import FormInputBindings from '../components/FormInputBindings.vue';
import Components from '../components/Components.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Template',
      component: Template,
    },
    {
      path: '/ComputedProperties',
      component: ComputedProperties,
    },
    {
      path: '/ClassAndStyleBinding',
      component: ClassAndStyleBinding,
    },
    {
      path: '/ConditionalRendering',
      component: ConditionalRendering,
    },
    {
      path: '/List',
      component: List,
    },
    {
      path: '/EventHandling',
      component: EventHandling,
    },
    {
      path: '/FormInputBindings',
      component: FormInputBindings,
    },
    {
      path: '/Components',
      component: Components,
    },
  ],
});
