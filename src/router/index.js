import { createRouter, createWebHashHistory } from "vue-router";
import DashboardPage from "../views/DashboardPage.vue";
import Navbar from "@/components/Navbar.vue"

// const routes = [
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: DashboardPage
//   }
// ]


const routes = [

  {
    path: '/',
    component: Navbar,
    name: "navbar",
  },

  {
    path: '/dashboard',
    component: DashboardPage,
    name: "dashboard",
  },

];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router