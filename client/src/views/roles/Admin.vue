<template>
  <header class="jumbotron">
    <h3>{{ content }}</h3>
  </header>
</template>

<script>
import roles from '@/api/roles'

export default {
  name: 'Admin',
  data() {
    return {
      content: 'Admin'
    }
  },
  created() {
    roles.getAdminContent()
  }
}
</script>
