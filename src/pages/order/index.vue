<template lang="pug">
  .order
    address-card
    .cart-item
      wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
    .wu-cell-group.wu-hairline--top-bottom
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title 配送方式
        .wu-cell__value 免邮费
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title 留言
        .wu-cell__right-icon
    .wu-cell-group
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title
          span 商品金额
          .wu-cell__label 运费
        .wu-cell__value
          span 55.00
          .wu-cell__sub + 0.00
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
    .address-card {
      margin-bottom: 20rpx;
    }
  }
</style>
