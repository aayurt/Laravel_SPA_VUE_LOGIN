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

export const routes = [
{
	path: '/',
	component: Home,
	meta: {
		//before each use garna lai
		requiresAuth: true,
	}
},
{
	path: '/login',
	component: Login,
	
},
{
	path: '/register',
	component: Register,
	
},
{
	path: '/about',
	component: About,
	meta: {
		//before each use garna lai
		requiresAuth: true,
	}
},
{
	path: '/contact-us',
	component: Contact,
	meta: {
		//before each use garna lai
		requiresAuth: true,
	}
},

]