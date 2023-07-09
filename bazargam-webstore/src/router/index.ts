import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
// import About from "../components/About.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;