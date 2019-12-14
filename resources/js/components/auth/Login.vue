<template>
	<div>
		<h2>Login</h2>
		<form @submit.prevent="authenticate">
			email: <input type="email" name="email" v-model="form.email"><br>
			password:<input type="password" name="password" v-model="form.password">
			<button type="submit">SUbmit</button>
		</form>
	</div>
</template>
<script type="text/javascript">
	import {login} from '../../helpers/auth'
	export default{
		name: 'login',
		data(){
			return{
				form: {
					email: '',
					password: '',
				},
				error: null,

			}
		},
		methods:{
			// component to action
			authenticate() {
				this.$store.dispatch('login');
				//data()->form
				login(this.$data.form)
				.then((res)=>{
					this.$store.commit('loggedSuccess',res);
					this.$router.push({path:'/'});

				})
				.catch((error)=>{
					this.$store.commit("loggedFailed",error)
				})
			}
		}
	}

</script>
<style type="text/css" scoped>
	
</style>