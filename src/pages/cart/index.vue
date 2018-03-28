<template>
  <div>
    <div class="wu-submit-bar">
      <div class="wu-submit-bar__bar">
        <div class="wu-submit-bar__price">
          <span class="wu-submit-bar__price-text">合计：</span>
          <span class="wu-submit-bar__price-interger">¥35.</span>
          <span class="wu-submit-bar__price-decimal">70</span>
        </div>
        <a class="">结算</a>
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

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
