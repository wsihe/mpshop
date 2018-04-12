<template lang="pug">
  .cart
    ul
      li.cart-item
        wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
        wu-stepper(v-model="value")
      li.cart-item
        wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
        wu-stepper(v-model="value")
    .wu-submit-bar
      .wu-submit-bar__bar
        .wu-submit-bar__price.wu-hairline--top
          span.wu-submit-bar__price-text 合计：
          span.wu-submit-bar__price-interger ¥35.
          span.wu-submit-bar__price-decimal 70
        a.wu-button.wu-submit-bar__btn 结算

</template>

<script>
import { formatTime } from '@/utils/index'
import wuIcon from 'components/icon'
import WuCard from 'components/card'
import WuStepper from 'components/stepper'

export default {
  components: {
    WuStepper,
    WuCard,
    wuIcon
  },

  data () {
    return {
      value: 1,
      logs: [],
      imageURL: require('@/assets/images/fengmi.png')
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style lang="scss">
  page {
    background-color: #f2f2f2;
    height:100%;
  }
  .cart {
    display: block;
    min-height: 100%;
    background-color: #f2f2f2;
    background-size: 100% 100%;

    .cart-item {
      position: relative;
      margin-bottom: 25rpx;

      .wu-stepper {
        position: absolute;
        right: 25rpx;
        bottom: 20rpx;
      }
    }
  }
</style>
