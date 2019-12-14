<template>
	<div >
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Logo</a>

  <!-- Links -->
  <ul class="navbar-nav topnavi">
    <li v-for="Link in Links"  >
    <router-link  :to="Link.add" >{{Link.name}}</router-link>
    </li>

    <!-- Dropdown -->
    <template v-if="!currentUser" >
        <li>
          <router-link to="/login" >Login</router-link>
        </li>
        <li>
          <router-link to="/Register" >Register</router-link>

        </li>
        
    </template>  
    <template v-else>  
    <li class="topnav nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        {{currentUser.name}}
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" @click.prevent="logout" href="#">LOGOUT</a>
        <!-- <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a> -->
      </div>
    </li>
    </template>
  </ul>
</nav>

  

    
  </ul>
	</div>
</template>
<script >
	export default{
    data(){
      return{
        Links:[{
          name:"Home",
          add:"/",
          // isActive: false
        },
        {
          name:"About",
          add:"/about",
          // isActive: false
        },
        {
          name:"Contact",
          add:"/contact-us",
          // isActive: false
        },
       
      ]
      }
    },methods: {
      logout(){
        this.$store.commit('logout');
        this.$router.push('/login');
      }
    },computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
          }
   
    }  
</script>

<style type="text/css" scoped>
	body {margin: 0;}


ul.topnavi li a {
  display: block;
  color: green;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}

ul.topnavi li a:hover:not(.active) {background-color: grey;}

ul.topnavi li a.active {background-color: #4CAF50;}




</style>