<template>
  <transition name="fade-transform" mode="out-in">
    <div class="loading-mask" v-if="loading">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="text-primary mt-1">拼命加载中</p>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('loader', ['loading'])
  }
}
</script>

<style scoped>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  background-color: hsla(0, 0%, 100%, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
