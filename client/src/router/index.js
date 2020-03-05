import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Secure from '@/views/Secure'
import Profile from '@/views/Profile'
import User from '@/views/roles/User'
import Admin from '@/views/roles/Admin'
import Moderator from '@/views/roles/Moderator'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mod',
    name: 'Moderator',
    component: Moderator,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:username',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters['auth/loggedIn']

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      // 用户未登录跳转到登录页面
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      // 用户已登录继续加载页面
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (loggedIn) {
      next({ name: 'Home' })
    }
  } else {
    next()
  }
})

export default router
