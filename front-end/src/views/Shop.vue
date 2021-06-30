<template>
     <div class="shop">
    <div class="hero is-primary">
      <div class="hero-body">
          <h1 class="title is-size-2">Shop</h1>
          <!-- <h3 class="type-selections">
            <router-link to="/shop/top">TOP</router-link>
            <br>
            <router-link to="/shop/bottom">BOTTOM</router-link>
          </h3> -->
      </div>
    </div>
    <div class="container">
          <EventListShop />
    </div>
  </div>
</template>

<script>
import EventListShop from '../components/EventListShop.vue';
export default {
  name: 'shope',
  components: {
    EventListShop
  }
}
</script>

<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
  .hero {
    text-align: left;
    background:             url("https://ecosystem.fr/wp-content/uploads/2016/12/background-gold.jpg");
    // background-size:        contain;
    margin:                 auto;
    width:                  75vw;
  }
  .hero-body {
    margin-left: 30px;
    color:              #ffebb3;
    border:             4px solid;
    // background:         rgb(59, 2, 6);
    // mix-blend-mode:     multiply;
    font:               bolder 'Alfa Slab One';
    margin:             0;
  }
  .type-selections {
     display: inline;
  }
</style>
