<template lang="pug">
  .goods
    swiper(:indicator-dots="indicatorDots", :autoplay="autoplay", :interval="interval", :duration="duration")
      block(v-for="(item, index) in imgUrls", :key="index")
        swiper-item
          image.slide-image(:src="item", width="375", height="240")
    .wu-cell-group
      .wu-cell.wu-hairline
        .goods-title {{ goods.title }}
        .goods-price {{ formatPrice }}
      .wu-cell.goods-express
        wu-col(span="10") 运费：{{ goods.express }}
        wu-col(span="14") 剩余：{{ goods.remain }}
    .goods-detail
      .goods-detail-title 产品详情
      .goods-detail-content
        | xxx
    .wu-goods-action
      goods-action-btn(size="mini", icon="chat", text="客服")
      goods-action-btn(size="mini", icon="cart", text="购物车")
      goods-action-btn(size="big", text="加入购物车")
      goods-action-btn(size="big", text="立即购买", primary="", @click="buy")
    .wu-pop.wu-pop--bottom(:class="popCls")
      .wu-pop__mask(@click="close")
      .wu-pop__container
        .goods-sku
          wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
          wu-stepper(v-model="value")
          button.wu-btn.wu-btn--danger(@click="handleNext") 下一步
    // wu-popup(v-model="popupVisible")
      .goods-more 121212
</template>

<script>
import GoodsActionBtn from 'components/goods-action'
import WuCol from 'components/col'
import WuCard from 'components/card'
import WuStepper from 'components/stepper'

export default {
  components: {
    WuCard,
    WuStepper,
    WuCol,
    GoodsActionBtn
  },

  data () {
    return {
      value: 1,
      imageURL: require('@/assets/images/fengmi.png'),
      currentTransition: 'popup-slide-bottom',
      popupVisible: false,
      goods: {
        title: '农家蜂蜜（500g/1瓶）',
        price: 11800,
        express: '免运费',
        remain: 19
      },
      imgUrls: [
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png')
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },

  computed: {
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },
    popCls () {
      const cls = this.popupVisible ? 'wu-pop--show' : ''
      return cls
    }
  },

  created () {
  },

  methods: {
    buy () {
      this.popupVisible = true
    },
    close () {
      this.popupVisible = false
    },
    handleNext () {
      const url = '../order/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss">
  .goods {
    background: #f2f2f2;
    padding-bottom: 50px;

    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .wu-cell__value {
        color: #999;
      }
    }

    &-sku {
      position: relative;
      width: 750rpx;
      height: 290rpx;
      background-color: #fff;

      .wu-stepper {
        position: absolute;
        right: 25rpx;
        top: 120rpx;
      }

    }

    swiper {
      height: 240px;
    }

    .slide-image {
      position:relative;
      width: 100%;
      align-items:center;
      justify-content:center;
    }

  }

</style>
