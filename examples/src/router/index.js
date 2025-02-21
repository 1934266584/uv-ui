import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/calendar.vue')
    },
    {
      path: '/tab',
      name: 'tab',
      component: () => import('@/views/tab.vue')
    }
  ]
})

export default router
