<template lang="pug">
  .wu-like
    .wu-lick-left
      img.wu-like-img(v-if="userInfo.avatarUrl", :src="userInfo.avatarUrl")
      span.wu-like-tip river，小茗...20人喜欢
    .wu-like-add(:class="addCls", @click="handleClick")
      wu-icon(name="like-o")
      transition(name="fade")
        p.wu-like-show(v-if="show && alreadyTap") +1
        p.wu-like-show(v-if="show && !alreadyTap") -1

</template>

<script>
import WuIcon from '../icon'

export default {

  components: {
    WuIcon
  },
  props: ['text'],

  data () {
    return {
      userInfo: {},
      show: false,
      alreadyTap: false
    }
  },

  created () {
    this.getUserInfo()
  },

  computed: {
    addCls () {
      return this.alreadyTap ? 'active' : ''
    }
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
    handleClick () {
      this.alreadyTap = !this.alreadyTap
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 500)
    }
  }
}
</script>

<style>
  .wu-like {
    margin-top: 10rpx;
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65rpx;
    position: relative;
  }
  .wu-like-img {
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
  }
  .wu-like-tip {
    margin-left: 10rpx;
    vertical-align: top;
    font-size: 14px;
    color: #999;
  }
  .wu-like-add {
    position: relative;
    width: 45rpx;
    height: 45rpx;
  }
  .wu-like-add.active {
    color: #3cc51f;
  }
  .wu-like-add.active .wu-like-show{
    color: #3cc51f;
  }
  .wu-like-show {
    position: absolute;
    top: -25rpx;
    left: 10rpx;
    font-size: 12px;
    color: #999;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
