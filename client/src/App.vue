<template>
  <div id="app">
    <Navbar />

    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
