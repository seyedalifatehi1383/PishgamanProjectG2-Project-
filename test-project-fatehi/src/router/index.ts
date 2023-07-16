import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/Home.vue";
// import About from "../components/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    // component: () =>
    //   import(/*webpackChunkName: "home"*/ '../views/Home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;