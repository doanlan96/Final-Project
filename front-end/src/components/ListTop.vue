<template>
  <div class="events container">
                <div class="header">
                      <a class="header-item" href="/">
                          Homepage
                      </a>
                      >
                      <a class="header-item" href="/shop">
                          Shop
                      </a>

                      <h2 class="header-item" >
                          Top
                      </h2>
                </div>

    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="product in products" :key="product.id">
          <router-link :to="'/event/' + product.id">  
            <EventCard v-bind:product="product" v-if="product.category_id===1"/>
          </router-link>  
      </div>
    </div>
  </div>
</template>

<script>
 import EventCard from '@/components/EventCard';
 import {onMounted, ref} from 'vue';
 import axios from 'axios';
  export default {
    name: 'ListTop',
    components : {
      EventCard
    },
    setup() {
      const products = ref([]);

      onMounted(async () => {
        const {data} = await axios.get('products');

        products.value = data.data;
        console.log(products)
      });

      return {
          products
      }
    }
  }
</script>

<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }

</style>