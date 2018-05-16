<template lang="pug">
  .order
    address-card(:type="addressType", :address="checkedAddress")
    .cart-item(v-for="(good, index) in checkedGoodsList", :key="good.id")
      wu-card(:title="good.goods_name", :num="good.number", :price="good.retail_price", :thumb="good.list_pic_url")
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
          .wu-cell__text ¥{{actualPrice}}
          .wu-cell__desc + 0.00
    .wu-submit-bar
      .wu-submit-bar__bar
        .wu-submit-bar__price.wu-hairline--top
          span.wu-submit-bar__price-text 合计：
          span.wu-submit-bar__price-interger ¥{{actualPrice}}
        button.wu-button.wu-submit-bar__btn(@click="payOrder") 去付款
</template>

<script>
import api from '@/api'
import { showErrorToast } from '@/utils'
import payOrder from '@/api/pay'
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
      addressType: 'add',
      addressId: '',
      couponId: '',
      checkedGoodsList: [],
      checkedAddress: {},
      freightPrice: 0.00,    // 快递费
      actualPrice: 0.00     // 实际需要支付的总价
    }
  },

  mounted () {
    wx.showLoading({
      title: '加载中...'
    })
    let addressId = wx.getStorageSync('addressId')
    if (addressId) {
      this.addressId = addressId
    }
    this.getCheckoutInfo()
  },

  methods: {
    async getCheckoutInfo () {
      let res = await api.cartCheckout(this.addressId, this.couponId)
      if (res.errno === 0) {
        this.checkedGoodsList = res.data.checkedGoodsList
        this.checkedAddress = res.data.checkedAddress
        this.actualPrice = res.data.actualPrice
        this.freightPrice = res.data.freightPrice

        this.addressType = this.checkedAddress.id > 0 ? 'edit' : 'add'
      }
      wx.hideLoading()
    },
    async payOrder () {
      try {
        let res = await api.orderSubmit(this.addressId, this.couponId)
        // console.log(JSON.stringify(res))
        if (res.errno === 0) {
          const orderId = res.data.orderInfo.id
          let res2 = await payOrder(parseInt(orderId))
          console.log(res2)
          wx.redirectTo({
            url: `/pages/pay/main?status=1&orderId=${orderId}`
          })
        } else {
          showErrorToast('下单失败')
        }
      } catch (e) {
        // do something
      }
    }
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
