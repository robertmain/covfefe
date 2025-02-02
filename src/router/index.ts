import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory('covfefe'),
  routes,
})
