<template>
	<div>
		<div class="jumbotron text-center">
  <h1>HOME</h1>
  <p>This is the HomePage</p>
</div>
	</div>
</template>
<script >
	export default
	{
computed: {
            currentUser() {
            	//console.log(this.$store.getters.currentUser)
                return this.$store.getters.currentUser
            }
          }
	}	
</script>
<style type="text/css" scoped>
	
</style>