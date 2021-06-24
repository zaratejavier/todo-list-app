<template>
  <div class="login-form">
    
      <div class="container">
        <div class="row"> 
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div  class="login-card login">
        <form action="#" @submit.prevent="login" class="form-group">
            <h1 class="login-heading">Login</h1>
        <input type="email" name="username" placeholder="Email" id="username" class="form-control" v-model="username" required>
     
        <input type="password" name="password" placeholder="Password" id="password" class="form-control" v-model="password" required>
      <div v-if="wrongLogin" class="validation">{{ message }}</div>

        <button type="submit" class="btn btn-success">Login</button>

      </form>
            </div>
          </div>
    </div>
  </div>

  </div>
</template>

<script>


export default{
  name: 'login',
  data(){
    return{
      username: '',
      password: '',
      wrongLogin: false,
      message:"Wrong password! Please try again"
    }
  },
  methods: {
    login(){
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password
      })
      .then(() => {
          this.$router.push('/todo')
        })
      .catch(() => {
        this.wrongLogin = true;
        var v = this;
            setTimeout(function () {
                v.message = "";
            }, 2000);
      })
    },
     mounted () {
      this.callFunction()
    }
  }
}
</script>

<style>

p {
   line-height: 1rem;
}

.card {
   padding: 25px;
}

.form-group input{
      margin-bottom: 20px;
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
}

 h1 {
      margin-bottom: 1.5rem;
   }

.container{
  margin: 150px;
}

.validation{
  color: red;
font-size: 15px;
}

body {
  font-family: sans-serif;
  background-image: url('https://images.pexels.com/photos/2837579/pexels-photo-2837579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>

