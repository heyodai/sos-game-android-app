import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import HomeScreen from "./screens/HomeScreen.vue"
import MatchScreen from "./screens/MatchScreen.vue"
import SetupScreen from "./screens/SetupScreen.vue"
import CreditScreen from "./screens/CreditScreen.vue"
import ReplayScreen from "./screens/ReplayScreen.vue"

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/match', component: MatchScreen },
  { path: '/setup', component: SetupScreen },
  { path: '/credits', component: CreditScreen },
  { path: '/replay', component: ReplayScreen },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
