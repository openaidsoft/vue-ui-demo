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
      path: '/el',
      // redirect: '/el/demo',
      component: () => import('@/views/el/El.vue'),
      children: [
        {
          path: '/el/demo',
          component: () => import('@/views/el/ElDemo.vue')
        },
        {
          path: '/el/button',
          component: () => import('@/views/el/ElButton.vue')
        },
      ]
    },
    // vue 프로젝트 스캐폴드
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
