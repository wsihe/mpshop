<template>
  <div>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="250"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>

export default {
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
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}
</style>
