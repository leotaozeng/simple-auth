<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
import axios from 'axios'

const SUCCESS_OK = 200

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    }
  },
  created() {
    axios
      .get('http://localhost:3000/api/user/all')
      .then(res => {
        const { status, data } = res

        if (status === SUCCESS_OK) {
          this.content = data
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
