import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import siteStores from '../views/SiteStores.vue';
import siteOffers from '../views/SiteOffers.vue';
import siteFavs from '../views/siteFavourites.vue';
import singleStore from '../views/singleStore.vue';
import UserProfile from '../views/UserProofile.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/stores',
    name : 'stores',
    component : siteStores
  },
  {
    path: '/offers',
    name : 'offers',
    component : siteOffers
  },
  {
    path : '/favorites',
    name : 'favorites',
    component : siteFavs
  },
  {
    path: '/store/:id',
    name : 'store',
    component : singleStore
  },
  {
    path : '/profile',
    name : 'profile',
    component : UserProfile
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
