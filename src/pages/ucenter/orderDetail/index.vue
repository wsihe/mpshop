<template lang="pug">
  .container
    .order-info
      .item-a 下单时间：{{orderInfo.add_time}}
      .item-b 订单编号：{{orderInfo.order_sn}}
      .item-c
        .l
          | 实付：
          text.cost ￥{{orderInfo.actual_price}}
        .r
          .btn(@click="cancelOrder") 取消订单
          .btn.active(@click="payOrder") 去付款
    .order-goods
      .h
        .label 商品信息
        .status {{orderInfo.order_status_text}}
      .goods
        .item(v-for="item in orderGoods", :key="item.id")
          .img
            image(:src="item.list_pic_url")
          .info
            .t
              p.name {{item.goods_name}}
              p.number x{{item.number}}
            .attr {{item.goods_specifition_name_value}}
            .price ￥{{item.retail_price}}
    .order-bottom
      .address
        .t
          p.name {{orderInfo.consignee}}
          p.mobile {{orderInfo.mobile}}
        .b {{orderInfo.full_region + orderInfo.address}}
      .total
        .t
          p.label 商品合计：
          p.txt ￥{{orderInfo.goods_price}}
        .t
          p.label 运费：
          p.txt ￥{{orderInfo.freight_price}}
      .pay-fee
        p.label 实付：
        p.txt ￥{{orderInfo.actual_price}}

</template>

<script>
import api from '@/api'
import payOrder from '@/api/pay'

export default {

  data () {
    return {
      orderId: '',
      orderInfo: {},
      orderGoods: [],
      handleOption: {}
    }
  },

  mounted () {
    this.orderId = this.$root.$mp.query.orderId
    this.getOrderDetail()
  },

  methods: {
    async getOrderDetail () {
      let res = await api.orderDetail(this.orderId)
      if (res.errno === 0) {
        this.orderInfo = res.data.orderInfo
        this.orderGoods = res.data.orderGoods
        this.handleOption = res.data.handleOption
      }
    },
    async payOrder () {
      try {
        const orderId = this.orderId
        let res = await payOrder(parseInt(orderId))
        console.log(res)
        wx.redirectTo({
          url: `/pages/pay/main?status=1&orderId=${orderId}`
        })
      } catch (e) {
        // do something
      }
    }
  }
}
</script>

<style lang="scss">
  page{
    height: 100%;
    width: 100%;
    background: #f4f4f4;
  }

  .order-info{
    padding-top: 25rpx;
    background: #fff;
    height: auto;
    overflow: hidden;
  }

  .item-a{
    padding-left: 31.25rpx;
    height: 42.5rpx;
    padding-bottom: 12.5rpx;
    line-height: 30rpx;
    font-size: 30rpx;
    color: #666;
  }

  .item-b{
    padding-left: 31.25rpx;
    height: 29rpx;
    line-height: 29rpx;
    margin-top: 12.5rpx;
    margin-bottom: 41.5rpx;
    font-size: 30rpx;
    color: #666;
  }

  .item-c{
    margin-left: 31.25rpx;
    border-top: 1px solid #f4f4f4;
    height: 103rpx;
    line-height: 103rpx;
  }

  .item-c .l{
    float: left;
  }

  .item-c .r{
    height: 103rpx;
    float: right;
    display: flex;
    align-items: center;
    padding-right: 16rpx;
  }

  .item-c .r .btn{
    float: right;
  }

  .item-c .cost{
    color: #b4282d;
  }

  .item-c .btn{
    line-height: 66rpx;
    border-radius: 5rpx;
    text-align: center;
    margin: 0 15rpx;
    padding: 0 20rpx;
    height: 66rpx;
  }

  .item-c .btn.active{
    background: #b4282d;
    color: #fff;
  }

  .order-goods{
    margin-top: 20rpx;
    background: #fff;
  }

  .order-goods .h{
    height: 93.75rpx;
    line-height: 93.75rpx;
    margin-left: 31.25rpx;
    border-bottom: 1px solid #f4f4f4;
    padding-right: 31.25rpx;
  }

  .order-goods .h .label{
    float: left;
    font-size: 30rpx;
    color: #333;
  }

  .order-goods .h .status{
    float: right;
    font-size: 30rpx;
    color: #b4282d;
  }

  .order-goods .item{
    display: flex;
    align-items: center;
    height: 192rpx;
    margin-left: 31.25rpx;
    padding-right: 31.25rpx;
    border-bottom: 1px solid #f4f4f4;
  }

  .order-goods .item:last-child{
    border-bottom: none;
  }

  .order-goods .item .img{
    height: 145.83rpx;
    width: 145.83rpx;
    background: #f4f4f4;
  }

  .order-goods .item .img image{
    height: 145.83rpx;
    width: 145.83rpx;
  }

  .order-goods .item .info{
    flex: 1;
    height: 145.83rpx;
    margin-left: 20rpx;
  }

  .order-goods .item .t{
    margin-top: 8rpx;
    height: 33rpx;
    line-height: 33rpx;
    margin-bottom: 10.5rpx;
  }

  .order-goods .item .t .name{
    display: block;
    float: left;
    height: 33rpx;
    line-height: 33rpx;
    color: #333;
    font-size: 30rpx;
  }

  .order-goods .item .t .number{
    display: block;
    float: right;
    height: 33rpx;
    text-align: right;
    line-height: 33rpx;
    color: #333;
    font-size: 30rpx;
  }

  .order-goods .item .attr{
    height: 29rpx;
    line-height: 29rpx;
    color: #666;
    margin-bottom: 25rpx;
    font-size: 25rpx;
  }

  .order-goods .item .price{
    height: 30rpx;
    line-height: 30rpx;
    color: #333;
    font-size: 30rpx;
  }

  .order-bottom{
    margin-top: 20rpx;
    padding-left: 31.25rpx;
    height: auto;
    overflow: hidden;
    background: #fff;
  }

  .order-bottom .address{
    height: 128rpx;
    padding-top: 25rpx;
    border-bottom: 1px solid #f4f4f4;
  }

  .order-bottom .address .t{
    height: 35rpx;
    line-height: 35rpx;
    margin-bottom: 7.5rpx;
  }

  .order-bottom .address .name{
    display: inline-block;
    height: 35rpx;
    width: 140rpx;
    line-height: 35rpx;
    font-size: 25rpx;
  }

  .order-bottom .address .mobile{
    display: inline-block;
    height: 35rpx;
    line-height: 35rpx;
    font-size: 25rpx;
  }

  .order-bottom .address .b{
    height: 35rpx;
    line-height: 35rpx;
    font-size: 25rpx;
  }

  .order-bottom .total{
    height: 106rpx;
    padding-top: 20rpx;
    border-bottom: 1px solid #f4f4f4;
  }

  .order-bottom .total .t{
    height: 25rpx;
    line-height: 25rpx;
    margin-bottom: 7.5rpx;
    display: flex;
  }

  .order-bottom .total .label{
    width: 140rpx;
    display: inline-block;
    height: 35rpx;
    line-height: 35rpx;
    font-size: 25rpx;
  }

  .order-bottom .total .txt{
    flex: 1;
    display: inline-block;
    height: 35rpx;
    line-height: 35rpx;
    font-size: 25rpx;
  }

  .order-bottom .pay-fee{
    height: 81rpx;
    line-height: 81rpx;
  }

  .order-bottom .pay-fee .label{
    display: inline-block;
    width: 140rpx;
    color: #b4282d;
  }

  .order-bottom .pay-fee .txt{
    display: inline-block;
    width: 140rpx;
    color: #b4282d;
  }
</style>
