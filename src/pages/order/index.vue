<template lang="pug">
  .order
    address-card
    .cart-item
      wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
    .wu-panel
      .wu-cell
        .wu-cell__bd 配送方式
        .wu-cell__ft 免邮费
      .wu-cell
        .wu-cell__bd 留言
        .wu-cell__ft
    .wu-panel.order-express
      .wu-cell
        .wu-cell__bd
          .wu-cell__text 商品金额
          .wu-cell__desc 运费
        .wu-cell__ft
          .wu-cell__text 55.00
          .wu-cell__desc + 0.00
    .wu-submit-bar
      .wu-submit-bar__bar
        .wu-submit-bar__price.wu-hairline--top
          span.wu-submit-bar__price-text 合计：
          span.wu-submit-bar__price-interger ¥35.
          span.wu-submit-bar__price-decimal 70
        button.wu-button.wu-submit-bar__btn 结算
</template>

<script>
import WuCard from 'components/card'
import WuStepper from 'components/stepper'
import AddressCard from '../address/addressCard'

export default {
  components: {
    AddressCard,
    WuCard,
    WuStepper
  },

  data () {
    return {
      imageURL: require('@/assets/images/fengmi.png')
    }
  },

  created () {
  }
}
</script>

<style lang="scss">
  page {
    background-color: #f2f2f2;
    height:100%;
  }
  .order {
    &-express {
      margin-top: 20rpx;
    }
    .address-card {
      margin-bottom: 20rpx;
    }
  }
</style>
