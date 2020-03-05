import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Secure from '@/views/Secure'
import Profile from '@/views/Profile'
import User from '@/views/board/User'
import Admin from '@/views/board/Admin'
import Moderator from '@/views/board/Moderator'

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
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = store.getters['auth/loggedIn']

    if (!loggedIn) {
      // 用户未登录跳转到登录页面
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    } else {
      // 用户已登录继续加载页面
      next()
    }
  } else {
    next()
  }
})

export default router
