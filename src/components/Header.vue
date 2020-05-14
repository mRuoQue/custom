<template>
	<div class="header">
		<div class="header-pos" :style="{'background':headerBg}">
			<div class="go-icon" v-show="isShow">
				<i class="el-icon-back" @click="goBack"></i>
			</div>
			<div class="title">{{title}}</div>
		</div>
		<div class="placeholder"></div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			title: {
				type: String,
				default: "m-app"
			},
			// isShow: {
			// 	type: Boolean,
			// 	default: true
			// },
			headerBg: {
				type: String,
				default: "#FFFFFF"
			}
		},
		computed:{
			isShow(){
				return this.$store.state.backIconState;
			}
		},
		methods: {
			goBack() {
				let currentRouterPath = this.$router.currentRoute.path;
				console.log(currentRouterPath)
				if (currentRouterPath == '/home' || currentRouterPath == '/community' || currentRouterPath ==
					'/user') {
					// this.$router.push(currentRouterPath);
					return;
				}
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.header-pos {
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		height: 44px;
		line-height: 44px;
	}

	.go-icon {
		display: inline-block;
		width: 2.5rem;
	}

	.title {
		display: inline-block;
		text-align: center;
		font-size: 14px;
	}
	.placeholder{
		height: 44px;
		width: 100vw;
	}
</style>
