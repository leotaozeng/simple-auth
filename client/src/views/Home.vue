<template>
  <header class="jumbotron">
    <h3>{{ content }}</h3>
  </header>
</template>

<script>
import { getPublicContent } from '@/api'

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    }
  },
  async created() {
    try {
      const res = await getPublicContent()
      this.content = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
