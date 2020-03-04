<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href class="navbar-brand" @click.prevent>Authentication</a>

    <div class="navbar-nav mr-auto">
      <!-- Home -->
      <li class="nav-item">
        <router-link to="/home" class="nav-link d-flex align-items-center">
          <home-icon size="18" class="mr-1"></home-icon>
          <span>Home</span>
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
          <user-icon size="18" class="mr-1"></user-icon>
          <span>User</span>
        </router-link>
      </li>
    </div>

    <div v-if="currentUser" class="navbar-nav ml-auto">
      <!-- Porfile -->
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          {{ currentUser.username }}
        </router-link>
      </li>

      <!-- Logout -->
      <li class="nav-item">
        <a class="nav-link" href @click.prevent="logOut">
          LogOut
        </a>
      </li>
    </div>

    <div v-else class="navbar-nav ml-auto">
      <!-- Register -->
      <li class="nav-item">
        <router-link to="/register" class="nav-link">
          Register
        </router-link>
      </li>

      <!-- Login -->
      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          Login
        </router-link>
      </li>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { HomeIcon, UserIcon } from 'vue-feather-icons'

export default {
  components: {
    HomeIcon,
    UserIcon
  },
  data() {
    return {
      showAdminBoard: false,
      showModeratorBoard: false
    }
  },
  computed: {
    ...mapGetters('auth', {
      currentUser: 'user'
    })
  }
}
</script>
