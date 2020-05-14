<template>
	<div id="app">
		<Header></Header>
		<Tabbar></Tabbar>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import Tabbar from "@/components/tabbar.vue"
	export default {
		name: 'app',
		data() {
			return {
				title: "m-app"
			}
		},
		created() {

		},
		components: {
			// Home,
			Header,
			Tabbar
		}

	}
</script>

<style>
	body,
	div,
	p,
	ul,
	li {
		margin: 0;
		padding: 0;
	}

	.pd-lr10 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.mg-lr10 {
		margin-left: 10px;
		margin-right: 10px;
	}

	.ucenter-line {
		width: 100%;
		height: 10px;
		background: #F4F5F6;
	}

	/* 文字颜色 */
	.grace-black {
		color: #333333 !important;
	}

	.grace-black6 {
		color: #666666 !important;
	}

	.grace-black9 {
		color: #999999 !important;
	}

	.grace-white {
		color: #FFFFFF !important;
	}

	.grace-blue {
		color: #3688FF !important;
	}

	.grace-light-blue {
		color: #AFCFFF !important;
	}

	.grace-blue-sky {
		color: #61CBEF !important;
	}

	.grace-gray {
		color: #A5A7B2 !important;
	}

	.grace-red {
		color: #FF0036 !important;
	}

	.grace-yellow {
		color: #FFCC00 !important;
	}

	.grace-light-yellow {
		color: #ECD1A8 !important;
	}

	.grace-green {
		color: #9DD26D !important;
	}

	/* 背景颜色 */
	.grace-bg-black {
		background: #000000 !important;
		color: #FFFFFF !important;
	}

	.grace-bg-white {
		background: #FFFFFF !important;
		color: #333333 !important;
	}

	.grace-bg-blue {
		background: #3688FF !important;
		color: #FFFFFF !important;
	}

	.grace-bg-blue-sky {
		background: #61CBEF !important;
		color: #FFFFFF !important;
	}

	.grace-bg-gray {
		background: #A5A7B2 !important;
		color: #FFFFFF !important;
	}

	.grace-bg-red {
		background: #FF0036 !important;
		color: #FFFFFF !important;
	}

	.grace-bg-green {
		background: #9DD26D !important;
		color: #FFFFFF !important;
	}

	.grace-bg-yellow {
		background: #FFCC00 !important;
		color: #FFFFFF !important;
	}

	.grace-bg-light-blue {
		background: #AFCFFF !important;
		color: #FFFFFF !important;
	}

	.grace-bg-light-yellow {
		background: #ECD1A8 !important;
		color: #FFFFFF !important;
	}

	/* 渐变背景 */
	.grace-gtbg-blue {
		background: linear-gradient(to right, #B100FF, #00B3FF) !important;
		color: #FFFFFF !important;
	}

	.grace-gtbg-pink {
		background: linear-gradient(to right, #FF0066, #CA00FF) !important;
		color: #FFFFFF !important;
	}

	.grace-gtbg-green {
		background: linear-gradient(to right, #39B55A, #8DC63E) !important;
		color: #FFFFFF !important;
	}

	.grace-gtbg-purple {
		background: linear-gradient(to right, #F000EE, #6E00FF) !important;
		color: #FFFFFF !important;
	}

	.grace-gtbg-orange {
		background: linear-gradient(to right, #FFCD00, #FF9B00) !important;
		color: #FFFFFF !important;
	}

	.grace- #app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		margin-bottom: 3.125rem;
	}
</style>
