<template>
  <div class="cart">
    <div>da</div>
    <div class="wu-submit-bar">
      <div class="wu-submit-bar__bar">
        <div class="wu-submit-bar__price wu-hairline--top">
          <span class="wu-submit-bar__price-text">合计：</span>
          <span class="wu-submit-bar__price-interger">¥35.</span>
          <span class="wu-submit-bar__price-decimal">70</span>
        </div>
        <a class="wu-button wu-submit-bar__btn">结算</a>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import wuIcon from '@/components/icon'

export default {
  components: {
    wuIcon
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
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
  }
</style>
