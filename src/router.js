import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Myplans from './views/Myplans.vue'
import LoginSingin from './views/LoginSignin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'Home', component: Home},
    { path: '/myplans', name: 'My plans', component: Myplans},
    { path: '/login-signin', name: 'Login / Sign in', component: LoginSingin},
  ]
})

// routes: [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//   }
// ]