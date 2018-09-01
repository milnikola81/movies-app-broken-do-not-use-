import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import AppMovies from './components/AppMovies.vue'
import AddMovie from './components/AddMovie.vue'
import AppLogin from './components/AppLogin.vue'

Vue.use(VueRouter);

export const eventBus = new Vue();

// Vue.directive('background', {
//   componentUpdated(el, binding) {
//     if(binding.value) {
//       el.style.background = 'green'
//     }
//     else if(!binding.value) {
//       el.style.background = 'none'
//     }
//   }
// })

const routes = [
  {path: '/movies', component: AppMovies},
  {path: '/', redirect: '/movies'},
  {path: '/add', component: AddMovie},
  {path: '/login', component: AppLogin}
  // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')


