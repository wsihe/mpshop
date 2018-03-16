<template>
  <div class="userinfo">
    <img class="userinfo-img" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
  </div>
</template>

<script>
export default {

  props: ['text'],

  data () {
    return {
      userInfo: {}
    }
  },

  created () {
    this.getUserInfo()
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  }
}
</script>

<style scoped>
  .userinfo {
    display: none
  }
  .userinfo-img {
    width: 28rpx;
    height: 28rpx;
    margin: 10rpx;
    border-radius: 50%;
  }
</style>
