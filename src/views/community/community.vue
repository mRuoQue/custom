<template>
	<div>
			社区....
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.tabIndex('1');
			})
		},
		methods:{
			...mapMutations(['tabIndex']),
		}
	}
</script>

<style scoped>

</style>