import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 底部导航
		showTabbar: true,
		currentTabIndex: 0,
		backIconState: true,
		isLogin: false,
		username: ""
	},
	getters: {

	},
	mutations: {
		// 返回导航
		changeBackIcon(state, payload) {
			state.backIconState = payload;
			state.showTabbar = !payload;
		},
		loginState(state, payload) {
			state.isLogin = payload.isLogin
			state.username = payload.name
		},
		// tab
		tabIndex(state, payload) {
			state.currentTabIndex = payload;
		}
	},
	actions: {},
	modules: {}
})
