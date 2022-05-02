import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import HomeScreen from '../screens/HomeScreen.vue'
import CreditsScreen from '../screens/CreditsScreen.vue'
import ReplayScreen from '../screens/ReplayScreen.vue'
import SetupScreen from '../screens/SetupScreen.vue'
import MatchScreen from '../screens/MatchScreen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeScreen
  },
  {
    path: '/credits',
    name: 'credits',
    component: CreditsScreen
  },
  {
    path: '/replay',
    name: 'replay',
    component: ReplayScreen
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetupScreen
  },
  {
    path: '/match',
    name: 'match',
    component: MatchScreen
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
