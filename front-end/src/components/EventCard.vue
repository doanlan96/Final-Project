<template>
           <div id="snackbar">Added to cart</div> 
<a >
  <div class="product">
          <div class="product-img">
            <div class="hot" v-show="product.is_hot">
                Best 
                Seller  
            </div>
            <div class="sale" v-show="product.is_sale">
                Sale
            </div>
            <router-link :to="'/event/' + product.id">  
              <img :src="product.image" alt="">
            </router-link>
          </div>  
          <div class="product-content">
              <div class="product-title">
                <h3> 
                  <router-link :to="'/event/' + product.id">  
                    {{product.title}}
                  </router-link>  
                </h3>
              </div>
              <div class="product-price">
<p v-show="product.is_sale" style="text-decoration: line-through; font-size: 13px; margin-right: 5px;">${{product.sale_price}}</p>  <h4>${{product.price}} </h4> 
              </div>      
          </div>
          <div class="add-cart">
              <button class="btn btn-5" @click="addToCart(product), myFunction()">
                <i class="fa fa-shopping-cart" style="font-size:17px;"></i> Add to cart  
              </button>  
          </div>
  </div>
</a>      
</template>
<script>
  export default {
        props: ['product'],
        methods: {
      addToCart(product) {
        console.log(product)
        this.$store.dispatch('addToCart',product)
      },
      myFunction() {
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
      }

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

a{
  text-transform: uppercase;
    color: #3d4246;
    display: inline;
    font-weight: bold;
}

a:hover {
  text-decoration: none;
}

.add-cart {
  background-color: #e8d99b; 
  position: relative;
  margin-top: -30px;
  float: right;
}

.btn:hover {
  background-color: #ebc417;
  color: white;
  transition: 0.5s;
}

.btn {
    background-color: #e8d99b; 
}

  .product {
    background-color: #e8d99b;
    height: 400px;
    width: 270px;
    max-width: 100%;
    border: 1px solid #eee;
    padding: 10px;
    margin: auto;
    transition: 0.27s linear; 
}
.product:hover {
    box-shadow: 4px 4px #999;
    // transition: 0.5s ;
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}

.hot {
  position: absolute;
  padding-top: 5px;
  width: 55px;
  height: 50px;
  font-size: 12px;
  background-color: red;
  color: white;
  border-radius: 30px;
}

.sale {
  position: absolute;
  padding-top:15px;
  width: 55px;
  height: 50px;
  font-size: 12px;
  background-color: red;
  color: white;
  border-radius: 30px;
}

.product-title {
  font-size: 13px;
  color: #000000;
  margin-bottom: 20px;
}

.product-price {
  display: flex;
}

.product-content{
    padding: 10px 15px 0px 15px;
    text-align: left;
}

</style>