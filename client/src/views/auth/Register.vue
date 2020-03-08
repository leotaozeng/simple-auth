<template>
  <div class="card card-container">
    <!-- Avatar -->
    <img
      id="avatar"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-img-card"
    />

    <!-- Form -->
    <form v-if="!message" autocomplete="off" @submit.prevent="handleRegister">
      <!-- Username -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          v-model.trim="form.username"
          class="form-control"
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="form.email"
          class="form-control"
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="form.password"
          class="form-control"
        />
      </div>

      <!-- Create Button -->
      <div class="form-group">
        <button class="btn btn-primary btn-block">Create</button>
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
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      message: '',
      successful: false
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    async handleRegister() {
      try {
        const res = await this.register(this.form)

        this.message = res.data.message
        this.successful = true

        setTimeout(() => {
          this.$router.push({ name: 'Home' })
        }, 1000)
      } catch (error) {
        console.log(error.response)
      }
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 350px;
  padding: 40px 40px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
}

.profile-img-card {
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
