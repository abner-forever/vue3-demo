import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// const routerHistory = createWebHistory()
import Home from "/views/Home.vue";
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router