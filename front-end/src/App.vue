<template>
  <div id="app">
    <Nav />
  <!-- <router-view 
  v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view> -->
    <Footer />
  </div>
</template>

<script>
import Nav from './components/partials/Nav.vue';
import Footer from './components/partials/Footer.vue';

export default {
  name: 'app',
  components: {
    Nav,
    Footer
  },
}
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: ass 0.5s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.5s ease-in;
}

</style>
