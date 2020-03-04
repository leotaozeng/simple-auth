<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href class="navbar-brand" @click.prevent>Authentication</a>

    <!-- 导航菜单 -->
    <div class="navbar-nav mr-auto">
      <!-- Home -->
      <li class="nav-item">
        <router-link
          :to="{ name: 'Home' }"
          class="nav-link d-flex align-items-center"
        >
          <home-icon size="18" class="mr-1"></home-icon>
          <span>Home</span>
        </router-link>
      </li>

      <!-- Secure -->
      <li class="nav-item">
        <router-link
          :to="{ name: 'Secure' }"
          class="nav-link d-flex align-items-center"
        >
          <shield-icon size="18" class="mr-1"></shield-icon>
          <span>Secure</span>
        </router-link>
      </li>

      <!-- Admin Board -->
      <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/admin" class="nav-link">Admin Board</router-link>
      </li>

      <!-- Moderator Board -->
      <li v-if="showModeratorBoard" class="nav-item">
        <router-link to="/mod" class="nav-link">Moderator Board</router-link>
      </li>

      <!-- User -->
      <li class="nav-item">
        <router-link
          v-if="currentUser"
          to="/user"
          class="nav-link d-flex align-items-center"
        >
          User
        </router-link>
      </li>
    </div>

    <!-- 已登录 -->
    <div v-if="currentUser" class="navbar-nav ml-auto">
      <!-- Porfile -->
      <li class="nav-item">
        <router-link to="/profile" class="nav-link d-flex align-items-center">
          <user-icon size="18" class="mr-1"></user-icon>
          <span>{{ currentUser.username }}</span>
        </router-link>
      </li>

      <!-- Logout -->
      <li class="nav-item">
        <a
          class="nav-link d-flex align-items-center"
          @click.prevent="handleLogout"
        >
          <log-out-icon size="18" class="mr-1"></log-out-icon>
          <span>Logout</span>
        </a>
      </li>
    </div>

    <!-- 未登录 -->
    <div v-else class="navbar-nav ml-auto">
      <!-- Register -->
      <li class="nav-item">
        <router-link
          :to="{ name: 'Register' }"
          class="nav-link d-flex align-items-center"
        >
          <user-plus-icon size="18" class="mr-1"></user-plus-icon>
          <span>Register</span>
        </router-link>
      </li>

      <!-- Login -->
      <li class="nav-item">
        <router-link
          :to="{ name: 'Login' }"
          class="nav-link d-flex align-items-center"
        >
          <log-in-icon size="18" class="mr-1"></log-in-icon>
          <span>Login</span>
        </router-link>
      </li>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  HomeIcon,
  UserIcon,
  UserPlusIcon,
  LogInIcon,
  LogOutIcon,
  ShieldIcon
} from 'vue-feather-icons'

export default {
  components: {
    HomeIcon,
    UserIcon,
    UserPlusIcon,
    LogInIcon,
    LogOutIcon,
    ShieldIcon
  },
  computed: {
    ...mapGetters('auth', {
      currentUser: 'user'
    })
  },
  data() {
    return {
      showAdminBoard: false,
      showModeratorBoard: false
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleLogout() {
      this.logout().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
