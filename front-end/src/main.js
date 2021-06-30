import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import axios from 'axios';
import store from './store'
// import VuePageTransition from 'vue-page-transition'
// Vue.config.productionTip = false

axios.defaults.baseURL='http://localhost:8000/api/';
axios.defaults.withCredentials = true;

createApp(App)
.use(router)
.use(store).
mount('#app')