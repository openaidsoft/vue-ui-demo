import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/init',
      name: 'init',
      component: () => import('@/init/views/HomeView.vue')
    },
    {
      path: '/init/about',
      name: 'init-about',
      component: () => import('@/init/views/AboutView.vue')
    },
  ]
})

export default router
