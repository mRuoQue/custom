<template>
	<div class="hot-list pd-lr10">
		<div v-for="item in hotList" :key="item.id">
			<router-link tag="div" :to="`/detail/${item.id}`" class="hot-item clearfix">
				<div class="item-img fl"><img :src="item.imgUrl" /></div>
				<div class="item-des fr">
					<p class="item-des-title">{{item.title}}</p>
					<p class="item-des-p">{{item.desc}}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Hot',
		props: {
			hotList: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		methods: {

		}
	}
</script>


<style>
	.clearfix:after {
		content: "";
		height: 0;
		line-height: 0;
		display: block;
		visibility: hidden;
		clear: both;
	}

	.hot-item {
		width: 100%;
		border-bottom: 1px solid #A6A9AD;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.item-img {
		width: 40%;
	}

	.item-img img {
		width: 100%;
		height: 120px;
	}

	.item-des {
		width: 55%;
		height: 120px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	.item-des p {
		font-size: 16px;
	}

	.item-des-title {
		font-size: 24px;
		font-weight: bold;
	}

	.item-des-p {
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
