<template>
  <div class="card">
    <!-- Avatar -->
    <img
      id="avatar"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-image"
    />

    <!-- Form -->
    <form name="form" autocomplete="off" @submit.prevent="handleLogin">
      <!-- Username -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="form.username"
          class="form-control"
          name="username"
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          name="email"
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="form-control"
          name="password"
        />
      </div>

      <!-- Login Button -->
      <div class="form-group">
        <button class="btn btn-primary btn-block" :disabled="loading">
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm"
          ></span>
          <span>Login</span>
        </button>
      </div>

      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      loading: false,
      message: ''
    }
  },
  methods: {
    handleLogin() {
      console.log(1)
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
