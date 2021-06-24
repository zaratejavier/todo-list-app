<template>
  <div id="app">
    
<header class="header">
		<h1 class="logo"><a><router-link to="/todo">Todos</router-link></a></h1>
    <ul class="main-nav">
      <li><a><router-link to="/todo">Items</router-link></a></li>
      <li><a><router-link v-if="isAdmin" to="/users">Users</router-link></a></li>
      <li v-if="!loggedIn"><a><router-link to="/login">Login</router-link> </a></li>
      <li v-if="loggedIn" style="float:right"><a><router-link to="/logout">Sign out</router-link></a></li>
    </ul>
</header>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    }
  }
};
</script>

<style>


* {
	box-sizing: border-box;
}
body {
	font-family: 'Montserrat', sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2,
h3,
a {
	color: #34495e;
}

a:link, a:visited, a:active  {
	text-decoration: none;
}



.logo {
	margin: 0;
	font-size: 1.45em;
}


.main-nav {
	margin-top: 5px;

}
.logo a,
.main-nav a {
	padding: 10px 15px;
	text-transform: uppercase;
	text-align: center;
	display: block;
}

.main-nav a {
	color: #34495e;
	font-size: .99em;
}

.main-nav a:hover {
	color: #718daa;
}



.header {
	padding-top: .5em;
	padding-bottom: .5em;
	border: 1px solid #a2a2a2;
	background-color: #f4f4f4;
	-webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}

@media (min-width: 769px) {
	.header,
	.main-nav {
		display: flex;
	}
	.header {
		flex-direction: column;
		align-items: center;
	}

}

@media (min-width: 1025px) {
	.header {
		flex-direction: row;
		justify-content: space-between;
	}

}


</style>
