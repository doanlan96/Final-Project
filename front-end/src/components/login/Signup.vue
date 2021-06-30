<template>
  <div class="container">
    <div class="vue-tempalte">
        <form @submit.prevent="submit" >
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>First Name</label>
                <input type="text" v-model="firstName" class="form-control form-control-lg"/>
            </div>

                        <div class="form-group">
                <label>Last Name</label>
                <input type="text" v-model="lastName" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" v-model="passwordConfirm" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link to="/login">sign in?</router-link>
            </p>
        </form>
    </div>
  </div>  
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

    export default {
        name: 'Signup',
        setup() {
            const firstName = ref('');
            const lastName = ref('');
            const email = ref('');
            const password = ref('');
            const passwordConfirm = ref('');
            const router = useRouter();

            const submit = async () => {
               await axios.post('register', {
                        first_name : firstName.value,
                        last_name : lastName.value,
                        email : email.value,
                        password : password.value,
                        password_confirm : passwordConfirm.value,
                    });
                
                await router.push("/login");
            }

           return {
               firstName,
               lastName,
               email,
               password,
               passwordConfirm,
               submit
           } 
        }
    }
</script>

<style scoped>

.container {
  /* display: flex; */
    max-width: 100%;
    height: 1155px;
    background-image: url("C:/Users/Admin/Desktop/ProjectFinal/front-end/src/assets/beach.jpg");
}
.vue-tempalte {
  background-color: white;
    margin: auto;
    margin-top: 150px;
    padding: 50px 50px 50px 50px;
    width: 400px;
}
</style>