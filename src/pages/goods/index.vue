<template lang="pug">
  .goods
    swiper.goods-imgs(:indicator-dots="true", :autoplay="true" interval="3000" duration="1000")
      swiper-item(v-for="(item, index) in gallery", :key="item.id")
        image.slide-image(:src="item.img_url" background-size="cover")
    .wu-panel
      .wu-cell
        .goods-title {{ goods.name }}
        .goods-price ￥{{goods.retail_price}}
      .wu-cell
        .goods-desc {{ goods.goods_brief }}
      .wu-cell
        .goods-base
          .goods-base-item
            span 剩余：
            span {{ goods.goods_number }}
          .goods-base-item
            span 运费：
            span 免运费
    .wu-panel.goods-detail
      .wu-cell
        .goods-detail-title 产品详情
      .wu-cell
        .goods-detail-content(v-html="goodsDesc")
    .wu-goods-action
      goods-action-btn(size="mini", icon="chat", text="客服")
      goods-action-btn(size="mini", icon="cart", text="购物车", @click="switchTab")
      goods-action-btn(size="big", text="加入购物车", @click="addToCart")
      goods-action-btn(size="big", text="立即购买", primary="", @click="buy")
    .wu-pop.wu-pop--bottom(:class="popCls")
      .wu-pop__mask(@click="buy")
      .wu-pop__container
        .goods-sku
          wu-card(title="标题", desc="描述", num="2", price="2.00", :thumb="imageURL")
          wu-stepper(v-model="number")
          button.wu-btn.wu-btn--danger(@click="handleNext") 下一步
    // wu-popup(v-model="popupVisible")
      .goods-more 121212
</template>

<script>
import api from '@/api'
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
      id: '',
      gallery: [],
      goods: {},
      specificationList: [],
      productList: [],
      goodsDesc: '',
      cartGoodsCount: 0,
      number: 1,
      imageURL: require('@/assets/images/fengmi.png'),
      currentTransition: 'popup-slide-bottom',
      popupVisible: false
    }
  },

  computed: {
    popCls () {
      const cls = this.popupVisible ? 'wu-pop--show' : ''
      return cls
    }
  },

  mounted () {
    wx.showNavigationBarLoading()
    this.getGoodsInfo()
  },

  methods: {
    async getGoodsInfo () {
      this.id = this.$root.$mp.query.id
      let res = await api.goodsDetail(this.id)
      if (res.errno === 0) {
        this.goods = res.data.info
        this.gallery = res.data.gallery
        this.specificationList = res.data.specificationList
        this.productList = res.data.productList
        let goodsDesc = res.data.info.goods_desc.replace(/img/gi, 'IMG class="img_cls"')
        this.goodsDesc = goodsDesc
      }
      wx.hideNavigationBarLoading()
    },

    buy () {
      this.popupVisible = !this.popupVisible
    },
    handleNext () {
      const url = '../order/main'
      wx.navigateTo({ url })
    },
    switchTab () {
      wx.switchTab({
        url: '/pages/cart/main'
      })
    },

    async addToCart () {
      if (this.goods.goods_number < this.number) {
        return false
      }

      // 添加到购物车
      let res = await api.cartAdd(this.goods.id, this.number, this.productList[0].id)
      if (res.errno === 0) {
        wx.showToast({title: '添加成功'})
        this.cartGoodsCount = res.data.cartTotal.goodsCount
      } else {
        wx.showToast({
          image: '/static/img/icon_error.png',
          title: res.errmsg,
          mask: true
        })
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

  .goods {

    &-imgs{
      width: 750rpx;
      height: 750rpx;

      image {
        width: 750rpx;
        height: 750rpx;
      }
    }

    &-title {
      font-size: 16px;
    }
    &-price {
      font-size: 16px;
      color: #f44;
    }

    &-base {
      width: 100%;
      display: flex;
      color: #999;
      font-size: 12px;
      padding: 5px 0;
      text-align: left;

      &-item {
        flex: 1;
      }
    }

    &-detail-content {
      width: 750rpx;
      height: auto;
      overflow: hidden;

      .img_cls {
        width: 750rpx;
        margin-top: 0;
        background-size: cover;
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

  }

</style>
