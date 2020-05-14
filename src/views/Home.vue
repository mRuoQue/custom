<template>
	<div>
		<el-image :src="src"></el-image>
		<nav-icon :list="iconList"></nav-icon>
		<h5 class="pd-lr10">热门</h5>
		<hot :hotList="hotList"></hot>
	</div>
</template>

<script>
	import hot from '@/components/hot'
	import navIcon from '@/components/navIcon'
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				iconList: [],
				hotList: [],
				src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
			}
		},
		components: {
			navIcon,
			hot
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.tabIndex('0');
			})
		},
		created() {
			this.getData();
			this.getHotData();
		},
		methods: {
			...mapMutations(['tabIndex']),
			getData() {
				this.$axios.get('/mock/navIcon.json').then(res => {
					this.iconList = res.data.data.iconList;
				})
			},
			getHotData() {
				this.$axios.get("/mock/hot.json").then(res => {
					this.hotList = res.data.recommendList;
				})
			}
		}
	}
</script>

<style>
	.banner img {
		width: 100%;
	}


	.el-image img {
		height: 200px;
	}
</style>
