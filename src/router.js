import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      props: {website: 'http://localhost:8000/'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'main'},
      props: {website: 'http://localhost:8000/'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: {layout: 'main'},
      props: {website: 'http://localhost:8000/'},
      component: () => import('./views/Register.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {layout: 'main'},
      props: {website: 'http://localhost:8000/'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/catalog',
      name: 'Catalog',
      meta: {layout: 'main'},
      props: {website: 'http://localhost:8000/'},
      component: () => import('./views/Catalog.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      props: {website: 'http://localhost:8000/'},
      meta: {layout: 'main'},
      component: () => import('./views/Product.vue')
    },
    {
      path: '/additem',
      name: 'AddItem',
      props: {website: 'http://localhost:8000/'},
      meta: {layout: 'main'},
      component: () => import('./views/AddItem.vue')
    }
  ]
})
