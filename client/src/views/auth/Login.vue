<template>
  <div class="card">
    <!-- Avatar -->
    <img
      id="avatar"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-image"
    />

    <!-- Form -->
    <form v-if="!message" autocomplete="off" @submit.prevent="handleLogin">
      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="form.email"
          class="form-control"
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="form.password"
          class="form-control"
        />
      </div>

      <!-- Login Button -->
      <div class="form-group">
        <button class="btn btn-primary btn-block">Login</button>
      </div>
    </form>

    <!-- Alert Message -->
    <div
      v-else
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
      role="alert"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      message: '',
      successful: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin() {
      try {
        const res = await this.login(this.form)

        this.message = res.data.message
        this.successful = true

        setTimeout(() => {
          this.$router.push({ name: 'Home' })
        }, 1500)
      } catch (err) {
        const res = err.response

        this.message = res.data.message
      }
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 350px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 40px 40px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
}

.profile-image {
  display: block;
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  border-radius: 50%;
}

label {
  display: block;
  margin-top: 10px;
}
</style>
