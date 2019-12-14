<template>
    <div class="container">
            <div >{{error}}</div>
            Register
            <form @submit.prevent="register">
                    name: <input type="text" name="text" v-model="form.name"><br>
                     email: <input type="email" name="email" v-model="form.email"><br>
                    password:<input type="password" name="password" v-model="form.password">
                    <button type="submit"">Register</button>
            </form>
        

    </div>
</template>
<script>
    import {register} from '../helpers/auth'
  export default {
    name: 'register',
    data() {
      return {
        form: {
                    name: '',
                    email: '',
                    password: '',
                },
                error: null,
      }
    },
    methods: {
      register() {
        //this.$store.dispatch('login');
                //data()->form
                register(this.$data.form)
                .then((res)=>{
                    // this.$store.commit('loggedSuccess',res);
                    alert("Registration Successful")
                    this.$router.push({path:'/login'});

                })
                .catch((error)=>{
                    this.error = "ERROR in Registration"
                })
      }
    }
  }
</script>