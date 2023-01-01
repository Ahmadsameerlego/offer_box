import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path: '/HomeLogin',name: 'HomeLogin',component: () => import('../views/HomeLogin.vue')},
  
  {path: '/forgetPassowrd',name: 'forgetPassowrd',component: () => import('../views/forgetPassowrd.vue')},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
