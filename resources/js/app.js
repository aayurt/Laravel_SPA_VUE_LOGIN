require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {routes} from './routes'
import storeData from './store/index'

import Home from './myViews/Home.vue'
import About from './myViews/About.vue'
import Contact from './myViews/Contact.vue'
import Post from './myViews/Posts.vue'
import User from './myViews/Users.vue'
import Header from './myComponents/meroHeader.vue'
import Footer from './myComponents/meroFooter.vue'
import Main from './myViews/Main.vue'
import Login from './components/auth/Login.vue'
import Register from './myViews/Register.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
window.Vue = require('vue');

Vue.component('my-header', Header);
Vue.component('my-footer', Footer);
Vue.component('Home', Home);
Vue.component('about', About);
Vue.component('Main', Main);
Vue.component('Login', Login);
const store = new Vuex.Store(storeData)
const router = new VueRouter({
	routes,
	mode: 'history'
});
router.beforeEach((to,from,next)=>{
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const currentUser = store.state.currentUser;
	// console.log(currentUser)
	// console.log("requiresAuth"+" "+requiresAuth)

	if (requiresAuth && !currentUser) {
		//if requires auth and is not the current USER
		alert("You must login")
		next('/login');
 
	}else if(to.path == '/login' && currentUser){
		//if already authenticated
		next('/');
	}else{
		next()
	}
	
})
axios.interceptors.response.use(null, (error) => {
        if (error.resposne.status == 401) {
            store.commit('logout');
            router.push('/login');
        }

        return Promise.reject(error);
    });
   



const app = new Vue({
    el: '#app',
    router,
    template: '<Main/>',
    store
});
