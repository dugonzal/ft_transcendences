import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/public/Index.vue'
import Login from '../views/public/Login.vue'
import Register from '../views/public/Register.vue'
import Home from '../views/private/Home.vue'

import { refreshAuthToken } from '../utils/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /*
   * este es el enrutador, funciona igual que django es muy parecido
   **/
  routes: [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home, meta: { requiresAuth: true } }
    // { path: '/game', name: 'Game', component: Game, meta: { requiresAuth: true } },
    // { path: '/friend-list', name: 'FriendList', component: FriendList, meta: { requiresAuth: true } },
    // { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
  ]
})

// Navigation guard to check for authentication
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record): unknown => record.meta.requiresAuth)) {
    const isRefreshed = await refreshAuthToken()
    if (!isRefreshed) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
