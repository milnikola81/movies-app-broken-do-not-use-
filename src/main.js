import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import AppMovies from './components/AppMovies.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/movies', component: AppMovies},
  {path: '/', redirect: '/movies'}
  // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
