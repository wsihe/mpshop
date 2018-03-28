<template>
  <div class="goods">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="250"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="wu-cell-group">
      <div class="wu-cell wu-hairline">
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice }}</div>
      </div>
      <div class="wu-cell goods-express">
        <wu-col span="10">运费：{{ goods.express }}</wu-col>
        <wu-col span="14">剩余：{{ goods.remain }}</wu-col>
      </div>
    </div>
    <div class="wu-goods-action">
      <goods-action-btn size="mini" icon="chat" text="客服"></goods-action-btn>
      <goods-action-btn size="mini" icon="cart" text="购物车"></goods-action-btn>
      <goods-action-btn size="big" text="加入购物车"></goods-action-btn>
      <goods-action-btn size="big" text="立即购买" primary></goods-action-btn>
    </div>
  </div>
</template>

<script>
import GoodsActionBtn from 'components/goods-action'
import WuCol from 'components/col'

export default {
  components: {
    WuCol,
    GoodsActionBtn
  },

  data () {
    return {
      goods: {
        title: '农家蜂蜜（500g/1瓶）',
        price: 11800,
        express: '免运费',
        remain: 19
      },
      imgUrls: [
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png'),
        require('@/assets/images/bg.png')
      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },

  computed: {
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2)
    }
  },

  created () {
  },

  methods: {
  }
}
</script>

<style lang="scss">
  .goods {
    background: #f2f2f2;
    padding-bottom: 50px;

    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .wu-cell__value {
        color: #999;
      }
    }
  }

</style>
