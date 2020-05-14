<template>
	<div>
		<div v-show="showTabbar" id="tabbar">
			<div class="list">
				<div class="tabItem" v-for="(item,index) in tabLists" :key="index" @click="changeTab(index)">
					<img :src="currentTabIndex==index? item.activeIcon:item.icon" />
					<p>{{item.title}}</p>
				</div>
			</div>
			<!-- <router-view></router-view> -->
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				currentIndex: '0',
				tabLists: [{
						activeColor: "red",
						icon: require('../assets/tabs/home.png'),
						activeIcon: require('../assets/tabs/home1.png'),
						title: "首页"

					},
					{
						activeColor: "red",
						icon: require('../assets/tabs/mune.png'),
						activeIcon: require('../assets/tabs/mune1.png'),
						title: "社区"

					},
					{
						activeColor: "red",
						icon: require('../assets/tabs/my.png'),
						activeIcon: require('../assets/tabs/my1.png'),
						title: "我的"

					}
				]
			}
		},
		computed: { ...mapState(['currentTabIndex','showTabbar'])
		},
		// created() {
		// 	this.currentIndex = this.currentTabIndex;
		// 	console.log(this.currentIndex)
		// },
		methods: {
			changeTab(index) {
				var idx = this.currentTabIndex;
				if (idx == index) {
					return;
				}
				this.currentTabIndex = index;
				this.navPage(index)
			},
			navPage(page) {
				var _me = this;
				switch (page) {
					case 0:
						_me.$router.push({
							name: 'home',
							params: {
								pageId: '0'
							}
						});
						break;
					case 1:
						_me.$router.push({
							name: 'community',
							params: {
								pageId: '1'
							}
						});
						break;
					case 2:
						_me.$router.push({
							name: 'user',
							params: {
								pageId: '2'
							}
						});
						break;
					default:
						_me.$router.push({
							name: 'home',
							params: {
								pageId: '0'
							}
						});
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	#tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		z-index: 99999;
	}

	.list {
		display: flex;
		justify-content: space-around;
		border-top: 1px solid #B4BCCC;
		box-sizing: border-box;
	}

	.tabItem {
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 14px;

		img {
			width: 22px;
			height: 22px;
		}
	}
</style>
