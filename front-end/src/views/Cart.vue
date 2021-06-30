<template>
<div id="app">

  <!-- Header -->
  <header class="container">
    <ul class="breadcrumb">
      <li><router-link to="/" class="navbar-item">Home</router-link></li>
      <li><router-link to="/cart" class="navbar-item">Shopping Cart</router-link></li>
    </ul>
    <span class="count">{{ itemCount }} items in the bag</span>
  </header>
  <!-- End Header -->

  <!-- Product List -->
<section class="container">
    <div v-if="productsCarts.length > 0">
      <ul class="products">
      <li class="row" v-for="(productsCart, index) in productsCarts" :key="productsCart.id">
        <div class="col left">
          <div class="thumbnail">
          <router-link :to="'/event/' + productsCart.id">  
            <a>
              <img :src="productsCart.image" :alt="productsCart.title" />
            </a>
          </router-link>  
                  <div class="size" style="display: flex;">   
                    <p style="margin-left: 55px;">
                        <button class="button is-small">
                                  M
                          </button>
                          <button class="button is-small">
                                  L
                          </button>
                          <button class="button is-small">
                                  XL
                          </button>
                    </p> 
                </div>  
          </div>
          <div class="detail">
            <router-link :to="'/event/' + productsCart.id"><div class="name"><a>{{ productsCart.title }}</a></div></router-link>
            <div class="description">{{ productsCart.description }}</div>
            <div class="price">${{ formatPrice(productsCart.price) }}</div>
          </div>
        </div>

        <div class="col right">
          <div class="quantity">
            <input type="number" class="quantity" :value="productsCart.quantity" @input="updateQuantity(index, $event)" @blur="checkQuantity(index, $event)"/>
          </div>
          <!-- @click="removeItem(index)" -->
          <div class="remove">
            <button class="close" data-toggle="modal" data-target="#myModal"  @click="removeItem(index)"><i class="fa fa-times" style="font-size:25px;"></i></button>
          </div>
        </div>
      </li>
    </ul>
    </div>
    <div v-else class="empty-product">
      <h3>There are no products in your cart.</h3>
      <br>
      <button class="shopnow" > <a href="/shop" style="color:white;"> Shopping now </a> </button> 
    </div>
  </section>
  <!-- End Product List -->
  
  <!-- Summary -->
 <section class="container" v-if="productsCarts.length > 0">
    <div class="promotion">
      <label for="promo-code">Enter Discount Code Here:</label>
      <input type="text" id="promo-code" v-model="code" />
      <button type="button" @click="checkPromoCode"></button>
    </div>

    <div class="summary">
      <ul>
        <li>
          Subtotal <span>${{ formatPrice(subTotal) }}</span>
        </li>
        <li v-if="discountRate > 0">
          Discount <span>- ${{ formatPrice(discountPrice) }}</span>
        </li>
        <li>
          Tax <span>+ ${{ formatPrice(tax) }}</span>
        </li>
        <li class="total">
          Total <span>${{ formatPrice(totalPrice) }}</span>
        </li>
      </ul>
    </div>
    <div class="checkout">
      <button type="button">Check Out</button>
    </div>
  </section>
  <!-- End Summary -->
</div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
    productsCarts : this.$store.state.productsCart,
    promotions: [
        {
          code: "yeuvietgangzquauu",
          discount: "50%",
        },
        {
          code: "15hodacdi",
          discount: "45%",
        },
        {
          code: "360phohue",
          discount: "33%",
        },
      ],
      code: "",
      discountRate: 0,
    }
  },
  created() {
    console.log(this.$store.state.productsCart)
    this.$store.dispatch("getProductsCart")
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
        updateQuantity: function(index, event) {
      var product = this.productsCarts[index];
      var value = event.target.value;
      var valueInt = parseInt(value);

      // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
      if (value === "") {
        product.quantity = value;
      } else if (valueInt > 0 && valueInt < 100) {
        product.quantity = valueInt;
      }

      this.$set(this.productsCarts, index, product);
    },
    checkQuantity: function(index, event) {
      // Update quantity to 1 if it is empty
      if (event.target.value === "") {
        var product = this.productsCarts[index];
        product.quantity = 1;
        this.$set(this.productsCarts, index, product);
      }
    },
    removeItem: function(index) {
      let r = confirm("Are you sure about this?");
      if(r === true) this.productsCarts.splice(index, 1);
    },
    checkPromoCode: function () {
      let count = false;
      for (let i = 0; i < this.promotions.length; i++) {
        if (this.code === this.promotions[i].code) {
          this.discountRate = parseInt(
            this.promotions[i].discount.replace("%", "")
          );
          count = true;
        }
      }
      if (!count) {
        alert("Sorry, the Promotional code you entered is not valid!");
      }
    },
  },
  computed: {
    // productsCarts() {       
    //     return this.$store.state.productsCart
    //   },
    tax: function () {
      return this.subTotal / 10;
    },
    itemCount: function() {
      let count = 0;
      for (let i = 0; i < this.productsCarts.length; i++) {
        if (!this.productsCarts[i].quantity) {
             count = this.productsCarts.length;
        }
        else {
        count += this.productsCarts[i].quantity;
        }
      }
      return count;
    },
    subTotal: function () {
      let subTotal = 0;

      for (let i = 0; i < this.productsCarts.length; i++) {
        if (!this.productsCarts[i].quantity) {
            subTotal += 1 * this.productsCarts[i].price;
        }
        else {
        subTotal += this.productsCarts[i].quantity * this.productsCarts[i].price;
        }
      }
      return subTotal;
    },
    totalPrice: function () {
      return this.subTotal - this.discountPrice + this.tax;
    },
    discountPrice: function () {
      return this.subTotal * (this.discountRate / 100);
    },
    },
};
</script>

