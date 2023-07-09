import { createWebHistory, createRouter } from "vue-router";
// import About from "../components/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/*webpackChunkName: "home"*/ '../views/Home.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;