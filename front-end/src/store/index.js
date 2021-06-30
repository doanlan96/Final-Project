import {createStore} from 'vuex';
import {useRoute} from 'vue-router';
import axios from 'axios';

const store = createStore({
    state: {
        products: [],
        product: {},
        productsCart: [],
        searchWord: null,
        filteredProducts: null,
    },
    actions: {
        getProducts: async ({commit}) => {
            try {
                const res = await axios.get("/products")
                commit("GET_PRODUCTS", res.data.data)
            } catch (e) {
                console.log(e);
            }
        },
        getProduct: async ({commit}) => {
            const route = useRoute();
            try {
                const res = await axios.get(`products/${route.params.id}`)
                commit("GET_PRODUCT", res.data)
            } catch (e) {
                console.log(e);
            }
        },
        filteredProducts ({ commit }, searchWord) {
            commit('SEARCH_PRODUCT', searchWord)
          },
        getProductsCart ({commit}) {
          commit('GET_PRODUCT_CART')
        },
        addToCart({commit}, product) {
          commit('ADD_TO_CART', product)
        }    
    },
    mutations: {
        GET_PRODUCTS(state, products) {
            state.products = products
        },
        GET_PRODUCT(state, product) {
            state.product = product
        },
        GET_PRODUCT_CART(state, productsCart) {
          state.productsCart = productsCart
      },
        GET_SEARCH_WORD(state, searchWord) {
            state.searchWord = searchWord
        },
        GET_FILTERED_PRODUCTS(state, filteredProducts) {
            state.filteredProducts = filteredProducts
        },
        ADD_TO_CART(state, product) {     
              state.productsCart.push(product);
        },
        SORT_PRODUCT(state, value) {
          if (value === "upward"){
            let up =  state.products.sort((a, b) => {
              return a.price - b.price;
            });
            console.log(up);
            return up;
          }
          if (value === "downward")
            return state.products.sort((a, b) => {
              return b.price - a.price;
            });
          if (value === "nameup")
            return state.products.sort((a, b) => {
                console.log(a)
              return a.title.localeCompare(b.title);
            });
          if (value === "namedown")
            return state.products.sort((a, b) => {
              return b.title.localeCompare(a.title);
            });
          if (value === "")
            return state.products.sort((a, b) => {
              return a.id - b.id;
            });
        },
        CATEGORY_PRODUCT(state, value) {
          if (value === "top"){
            let top =  state.products.filter((product) => {
              return product.category_id === 1;
            });
            state.filteredProducts = top
          }
          if (value === "bottom"){
            let bottom = state.products.filter((product) => {
              return product.category_id === 2;
            });
            // return bottom
            state.filteredProducts = bottom
          }
          if(value === "") {
              state.filteredProducts = state.products
          }
        },
        SEARCH_PRODUCT(state, value) {
            state.searchWord = value;
            state.filteredProducts = state.products.filter(product => {
                return product.title.toLowerCase().match(value.toLowerCase())
              })
        },
        
    },
});

export default store;

