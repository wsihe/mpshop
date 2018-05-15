<template lang="pug">
  .cart
    ul(v-if="cartGoods.length")
      checkbox-group(@change="checkboxChange")
        li.cart-item(v-for="(item, index) in cartGoods", :key="index")
          label.checkbox
            checkbox.wu-checkbox__icon(:value="item.id", :checked="item.checked === 1")
            wu-card(:title="item.goods_name", :desc="item.desc", :num="item.number", :price="item.retail_price", :thumb="item.list_pic_url")
          wu-stepper(v-model="item.number")
    .no-cart(v-if="!cartGoods.length")
      .c
        image(src="~/assets/icons/icon_cart.png")
        p 购物车空空的！
    .wu-submit-bar
      .wu-submit-bar__bar
        .wu-submit-bar__price.wu-hairline--top
          span.wu-submit-bar__price-text 合计：
          span.wu-submit-bar__price-interger ¥{{cartTotal.checkedGoodsAmount}}
        button.wu-button.wu-submit-bar__btn(@click="goOrder") 下单

</template>

<script>
import api from '@/api'
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
      cartGoods: [],
      cartTotal: {}
    }
  },

  mounted () {
    this.getCartList()
  },

  methods: {
    goOrder () {
      const url = '../order/main'
      wx.navigateTo({ url })
    },
    checkboxChange (e) {
      console.log('checkbox发生change事件，携带value值为：', e.target.value)
    },
    async getCartList () {
      let res = await api.cartList()
      if (res.errno === 0) {
        this.cartGoods = res.data.cartList
        this.cartTotal = res.data.cartTotal
      }

      // this.checkedAllStatus = this.isCheckedAll()
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

    .no-cart{
      width: 100%;
      height: auto;
      margin: 0 auto;
      .c {
        width: 100%;
        height: auto;
        margin-top: 200rpx;
      }

      image {
        margin: 0 auto;
        display: block;
        text-align: center;
        width: 258rpx;
        height: 258rpx;
      }

      p {
        margin: 0 auto;
        display: block;
        width: 258rpx;
        height: 29rpx;
        line-height: 29rpx;
        text-align: center;
        font-size: 29rpx;
        color: #999;
      }
    }

  }
</style>
