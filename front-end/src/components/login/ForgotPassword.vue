<template>
  <div class="container">
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>
    </div>
  </div>  
</template>

<script>
    export default {
        name: 'ForgotPassword',
        data() {
            return {}
        }
    }    
</script>

<style scoped>

.container {
  align-items: baseline;
    max-width: 100%;
    height: 1000px;
    background-image: url("C:/Users/Admin/Desktop/ProjectFinal/front-end/src/assets/blacktea.jpg");
}
.vue-tempalte {
  background-color: white;
    margin: auto;
    margin-top: 200px;
    padding: 50px 50px 50px 50px;
    width: 400px;
}
</style>