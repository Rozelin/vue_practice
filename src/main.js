import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource  from 'vue-resource'
import App from './App.vue'
import {store} from './store/store.js';
import {routes} from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { return savedPosition }
    if (to.hash) { return { selector: to.hash }; }
    return { x: 0, y: 0 };
  }
});

Vue.http.options.root = 'https://elen-vue.firebaseio.com/'; // root URL for request

Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});

export const eventBus = new Vue();

Vue.directive('highlight', {
  bind(el, binding, vbind) {
    //el.style.backgroundColor = 'orange'; //takes the color as it is when v-highlight attr added
    //el.style.backgroundColor = binding.value; // takes param passed to attr as v-highlight="'red'"
    if (binding.arg === 'background') {   // if we use v-highlight:background = "'red'" we get red backgroung
      el.style.backgroundColor = binding.value;
    } else {                              // if we use v-highlight="'red'" we get red color
      el.style.color = binding.value;
    }
  }
}); // globally registered custom derective that will be used as v-highlight=""


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
