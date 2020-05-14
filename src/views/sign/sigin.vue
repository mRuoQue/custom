<template>
	<div>
		<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
			<el-form-item prop="email" label="用户">
				<el-input v-model="username"></el-input>
			</el-form-item>
			<el-form-item v-for="domain in dynamicValidateForm.domains" label='密码' :key="domain.key">
				<el-input v-model="pwd"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm">登录</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		name: 'Sigin',
		data() {
			return {
				dynamicValidateForm: {
					domains: [{
						value: ''
					}],
					email: ''
				},
				username: "",
				pwd: ""
			};
		},
		methods: {
			...mapMutations(['loginState']),
			submitForm() {
				var username = this.username;
				var pwd = this.pwd;
				var data = {
					username: username,
					password: pwd
				}
				this.$axios.post('/users/login', data).then(res => {
					var data = res.data;
					localStorage.setItem("token_access", data.token)
					var payload = {
						isLogin: true,
						name: data.name
					}
					this.loginState(payload);
					this.$router.push('/home')
				})
			}
		}
	}
</script>

<style scoped>
	.demo-dynamic {
		position: absolute;
		top: 200px;
		bottom: 0;
	}

	.el-button {
		width: 120px;
	}
</style>

cons
