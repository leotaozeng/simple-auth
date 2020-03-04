<template>
  <div id="app">
    <Navbar />

    <div class="container">
      <router-view />
    </div>

    <Loader />
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Loader,
    Navbar
  }
}
</script>
