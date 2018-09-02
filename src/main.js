import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import AppMovies from './components/AppMovies.vue'
import SingleMovie from './components/SingleMovie.vue'
import AddMovie from './components/AddMovie.vue'
import AppLogin from './components/AppLogin.vue'
import AppRegister from './components/AppRegister.vue'

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
  {path: '/movies/:id', component: SingleMovie, name: 'single-movie'},
  {path: '/add', component: AddMovie},
  {path: '/login', component: AppLogin},
  {path: '/register', component: AppRegister},
  // {path: '/contacts/:id', component: Contacts, name: 'contact-details'}
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')


