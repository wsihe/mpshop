<template lang="pug">
  .cart
    ul
      checkbox-group(@change="checkboxChange")
        li.cart-item(v-for="(item, index) in goods")
          label.checkbox
            checkbox.wu-checkbox__icon(:value="item.id", :checked="item.checked")
            wu-card(:title="item.title", :desc="item.desc", :num="item.num", :price="item.price", :thumb="item.thumb")
          wu-stepper(v-model="item.num")
    .wu-submit-bar
      .wu-submit-bar__bar
        .wu-submit-bar__price.wu-hairline--top
          span.wu-submit-bar__price-text 合计：
          span.wu-submit-bar__price-interger ¥35.
          span.wu-submit-bar__price-decimal 70
        button.wu-button.wu-submit-bar__btn 结算

</template>

<script>
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
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        checked: true,
        thumb: require('@/assets/images/pingguo.jpeg')
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        checked: true,
        thumb: require('@/assets/images/pingguo.jpeg')
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        checked: true,
        thumb: require('@/assets/images/pingguo.jpeg')
      }]
    }
  },

  created () {
  },

  methods: {
    checkboxChange (e) {
      console.log('checkbox发生change事件，携带value值为：', e.target.value)
    }
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
      background-color: #fafafa;
      margin-bottom: 25rpx;

      .wu-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -15px;
      }

      .wu-card {
        margin-left: 32px;
      }

      .wu-stepper {
        position: absolute;
        right: 25rpx;
        bottom: 20rpx;
      }
    }
  }
</style>
