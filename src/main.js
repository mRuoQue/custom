import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/axios'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.prototype.$store=store

// router.beforeEach((to, from, next) => {
// 	if (to.path == '/user/userCenter') {
// 		if (localStorage.getItem("token_access")) {
// 			next();
// 		} else {
// 			next("/sign/sigin");
// 		}
// 	}
// })

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
