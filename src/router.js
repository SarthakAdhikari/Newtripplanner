import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";

import Home from "./views/Home.vue";
import Myplans from "./views/Myplans.vue";
import LoginSingin from "./views/login-signin/LoginSignin.vue";
import Forum from "./views/Forum.vue";
import TripPlanResponse from "./views/trip-plan-response/TripPlanResponse.vue";

Vue.use(Router);

import goTo from "vuetify/lib/components/Vuetify/goTo";

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  /* mode: 'history', */
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/forum", name: "Forum", component: Forum },
    { path: "/login-signin", name: "Login / Sign in", component: LoginSingin },
    {
      path: "/trip-plan-response",
      name: "Trip plan response",
      component: TripPlanResponse
    },
    {
      path: "/myplans",
      component: Myplans,
      name: "My plans"
    }
  ]
});

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
