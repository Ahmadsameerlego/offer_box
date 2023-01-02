import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import siteStores from '../views/SiteStores.vue';
import siteOffers from '../views/SiteOffers.vue';
import siteFavs from '../views/siteFavourites.vue';
import singleStore from '../views/singleStore.vue';
import UserProfile from '../views/UserProofile.vue'
import HomeLogin from '../views/HomeLogin.vue';
import forgetPassowrd from '../views/forgetPassowrd.vue';
import confirmCode from '../views/confirmCode.vue';
import confirmPassword from '../views/confirmPassword.vue';
import HomeRegester from '../views/HomeRegester.vue';
import OfferDescription from '../views/OfferDescription.vue';
import NotificationPage from '../views/NotificationPage.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/HomeLogin',
    name: 'HomeLogin',
    component: HomeLogin
  },
  {
    path: '/HomeRegester',
    name: 'HomeRegester',
    component: HomeRegester
  },
  {
    path: '/forgetPassowrd',
    name: 'forgetPassowrd',
    component: forgetPassowrd
  },
  {
    path : '/stores',
    name : 'stores',
    component : siteStores
  },
  {
    path : '/NotificationPage',
    name : 'NotificationPage',
    component : NotificationPage
  },
  {
    path : '/confirmCode',
    name : 'confirmCode',
    component : confirmCode
  },
  {
    path : '/confirmPassword',
    name : 'confirmPassword',
    component : confirmPassword
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
  },
  {
    path: '/OfferDescription/:id',
    name : 'OfferDescription',
    component : OfferDescription
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
