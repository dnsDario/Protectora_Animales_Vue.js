// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import store from './store/index.js'
import Login from './pages/LoginPage.vue'
import AnimalDetail from './pages/AnimalDetail.vue'
import Register from './pages/RegisterPage.vue'
import TusMascotas from './pages/TusMascotasPage.vue'
import Dashboard from './pages/DashboardPage.vue'
import Surveys from './pages/SurveysPage.vue'
import AuthLayout from './components/AuthLayout.vue'
import DefaultLayout from './components/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '/dashboard', name: 'Dashboard', component: Dashboard },
      { path: '/surveys', name: 'Surveys', component: Surveys }
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      { path: '/login', name: 'Login', component: Login },
      { path: '/register', name: 'Register', component: Register }
    ]
  },

  {
    path: '/tusMascotas',
    name: 'TusMascotas',
    /* meta: {requiresAuth: true}, */
    component: TusMascotas
  },
  {
    path: '/animal/:id',
    name: 'Detalle Animal',
    /* redirect: '/',
    meta: {requiresAuth: true}, */
    component: AnimalDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* GUARDS */
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if (store.state.user.token && (to.meta.isGuest)) {
    next({ name: 'TusMascotas' })
  } else {
    next()
  }
})

export default router
