<template lang="pug">
  .container
    swiper(:indicator-dots="indicatorDots", :autoplay="autoplay", :interval="interval", :duration="duration")
      block(v-for="(item, index) in banner", :key="index")
        swiper-item
          image.slide-image(:src="item.image_url", width="355", height="150")
    ul.products
      li.products-item
        div(@click="bindViewTap")
          img.products-item-img(mode="scaleToFill", :src="itemUrl")
          .products-right
            text.product-title 纯正蜂蜜
            span.product-desc 自家产的土蜂蜜，没任何加工添加
            .product-status
              wu-icon(name="hot-sale")
      li.products-item
        div(@click="bindViewTap")
          img.products-item-img(mode="scaleToFill", :src="itemUrl")
          .products-right
            text.product-title 新鲜荔枝
            span.product-desc 新鲜上市的荔枝，接受预定
            .product-status
              wu-icon(name="new-arrival")
</template>

<script>
import indexApi from '@/api/home'
import WuIcon from 'components/icon'

export default {
  components: {
    WuIcon
  },
  data () {
    return {
      banner: [],
      srcUrl: require('@/assets/images/bg.png'),
      itemUrl: require('@/assets/images/fengmi.png'),
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },

  mounted () {
    this.getIndexData()
  },

  methods: {
    async getIndexData () {
      let res = await indexApi.getIndex()
      if (res.errno === 0) {
        this.banner = res.data.banner
      }
    },

    bindViewTap () {
      const url = '../goods/main'
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
  }
  .product-title {
    margin-left: 10rpx;
  }
  .product-desc {
    display: block;
    margin-top: 10rpx;
    margin-left: 10rpx;
    padding-top: 15rpx;
    border-top: 1px solid #ededed;
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
    width: 100%;
    align-items:center;
    justify-content:center;
  }


</style>
