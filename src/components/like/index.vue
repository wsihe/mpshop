<template>
  <div class="wu-like">
    <img class="wu-like-img" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" />
    <span class="wu-like-tip">river..等20人觉得赞</span>
    <div class="wu-like-add" :class="addCls" @click="handleClick">
      <transition name="fade">
        <p class="wu-like-show" v-if="show && alreadyTap">+1</p>
        <p class="wu-like-show" v-if="show && !alreadyTap">-1</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {

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
    position: relative;
    margin-top: 20rpx;
  }
  .wu-like-img {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .wu-like-tip {
    margin-left: 10rpx;
    vertical-align: top;
    height: 50rpx;
    line-height: 50rpx;
    font-size: 14px;
    color: #999;
  }
  .wu-like-add {
    position: absolute;
    top: 2rpx;
    right: 20rpx;
    width: 45rpx;
    height: 45rpx;
    background: url("../../assets/icons/icon_like.png");
    background-size: 100%;
  }
  .wu-like-add.active {
    background: url("../../assets/icons/icon_like_hl.png");
    background-size: 100%;
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
