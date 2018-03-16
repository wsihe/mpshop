<template>
  <div class="container" @click="bindViewTap">
    <div class="home-banner">
      <img class="banner-img" mode="aspectFit" :src="srcUrl"/>
    </div>
    <ul class="products">
      <li class="products-item">
        <img class="" mode="scaleToFill" :src="itemUrl"/>
        <div class="products-right">
          <span class="product-title">农家蜂蜜</span>
          <span class="product-desc">自家产的土蜂蜜，没任何加工添加</span>
        </div>
        <card></card>
      </li>
      <li class="products-item">
        <img class="" mode="scaleToFill" :src="itemUrl"/>
        <div class="products-right">
          <span class="product-title">农家蜂蜜</span>
          <span class="product-desc">自家产的土蜂蜜，没任何加工添加</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      srcUrl: require('@/assets/images/bg.png'),
      itemUrl: require('@/assets/images/fengmi.png')
    }
  },

  components: {
    card
  },

  created () {
  },

  methods: {
    bindViewTap () {
      // const url = '../logs/logs'
      // wx.navigateTo({ url })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  }

}
</script>

<style scoped>
  .banner-img {
    margin-top: -10rpx;
    width: 750rpx;
    height: 270rpx
  }
  .products-item {
    border-radius: 4px;
    margin: 20rpx;
    padding: 10rpx;
    background: #fff;
    box-shadow: 0 6px 25px 0 rgba(182,182,182,0.30);
  }
  .products-item img {
    width: 200rpx;
    height: 150rpx;
  }
  .products-right {
    display: inline-block;
    vertical-align: top;
  }
  .product-title {
    margin-left: 10rpx;
    font-size: 14px;
    color: #666;
  }
  .product-desc {
    display: block;
    margin-top: 10rpx;
    margin-left: 10rpx;
    font-size: 12px;
    color: #999;
  }

</style>
