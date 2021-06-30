<template>
  <div class="container">
    <div class="vue-tempalte">
        <form  @submit.prevent="submit">
            <label>Sign In</label>
            <div class="form-group text-left">
                <label>Email address</label>
                <input type="email" v-model="form.email" class="form-control form-control-lg" />
            </div>

            <div class="form-group text-left">
                <label>Password</label>
                <input type="password" v-model="form.password" class="form-control form-control-lg" />
            </div>

            <button class="btn btn-dark btn-lg btn-block">Sign In</button>

            <p class="sign-up text-center mt-5 mb-4">
               Do not have an account?
                <router-link to="/login/signup">Sign up</router-link>
            </p>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/login/forgotpassword">Forgot password ?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    
    </div>
  
  </div>  
</template>

<script>
import {reactive} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

    export default {
        name: 'Login',
        props: ['renderComponent'],
        data() {
          return {
          form: reactive({
            email: '',
            password: ''
          }),
          router: useRouter()
          }
        },
        methods: {
          async submit() {
            await axios.post('login',{
                email : this.form.email,
                password: this.form.password
            });
          await this.$forceUpdate();
          this.router.push("/");
          },
        },
        // setup() {
        //   const form = reactive({
        //     email : '',
        //     password: ''
        //   }); 
          
        //   const router = useRouter();

        //   const submit = async () => {
        //     await axios.post('login',{
        //         email : form.email,
        //         password: form.password
        //     });
        //     update
        //     await router.push("/");
        //   }  
          
        //   return {
        //     form,
        //     submit
        //   }
        // }
    }
</script>

<style scoped>

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

.container {
  /* display: flex; */
    max-width: 100%;
    height: 1303px;
    background-image: url("C:/Users/Admin/Desktop/ProjectFinal/front-end/src/assets/chantroi.jpg");
}
.vue-tempalte {
  background-color: white;
    margin: auto;
    margin-top: 150px;
    padding: 50px 50px 50px 50px;
    width: 400px;
}


.form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}

</style>