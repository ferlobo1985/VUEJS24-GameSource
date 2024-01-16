import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home/index.vue'
import Signin from '@/components/user/signin.vue';

import Dashboard from '@/components/user/dashboard/index.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/signin', name: 'signin', component: Signin },
    { path: '/user/dashboard', name: 'dashboard', component: Dashboard },
  ]
})

export default router
