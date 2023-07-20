import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Call from'../components/Call.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/Call',
      name:'Call',
      component: Call
    },
    {
      path:'/news',
      name:'News',
      component: () => import('../components/News.vue')
    },
    {
      path:'/blog',
      name:'Blog',
      component: () => import('../components/Blog.vue')
    },
    {
      path:'/link',
      name:'Link',
      component: () => import('../components/Link.vue')

    },
    {
      path:'/buy',
      name:'Buy',
      component: () => import('../components/Buy.vue')

    },
    {
      path:'/:id',
      name:'ProductDetail',
      component: () => import('../components/ProductDetail.vue'),
      props:true

     },
    {
     path:'/filter',
     name:'Filter',
     component: () => import('../components/Filter.vue'),
     props:true

    },
  ]
})

export default router
