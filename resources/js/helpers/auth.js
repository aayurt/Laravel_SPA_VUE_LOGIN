export function login(credentials) {
	return new Promise((res,rej) =>{
		axios.post('/api/auth/login',credentials)
		.then((response)=>{
			console.log(response.data)
			res(response.data)
		})
		.catch((err)=>{
			rej("Wrong Email or Password bhayo.")
		})

	} )
}
export function register(credentials) {
	return new Promise((res,rej) =>{
		axios.post('/api/auth/register',credentials)
		.then((response)=>{
			console.log(response.data)
			res(response.data)
		})
		.catch((err)=>{
			rej("Wrong Email or Password bhayo.")
		})

	} )
}
export function getLocalUser() {
	const userStr = localStorage.getItem("user");

	if (!userStr ) {
		return null;
		//if no user returns null meaning new login must be done
	}
	return JSON.parse(userStr);
}