<template>
  <div>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="250"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="wu-goods-action">
      <goods-action-btn size="mini" icon="chat" text="客服"></goods-action-btn>
      <goods-action-btn size="mini" icon="cart" text="购物车"></goods-action-btn>
      <goods-action-btn size="big" text="加入购物车"></goods-action-btn>
      <goods-action-btn size="big" text="立即购买" primary></goods-action-btn>
    </div>
  </div>
</template>

<script>
import GoodsActionBtn from '../../components/goods-action/index'

export default {
  components: { GoodsActionBtn },

  data () {
    return {
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

  created () {
  }
}
</script>

<style>
</style>
