<template>
  <div class="card card-container">
    <!-- Avatar -->
    <img
      id="avatar"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-img-card"
    />

    <!-- Form -->
    <form autocomplete="off" @submit.prevent="handleRegister">
      <!-- Username -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          v-model="form.username"
          class="form-control"
        />
      </div>

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

      <!-- Create Button -->
      <div class="form-group">
        <button class="btn btn-primary btn-block">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { register } from '@/api/auth'

const SUCCESS_OK = 200

export default {
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async handleRegister() {
      try {
        const res = await register(this.form)
        const { status } = res

        if (status === SUCCESS_OK) {
          this.$router.push({ name: 'Home' })
        }
      } catch (err) {
        console.log(err.response)
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
