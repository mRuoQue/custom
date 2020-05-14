<template>
	<div id="userCenter">
		<div class="user-header">
			<div></div>
			<p style="margin-top: 100px;" v-if="isLogin">{{username}}</p>
			<p style="margin-top: 100px;" v-else @click="goLogin">请登录</p>
			<p>普通会员</p>
			<div class="userImg">
				<img src="../../assets/a3.png" />
			</div>
		</div>
		<div class="user-nav">
			<div>
				<i class="el-icon-star-on"></i>
				<p>关注</p>
			</div>
			<div>
				<i class="el-icon-folder-opened"></i>
				<p>账单</p>
			</div>
			<div>
				<i class="el-icon-folder-opened"></i>
				<p>金额</p>
			</div>
		</div>
		<div class="user-list">
			<div class="ucenter-line"></div>
			<router-link to="/page1" tag="div" class="set-item pd-lr10">
				<div class="set-item-left">
					<i class="el-icon-star-on grace-blue"></i>
					<p>支付</p>
				</div>
				<i class="el-icon-arrow-right"></i>
			</router-link>
			<div class="ucenter-line"></div>
			<router-link  to="/page2" tag="div" class="set-item pd-lr10">
				<div class="set-item-left">
					<i class="el-icon-s-goods grace-yellow"></i>
					<p>卡包</p>
				</div>
				<i class="el-icon-arrow-right"></i>
			</router-link>
			<router-link  to="/page3" tag="div" class="set-item pd-lr10">
				<div class="set-item-left">
					<i class="el-icon-picture-outline grace-light-yellow"></i>
					<p>相册</p>
				</div>
				<i class="el-icon-arrow-right"></i>
			</router-link>
			<div class="ucenter-line"></div>
			<router-link  to="/page4" tag="div" class="set-item pd-lr10">
				<div class="set-item-left">
					<i class="el-icon-setting grace-blue"></i>
					<p>设置</p>
				</div>
				<i class="el-icon-arrow-right"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { mapState,mapMutations } from 'vuex'
	export default {
		name: "userCenter",
		data() {
			return {

			}
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.tabIndex('2');
			})
		},
		computed:{
			...mapState(['isLogin','username'])
		},
		// created() {
		// 	const token_access=localStorage.getItem('token_access');
		// },
		methods:{
			...mapMutations(['tabIndex']),
			goLogin(){
				this.$router.push('/sigin');
			}
		}
	}
</script>

<style lang="scss">
	#userCenter {
		background-color: #F4F5F6;
	}

	.user-header {
		position: relative;
		height: 160px;
		background-color: #FD5179;
		text-align: center;

		p {
			font-size: 16px;
			color: #FFFFFF;

			&:nth-child(2) {
				display: inline-block;
				background: rgba(254, 219, 207, 0.3);
				padding: 5px;
				border-radius: 50%;
			}
		}
	}

	.userImg {
		position: absolute;
		bottom: 0;
		left: 24px;
		margin-bottom: -44px;

		img {
			width: 88px;
			height: 88px;
		}
	}

	.user-nav {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;

		div {
			padding: 5px 15px;
			color: #A6A9AD;

			p {
				font-size: 16px;
			}
		}
	}
	.set-item{
		display: flex;
		justify-content: space-between;
		height: 40px;
		background: #FFFFFF;
		align-items: center;
		border-bottom: 1px solid #E9E9EB;
		font-size: 18px;
		color: #606266;
		.set-item-left{
			display: flex;
			justify-content: flex-start;
			p {
				margin-left: 20px;
			}
		}
	}
</style>
