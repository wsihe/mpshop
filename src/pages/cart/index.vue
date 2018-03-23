<template>
  <div>
    <wu-icon name="success"></wu-icon>
    购物车
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
