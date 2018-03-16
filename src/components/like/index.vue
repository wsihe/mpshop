<template>
  <div class="userinfo">
    <img class="userinfo-img" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" />
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

<style>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userinfo-img {
    width: 28rpx;
    height: 28rpx;
    margin: 10rpx;
    border-radius: 50%;
  }
</style>
