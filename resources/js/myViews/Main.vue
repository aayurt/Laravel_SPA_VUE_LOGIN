<template>
	<div>
		<my-header ></my-header>
		<keep-alive>
                <router-view></router-view>
    
 		</keep-alive>
		<my-footer></my-footer>
		
	</div>
</template>
<script>
	export default{

	}
</script>
<style type="text/css" scoped>
	div{
		text-align: center;
	}
	.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>