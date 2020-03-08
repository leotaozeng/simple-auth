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
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

Vue.use(VueRouter)

NProgress.configure({ showSpinner: false }) // NProgress Configuration

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
    component: Home,
    meta: { title: 'Home page' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login page', requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register page', requiresGuest: true }
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    meta: { title: 'Secure page', requiresAuth: true }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { title: 'User page', requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { title: 'Admin page', requiresAuth: true }
  },
  {
    path: '/mod',
    name: 'Moderator',
    component: Moderator,
    meta: { title: 'Moderator page', requiresAuth: true }
  },
  {
    path: '/:username',
    name: 'Profile',
    component: Profile,
    meta: { title: 'Profile page', requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = store.getters['auth/loggedIn']

  // shows the progress bar
  NProgress.start()
  document.title = to.meta.title

  if (to.matched.some(record => record.meta.requiresAuth)) {
    !loggedIn
      ? next({
          name: 'Login',
          query: { redirect: to.fullPath }
        })
      : next()
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    loggedIn ? next({ name: 'Home' }) : next()
  } else {
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
