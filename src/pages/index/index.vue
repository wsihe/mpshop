<template>
  <div class="container">
    <div class="home-banner">
      <img class="banner-img" mode="aspectFit" :src="srcUrl"/>
    </div>
    <ul class="products">
      <li class="products-item">
        <div @click="bindViewTap">
          <img class="" mode="scaleToFill" :src="itemUrl"/>
          <div class="products-right">
            <text class="product-title">农家蜂蜜</text>
            <span class="product-desc">自家产的土蜂蜜，没任何加工添加</span>
          </div>
        </div>
        <like></like>
      </li>
      <li class="products-item">
        <div @click="bindViewTap">
          <img class="" mode="scaleToFill" :src="itemUrl"/>
          <div class="products-right">
            <text class="product-title">农家蜂蜜</text>
            <span class="product-desc">自家产的土蜂蜜，没任何加工添加</span>
          </div>
        </div>
        <like></like>
      </li>
    </ul>
  </div>
</template>

<script>
import like from '@/components/like'

export default {
  data () {
    return {
      srcUrl: require('@/assets/images/bg.png'),
      itemUrl: require('@/assets/images/fengmi.png')
    }
  },

  components: {
    like
  },

  created () {
  },

  methods: {
    bindViewTap () {
      const url = '../productDetail/productDetail'
      wx.navigateTo({ url })
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
  }
  .product-desc {
    display: block;
    margin-top: 10rpx;
    margin-left: 10rpx;
    font-size: 14px;
    color: #666;
  }

</style>
