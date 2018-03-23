<template>
  <div class="page-customer">

    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="page-customer-card">
      <div class="page-customer-card-content"></div>
    </div>

  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {}
      }
    },

    components: {
      card
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
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style scoped>
  page-customer {
  }
  .userinfo {
    display: flex;
    padding: 20rpx;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #3cc51f;
  }

  .userinfo-avatar {
    width: 108rpx;
    height: 108rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #fff;
  }

  .page-customer-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-customer-card-content {
    position: relative;
    top: -20rpx;
    width: 650rpx;
    height: 200rpx;
    border-radius: 15rpx;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(213,213,213,0.60);
  }

</style>
