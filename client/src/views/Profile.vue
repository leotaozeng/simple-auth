<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ user.username }}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{ user.accessToken.substring(0, 20) }} ...
      {{ user.accessToken.substr(user.accessToken.length - 20) }}
    </p>
    <p>
      <strong>Id:</strong>
      {{ user.id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ user.email }}
    </p>
    <p>
      <strong>Authorities:</strong>
      {{ user.role }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapGetters('auth', ['user'])
  }
}
</script>
