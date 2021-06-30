<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-1">GOLDIE</strong>
      </a>
      <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a> -->
    </div>
    <div class="navmobile">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="false"></span>
        <span aria-hidden="false"></span>
        <span aria-hidden="false"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/shop" class="navbar-item">Shop</router-link>
        <router-link to="/about" class="navbar-item">About us</router-link>
      </div>
      <div class="navbar-end" v-if="renderComponent">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/cart">
              <a class="button">              
                <strong
                  ><i class="fa fa-shopping-bag" style="font-size: 38px"></i
                ></strong>
              </a>
            </router-link>
            <div class="user">
              <strong
                  ><i class="fa fa-user" style="font-size: 38px"></i
              ></strong> 
            </div>  
          </div>
        </div>
       <div class="login" v-show="name===''">
              <a class="button" @click="login" data-toggle="modal" data-target="#myModal">
                <strong style="font-size: 18px;">Login</strong>
              </a>   
       </div>   
       <div class="options" v-show="name !=''">
        <div class="greet">  
        <a class="button" data-toggle="modal" data-target="#myModal" @click="profile">
            {{name}}
        </a>
        </div>
        <a class="button" data-toggle="modal" data-target="#myModal" @click="logout">
              Logout
        </a>
      </div>    
      </div>
     </div> 
  </nav>

  <router-view 
  v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view>
</template>
<script>
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: "Nav",
   async mounted() {
       try{
      let { data } = await axios.get("user");
      this.name = data.first_name + " " + data.last_name;
      this.renderComponent  =  await false;
      this.$nextTick( () => {
        this.renderComponent = true;
      })
      this.isLogged = true;
      }catch(e){
        console.log(e);
        this.isLogged = false;
      }
  },
  data() {
      return {
          isLogged: false,
          renderComponent: true,
          name : '',
          router: useRouter()
      }
  },
  methods: {
      async logout(){
              await axios.post("logout");
              this.name = '';
              this.$forceUpdate();
              this.router.push('/');
      },
      forceRender() {
          this.renderComponent = false;
          this.$nextTick(() => {
            this.renderComponent = true;
          })
      },
      login() {
         this.router.push('/login');
    },
    profile() {
         this.router.push('/profile');
    }
  },
  computed: {
  },
};
</script>
<style lang="scss" scoped>
.user {
  margin-left: 50px;
}
.option {
  display: flex;
  align-items: flex-start;
}
.login {
  padding-top: 13px;
}
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
}

.searchTerm {
  width: 100%;
  border: 3px solid #d88d00;
  border-right: none;
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

/*Resize the wrap to see the search bar change!*/
.wrap {
  margin-top: 30px;
  width: 30%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
    &:hover {
      text-decoration: none;
      color: #d88d00;
      transition: 0.5s;
    }
  }
}
//  .navbar-start {
//     margin-left: 330px;
//   }
.navbar-brand {
  display: flex;
  justify-content: space-between;
}
// .navbar-end {
//   margin-right: 100px;
// }

.button {
  border: none;
}
</style>