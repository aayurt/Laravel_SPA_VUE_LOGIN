import { getLocalUser } from '../helpers/auth.js'

const user = getLocalUser();
export default {
  state: {
  	//current user for logged in User
  	//user is passed from getLocalUser if availaible
  	currentUser: user,
  	isLoggedIn: !!user, //gives boolean
  	loading: false,
  	auth_error: null, //for if any error,
  	customers: [] //object if required

  },getters:{
  	//get fresh data
  	//OR we could use this.$store.state like in components
  	isLoading(state){
  		return state.loading;
  	},
  	isLoggedIn(state){
  		return state.isLoggedIn ;
  	},
  	currentUser(state){
  		return state.currentUser;
  	},
  	auth_error(state){
  		return state.auth_error;
  	},customers(state){
  		return state.customers;
  	}
  }
  ,
  mutations: {
  	login(state){
  		state.loading = true;
  		state.auth_error = null;

  	},
  	loggedSuccess(state,payload){
  		state.auth_error = null;
  		state.isLoggedIn = true;
  		//Login success bhayeko karan
  		state.loading = false;
  		//token rah user current user mah chahiney
  		//passing in one object both user description and access token for whole sessions
      console.log(payload.user+" "+payload.access_token)
  		state.currentUser = Object.assign({},payload.user,{token: payload.access_token});
  		//saving in local storage current user
  		localStorage.setItem("user",JSON.stringify(state.currentUser));
  	},
  	loggedFailed(state,payload){
  		state.loading = false;
  		state.auth_error = payload.error;
  	},logout(state){
  		//localStorage bata user hatako if logged out
  		localStorage.removeItem("user");
  		state.isLoggedIn = false;
  		state.currentUser = null;
  	}
  },
  actions: {
  	login(context){//ascync
  		context.commit('login');//passing from comp to mutation
  	}
  },
  modules: {
  }
}