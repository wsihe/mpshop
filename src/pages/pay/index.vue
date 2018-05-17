<template lang="pug">
  .pay-result
    .pay-success(v-if="status")
      .msg 付款成功
      .btns
        navigator.btn(url="", open-type="redirect") 查看订单
        navigator.btn(url="/pages/index/main", open-type="switchTab") 继续逛
    .pay-error(v-if="!status")
      .msg 付款失败
      .tips
        p
          span 请在
          .time 1小时
          span  内完成付款
        p 否则订单将会被系统取消
      .btns
        navigator.btn(url="", open-type="redirect") 查看订单
        .btn(@click="payOrder") 重新付款
</template>

<script>
import { showErrorToast } from '@/utils'
import payOrder from '@/api/pay'

export default {
  components: {
  },

  data () {
    return {
      status: false,
      orderId: ''
    }
  },

  mounted () {
    this.orderId = this.$root.$mp.query.orderId || 24
    this.status = this.$root.$mp.status
  },

  methods: {
    async payOrder () {
      try {
        let res = await payOrder(parseInt(this.orderId))
        console.log(res)
        this.status = true
      } catch (e) {
        showErrorToast('支付失败')
      }
    }
  }
}
</script>

<style lang="scss">
  .pay-result {
    background: #fff;

    .msg {
      text-align: center;
      margin: 100rpx auto;
      color: #2bab25;
      font-size: 36rpx;
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn {
      text-align: center;
      height: 80rpx;
      margin: 0 20rpx;
      width: 200rpx;
      line-height: 78rpx;
      border: 1px solid #868686;
      color: #000000;
      border-radius: 5rpx;
    }

    .pay-error {
      .msg {
        color: #b4282d;
        margin-bottom: 60rpx;
      }
      .tips {
        color: #7f7f7f;
        margin-bottom: 70rpx;
      }
      p {
        font-size: 24rpx;
        line-height: 42rpx;
        text-align: center;
      }
    }

  }

</style>