<style lang="scss" scoped>
#app {
  width: 75%;
  max-width: 960px;
  margin: auto;
}

img {
  max-width: 100%;
  vertical-align: middle;
  border-radius: 4px;
}

a {
  text-decoration: none;
  color: #333333;
}

a:hover {
  color: #ebc417;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

input {
  transition: all 0.25s linear;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

input {
  outline: none;
}

button {
  background-color: #d88d00;
  border: 2px solid #d88d00;
  color: #ffffff;
  transition: all 0.25s linear;
  cursor: pointer;
}

// .container {
//   width: 90%;
//   margin: 0 auto;
//   overflow: auto;
// }

/* --- HEADER --- */
header.container {
  margin-bottom: 1.5rem;
}

header .breadcrumb {
  color: #7d7d7d;
}

header .breadcrumb li {
  float: left;
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
}

header .breadcrumb li:first-child {
  padding-left: 2px;
}

header .breadcrumb li:not(:last-child)::after {
  content: " \276f";
  padding-left: 8px;
}

header .count {
  float: right;
  color: #333333;
  height: 20px;
  line-height: 20px;
}

/* --- PRODUCT LIST --- */
.modal-footer {
  display: flex;
  justify-content: space-between;
}

.shopnow {
    background-color: #d88d00;
  border: 2px solid #d88d00;
  color: #ffffff;
  transition: all 0.25s linear;
  cursor: pointer;
}

.shopnow::after {
  position: relative;
  right: 0;
  content: " \276f";
  transition: all 0.15s linear;
}

.shopnow:hover {
  background-color: #ebc417;
  border-color: #ebc417;
}

.shopnow:hover::after {
  right: -5px;
}

.shopnow:focus {
  outline: none;
}

.empty-product {
  text-align: center;
}

.empty-product > button {
  font-size: 1.3rem;
  padding: 10px 30px;
  border-radius: 5px;
}

.products {
  border-top: 1px solid #ddd;
}

.products > li {
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}

.row {
  position: relative;
  overflow: auto;
  width: 100%;
}

.col,
.quantity,
.remove {
  float: left;
}

.col.left {
  width: 70%;
}

.col.right {
  width: 30%;
  position: absolute;
  right: 0;
  top: calc(50% - 30px);
}

.detail {
  max-width: 100%;
  padding: 0 0.5rem;
  line-height: 2.2rem;
  margin-top: 100px;
}

.detail .name {
  font-size: 1.2rem;
}

.detail .description {
  color: #7d7d7d;
  font-size: 1rem;
}

.detail .price {
  font-size: 1.5rem;
}

.quantity,
.remove {
  width: 50%;
  text-align: center;
}

// .remove {
//   width: 60px;
//   height: 60px;
//   color: #7d7d7d;
// }

.close {
    padding-top: 15px;
    border: none;
    outline: none;
    color: #7d7d7d;
    background-color: white;
}

.quantity > input {
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  left: calc(50% - 30px);
  background: #fff;
  border: 2px solid #ddd;
  color: #7f7f7f;
  text-align: center;
  font: 600 1.5rem Helvetica, Arial, sans-serif;
}

.quantity > input:hover,
.quantity > input:focus {
  border-color: #ebc417;
}

.close:hover {
  border-color: #ebc417;
  color: #ebc417;
}

@media all and (max-width: 599px) {
  .thumbnail img {
    display: none;
  }

  .quantity > input {
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
  }

  .remove svg {
    width: 40px;
    height: 40px;
  }
  .close {
    padding-top: 5px;
  }
  .detail {
    margin-top: 0;
  }
}

@media all 
and (min-width: 600px)
and (max-width: 829px) {
  .detail {
    margin-top: 40px;
  }
}  

@media all and (min-width: 600px) {
  .thumbnail,
  .detail {
    float: left;
  }

  .thumbnail {
    width: 35%;
  }

  .detail {
    width: 65%;
  }
}

/* --- SUMMARY --- */

.promotion,
.summary,
.checkout {
  float: left;
  width: 100%;
  margin-top: 1.5rem;
}

.promotion > label {
  float: left;
  width: 100%;
  margin-bottom: 1rem;
}

.promotion > input {
  float: left;
  width: 80%;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 1.8rem;
  border: 2px solid #d88d00;
  border-radius: 2rem 0 0 2rem;
}

.promotion:hover > input {
  border-color: #ebc417;
}

.promotion > button {
  float: left;
  width: 20%;
  height: 2.73rem;
  border-radius: 0 2rem 2rem 0;
}

.promotion:hover > button {
  border-color: #ebc417;
  background-color: #ebc417;
}

.promotion > button::after {
  content: "\276f";
  font-size: 1rem;
}

.summary {
  font-size: 1.2rem;
  text-align: right;
}

.summary ul li {
  padding: 0.5rem 0;
}

.summary ul li span {
  display: inline-block;
  width: 30%;
}

.summary ul li.total {
  font-weight: bold;
}

.checkout {
  text-align: right;
}

.checkout > button:hover {
  background-color: #ebc417;
}

.checkout > button {
  font-size: 1.2rem;
  padding: 0.8rem 2.8rem;
  border-radius: 1.5rem;
}

.empty-product {
  text-align: center;
}

.empty-product > button {
  font-size: 1.3rem;
  padding: 10px 30px;
  border-radius: 5px;
}

@media all and (min-width: 600px) {
  .summary {
    width: 100%;
  }

  .checkout {
    width: 100%;
  }

  .checkout,
  .summary {
    text-align: right;
  }

  .promotion,
  .summary {
    width: 50%;
  }
}
</style>
