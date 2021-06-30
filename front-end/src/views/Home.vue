<template>
  <div class="home">
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
            <h1 class="title">Welcome to the GOLDIE Vietnam</h1>
            <h2 class="subtitle">Make sure you check out our newest drops</h2>
            <div class="button-block">
              <a href="/login/signup" style="text-decoration: none;">              
                <button class="button is-xl is-dark" >Sign Up for More Great Deals</button>
              </a>              
            </div>
           </div>
         </div>
    </section>
      </div>

      <div class="item">
        <img src="https://goldievietnam.com/wp-content/uploads/2020/12/94887712_1081567278878374_7912949777946378240_o-768x328.jpg" alt="Chicago" style="width:100%;  height: 500px;">
      </div>
    
      <div class="item" style="background-color: black;">
        <img src="https://goldievietnam.com/wp-content/uploads/2020/12/LOGO-GOLDIE-e.png" alt="New york" style="width:100%; height: 500px;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <!-- <span class="glyphicon glyphicon-chevron-left"></span> -->
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <!-- <span class="glyphicon glyphicon-chevron-right"></span> -->
      <span class="sr-only">Next</span>
    </a>
  </div>
    <h2 id= "seller" class="subtitle is-3">
        BEST SELLERS
    </h2>
    <EventsList />
  </div>
</template>

<script>
import EventsList from '../components/EventsList.vue';
export default {
  name: 'home',
  components: {
    EventsList
  },
}
</script>

<style lang="scss" scoped>
#myCarousel{
margin: auto;
width: 90%;
height: 100%;
padding: 10px;
}

#seller {
  margin-top: 100px; 
  margin-bottom: -50px;
  text-shadow: 0 0 0;
  color: #c29d17;
}

.item {
  // max-height: 100%;
  max-height: 500px;
}

 .hero {    
    text-align: center;
    background-image: url('https://c4.wallpaperflare.com/wallpaper/669/146/526/hanoi-cityscape-city-sky-wallpaper-preview.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
  .carousel-item {
    height: 400px;
  }
</style>
