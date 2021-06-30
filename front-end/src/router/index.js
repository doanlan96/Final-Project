// import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop/top',
    name: 'ListTop',
    component: () => import('../components/ListTop.vue')
  },
  {
    path: '/shop/bottom',
    name: 'ListBottom',
    component: () => import('../components/ListBottom.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/event/:id',
    name: 'eventSingle',
    component: () => import('../views/EventSingle.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/PolicyShipping.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/login/Login.vue'),
  },
  {
    path: '/login/signup',
    name: 'Signup',
    component: () => import('../components/login/Signup.vue'),
  },
  {
    path: '/login/forgotpassword',
    name: 'ForgotPassword',
    component: () => import('../components/login/ForgotPassword.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior () {
    return { top:0 };
  },
  routes,
});

export default router;
