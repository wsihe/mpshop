<template>
  <div class="container">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <ul class="products">
      <li class="products-item">
        <div @click="bindViewTap">
          <img class="products-item-img" mode="scaleToFill" :src="itemUrl"/>
          <div class="products-right">
            <text class="product-title">纯正蜂蜜</text>
            <span class="product-desc">自家产的土蜂蜜，没任何加工添加</span>
            <div class="product-status">
              <wu-icon name="hot-sale"></wu-icon>
            </div>
          </div>
        </div>
        <like></like>
      </li>
      <li class="products-item">
        <div @click="bindViewTap">
          <img class="products-item-img" mode="scaleToFill" :src="itemUrl"/>
          <div class="products-right">
            <text class="product-title">新鲜荔枝</text>
            <span class="product-desc">新鲜上市的荔枝，接受预定</span>
            <div class="product-status">
              <wu-icon name="new-arrival"></wu-icon>
            </div>
          </div>
        </div>
        <like></like>
      </li>
    </ul>
  </div>
</template>

<script>
import like from 'components/like'
import WuIcon from 'components/icon/index'

export default {
  data () {
    return {
      srcUrl: require('@/assets/images/bg.png'),
      itemUrl: require('@/assets/images/fengmi.png'),
      imgUrls: [
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png')
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },

  components: {
    WuIcon,
    like
  },

  created () {
  },

  methods: {
    bindViewTap () {
      const url = '../goods/goods'
      wx.navigateTo({ url })
    }
  }

}
</script>

<style lang="scss">
  .products-item {
    border-radius: 4px;
    margin: 20rpx;
    padding: 10rpx;
    background: #fff;
    box-shadow: 0 6px 25px 0 rgba(182,182,182,0.30);
    .products-item-img {
      width: 100%;
      height: 250rpx;
    }
  }

  .products-right {
    position: relative;
    padding: 10rpx 10rpx 20rpx;
    border-bottom: 1px solid #ededed;
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

  .product-status {
    position: absolute;
    top: 10rpx;
    right: 10px;
    .wu-icon {
      font-size: 24px;
    }
    .wu-icon-new-arrival {
      color: #3cc51f;
    }
    .wu-icon-hot-sale {
      color: red;
    }
  }

  .slide-image {
    position:relative;
    align-items:center;
    justify-content:center;
  }


</style>
