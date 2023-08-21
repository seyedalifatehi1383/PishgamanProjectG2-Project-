import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from '../components/News.vue'
import Blog from '../components/Blog.vue'
import Rahnema from '../components/Rahnema.vue'
import Aplication from '../components/Aplication.vue'
import Buy from '../components/Buy.vue'
import Productpage from '../components/Productpage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },

    {
      path: '/rahnema',
      name: 'rahnema',
      component: Rahnema
    },
    {
      path: '/aplication',
      name: 'aplication',
      component: Aplication
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
           path: '/productpage/:id',
        name: 'productpage',
           component: Productpage,
            props : true
          },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import News from '../components/News.vue'
// import Blog from '../components/Blog.vue'
// import Rahnema from '../components/Rahnema.vue'
// import Link from '../components/Link.vue'
// import Buy from '../components/Buy.vue'
// import Login from '../components/Login.vue'
// import City from '../components/City.vue'
// import Call from '../components/Call.vue'
// import Product from '../components/Product.vue'
// import Productpage from '../components/Productpage.vue'
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/news',
//       name: 'news',
//       component: News
//     },
//     {
//       path: '/blog',
//       name: 'blog',
//       component: Blog
//     },
//     {
//       path: '/rahnema',
//       name: 'rahnema',
//       component: Rahnema
//     },
//     {
//       path: '/link',
//       name: 'link',
//       component: Link
//     },
//     {
//       path: '/buy',
//       name: 'buy',
//       component: Buy
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/city',
//       name: 'city',
//       component: City
//     },
//     {
//       path: '/call',
//       name: 'call',
//       component: Call
//     },
//     {
//       path: '/product',
//       name: 'product',
//       component: Product
//     },
//     {
//       path: '/productpage/:id',
//       name: 'productpage',
//       component: Productpage,
//       props : true
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router


