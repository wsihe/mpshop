<template lang="pug">
  .order
    .cart-item
      wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
    .wu-cell-group.wu-hairline--top-bottom
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title
          span.wu-cell__text 配送方式
        .wu-cell__right-icon
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title
          span.wu-cell__text 留言
        .wu-cell__right-icon
      .wu-cell.wu-hairline.wu-cell--clickable
        .wu-cell__title
          span.wu-cell__text 合计
        .wu-cell__right-icon
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

export default {
  components: {
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
  .order {
  }
</style>
