import Vue from 'vue'
import store from '../store/index'

import VueRouter from 'vue-router'
import home from '../views/home'
import sigin from '../views/sign/sigin'
import user from '../views/user/userCenter'
import page1 from '../views/user/children/page1'
import page2 from '../views/user/children/page2'
import page3 from '../views/user/children/page3'
import page4 from '../views/user/children/page4'
import page5 from '../views/user/children/page5'
import detail from '../views/detail'
import community from '../views/community/community'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: home
	}, {
		path: '/home',
		name: 'home',
		component: home
	}, {
		path: '/detail/:id',
		name: 'detail',
		component: detail
	},
	{
		path: '/user',
		name: 'user',
		component: user,
		beforeEnter: (to, from, next) => {
			if (localStorage.getItem("token_access")) {
				next();
			} else {
				next("/sign");
			}
		}
	},
	{
		path: '/sigin',
		name: 'sigin',
		component: sigin
	},
	{
		path: '/community',
		name: 'community',
		component: community
	},
	{
		path: '/page1',
		component: page1
	},
	{
		path: '/page2',
		component: page2
	},
	{
		path: '/page3',
		component: page3
	},
	{
		path: '/page4',
		component: page4
	},
	{
		path: '/page5',
		component: page5
	}
]



const router = new VueRouter({
	mode: 'hash',
	// base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.path == '/home'||to.path == '/' || to.path == '/community' || to.path == '/user') {
		store.commit('changeBackIcon', false)
		next();
	} else {
		store.commit('changeBackIcon', true)
		next();
	}
})

export default router
