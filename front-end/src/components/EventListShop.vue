<template>
  <div class="events container">
      <div class="filter">
      <div class="sorter">
        <form action="/action_page.php">
          <label for="cars">Sort products:</label>
          <select name="sorts" id="sorts" @change="sortProducts($event.target.value)">
            <option value="">---Sort---</option>
            <option value="upward">Price: Low to High</option>
            <option value="downward">Price: High to Low</option>
            <option value="nameup">Name: A -> Z</option>
            <option value="namedown">Name: Z -> A</option>
          </select>
        </form>
      </div>
      <div class="searcher">
        <form action="/action_page.php">
          <label for="productss">Danh mục:</label>
          <select name="categories" id="categories" @change="categoryProducts($event.target.value)">
            <option value="">---Chọn danh mục---</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
          </select>
        </form>
      </div>
          <div class="search">
            <a
              class="button"
              id="searchIcon"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <strong
                ><i class="fa fa-search" style="font-size: 33px"></i
              ></strong>
            </a>
          </div>  
    </div>

    <div class="collapse" id="collapseExample">
    <label class="header">SEARCH GOLDIEVIETNAM.COM </label>
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="Type to search for products..."
          v-model="searchWord" required
        />
      </div>
    </div>
  </div>

    <div class="columns is-multiline" v-if="filteredProducts.length > 0">
      <div class="column is-one-quarter" v-for="product in filteredProducts" :key="product.id">
          <!-- <router-link :to="'/event/' + product.id">   -->
            <EventCard v-bind:product="product"/>
          <!-- </router-link>   -->
      </div>
    </div>

    <div v-else>
          No item matched
    </div>  
  <nav>
  <!-- <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)" @click="previous">Previous</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
    </li>    
  </ul> -->
  </nav>
  </div>
</template>

<script>
 import EventCard from '@/components/EventCard';
  export default {
    name: 'EventsListShop',
    components : {
      EventCard
    },
    created() {
      this.$store.dispatch("getProducts")
    },
    computed: {
       products() {
        return this.$store.state.products
      },
      filteredProducts () {
        let a = (this.$store.state.filteredProducts || this.$store.state.products)
        return a
      },
      searchWord: {
        get () {
          return this.$store.state.searchWord
        },
        set (value) {
          this.$store.dispatch('filteredProducts', value)
        }
      }
    },
    methods: {
      sortProducts(value) {
        this.$store.commit('SORT_PRODUCT', value)
      },
      categoryProducts(value) {
        this.$store.commit('CATEGORY_PRODUCT', value)
      },
      addToCart(product) {
        this.$store.dispatch('addToCart',product)
      }
    }
  };
</script>

<style lang="scss" scoped>
.collapse {
  margin: auto;
  width: 90%;
  height: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f4fab9;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.searchTerm {
  width: 100%;
  border: 3px solid #d88d00;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchButton {
  width: 40px;
  height: 40px;
  border: 1px solid #d88d00;
  background: #d88d00;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.button {
    margin-top: 15px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  margin-top: 30px;
  width: 30%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  .events {
    margin-top: 100px;
    text-align: center;
  }

  .filter {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }

</style>