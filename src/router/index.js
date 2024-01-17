import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/home/index.vue'
import Signin from '@/components/user/signin.vue';

import Dashboard from '@/components/user/dashboard/index.vue';
import DashboardMain from '@/components/user/dashboard/main.vue';
import UserProfile from '@/components/user/dashboard/pages/user_profile.vue';
import AdminArticles from '@/components/user/dashboard/admin/articles.vue';
import AdminAddArticle from '@/components/user/dashboard/admin/add.vue'
import AdminEditArticle from '@/components/user/dashboard/admin/edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/signin', name: 'signin', component: Signin },
    { path: '/user/dashboard', component: Dashboard , children:[
      {path:'', component:DashboardMain, name:'dashboard'},
      {path:'profile', component:UserProfile, name:'user_profile'},
      {path:'articles', component:AdminArticles, name:'admin_articles'},
      {path:'articles/add', component:AdminAddArticle, name:'admin_add'},
      {path:'articles/edit/:id', component:AdminEditArticle, name:'admin_edit'},
    ]},
  ]
})

export default router
