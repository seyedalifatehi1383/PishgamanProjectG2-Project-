import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/Home.vue";
import IntroductionGoods from '../views/Home/BazargamDiscount/IntroductionGoods.vue'
// import About from "../components/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // component: () =>
    //   import(/*webpackChunkName: "home"*/ '../views/Home.vue')
  },

  {
    path: "/:group/:id",
    name: "IntroductionGoods",
    component: IntroductionGoods,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;