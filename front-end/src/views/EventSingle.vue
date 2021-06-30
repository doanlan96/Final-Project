<template>
<div id="snackbar">Added to cart</div> 
  <div class="event-single">
    <div class="columns">
        <div class="column is-three-fifths">
          <div class="pictures" v-for="picture in product.pictures" :key="picture.id"> 
          <img :src="picture.product_picture" alt="">
          </div>
        </div>  
        <div class="column is-two-fifths">
          <div class="inside" >
                <div class="header" style="  float: left;">
                      <a class="header-item" href="/">
                          Homepage
                      </a>
                      >
                      <a class="header-item" href="/shop">
                          Shop
                      </a>
                </div>
                <br>
                <div class="container">
                <div class="name" style="font-size: 23px;">
                        {{product.title}}
                </div>
                <div class="price">
                  <p v-show="product.is_sale" style="text-decoration: line-through; font-size: 13px; margin-right: 5px;">${{product.sale_price}}</p>  <h1>${{product.price}} </h1> 
                </div>
                <div class="add-to-cart">
                    <button class="button is-warning is-focused" @click="addToCart(product)">ADD TO CART</button>
                </div>  
                </div> 

          <div class="description">
                <header>
                    Description:
                </header>
              <p>{{product.description}} </p>  

          </div>       
          </div>
        </div> 
    </div> 
  </div>

  <router-view 
  v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view>
</template>
<script>
  export default {
    created() {
      this.$store.dispatch("getProduct")
    },
    methods: {
      addToCart(product) {
        console.log(product)
        this.$store.dispatch('addToCart',product)
      },
      // myFunction() {
      //     var x = document.getElementById("snackbar");
      //     x.className = "show";
      //     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      //   }
    },
    computed: {
       product() {
        return this.$store.state.product
      }
    },
  }
</script>
<style lang="scss" scoped>

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 330px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 330px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 330px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 330px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 330px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

a {
    color: #3d4246;
    display: inline;
    font-weight: bold;
}

img {
  margin-bottom: 30px;
}

.column {
  margin-left: 30px;
  display: grid;
  grid-column: auto auto;
}

.inside{
  border-width: 3px;
   border-style: solid;
   border-color: #ebc417;
    float: left;
    position: sticky;
    top: 30px;
    margin-left: 30px;
    padding: 30px;
    width: 450px;
    height: 500px;
}

.container {
  margin-top: 30px;
  display: grid;
  grid-gap: 20px;
  
}
.price {
  display: flex;
  font-size: 25px;
}

.description {
  text-align: left;
  margin-left: 50px;
    margin-top: 100px;
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