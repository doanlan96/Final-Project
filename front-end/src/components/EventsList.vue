<template>
  <div class="events container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="product in products" :key="product.id">
            <EventCard v-bind:product="product" v-if="product.is_hot" />  
      </div>
    </div>
  </div>
</template>
<script>
  import EventCard from '@/components/EventCard';
  export default {
    name: 'EventsList',
    components : {
      EventCard
    },
    // props: {
    //     products:{type: Object}
    // },
    created() {
        this.$store.dispatch("getProducts")
    },
    computed: {
      products() {
        return this.$store.state.products
      },
      // searchProducts() {
      //   return this.$store.commit('SEARCH_PRODUCT', value)
      // }
    }
  }
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }

</style>