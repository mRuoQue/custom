<template>
  <div class="icon-nav">
    <div class="icon">
      <div class="icon-item" v-for="item in list" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
        </div>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navIcon',
    data() {
      return {

      }
    },
    props: {
      list: {
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
  .icon-nav {
    margin: 10px 0;
  }

  .icon {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  .icon-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	padding: 5px 0;
  }

  .icon-img-content {
    width: 2rem;
  }

  .icon-desc {
    line-height: .24rem;
    color: #2C3E50;
    font-size: 16px;
  }
</style>
