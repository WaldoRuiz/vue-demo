import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/intro', name: 'intro', component: () => import('../views/IntroBasico.vue') },
  { path: '/componentes', name: 'componentes', component: () => import('../views/Componentes.vue') },
  { path: '/reactividad', name: 'reactividad', component: () => import('../views/Reactividad.vue') },
  { path: '/router-demo', name: 'router-demo', component: () => import('../views/RouterDemo.vue') },
  { path: '/product/:id', name: 'product', component: () => import('../views/ProductView.vue') },
  { path: '/pinia', name: 'pinia', component: () => import('../views/PiniaDemo.vue') },
  { path: '/ui-libraries', name: 'ui-libraries', component: () => import('../views/UiLibraries.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
