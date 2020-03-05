<template>
  <header class="jumbotron">
    <h3>{{ content }}</h3>
  </header>
</template>

<script>
import roles from '@/api/roles'

export default {
  name: 'Moderator',
  data() {
    return {
      content: ''
    }
  },
  async created() {
    try {
      const res = await roles.getModeratorContent()
      this.content = res.data
    } catch (error) {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
