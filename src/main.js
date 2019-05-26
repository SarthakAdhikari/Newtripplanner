import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/design/main.scss"
import Wave from "./components/shared/Wave.vue"

Vue.component('appWave', Wave)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
