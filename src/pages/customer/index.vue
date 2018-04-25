<template lang="pug">
  .customer
    .userinfo
      img.userinfo-avatar(v-if="userInfo.avatarUrl", :src="userInfo.avatarUrl", background-size="cover")
      .userinfo-nickname
        card(:text="userInfo.nickName")
    .customer-card
      .customer-card-content
        .wu-row.user-links
          wu-col(span="6")
            i.wu-icon.wu-icon-pending-payment
            | 待付款
          wu-col(span="6")
            i.wu-icon.wu-icon-pending-orders
            | 待接单
          wu-col(span="6")
            i.wu-icon.wu-icon-pending-deliver
            | 待发货
          wu-col(span="6")
            i.wu-icon.wu-icon-logistics
            | 待发货
    .wu-panel
      .wu-cell.wu-cell--access
        .wu-cell__bd 全部订单
        .wu-cell__ft
      .wu-cell.wu-cell--access
        .wu-cell__bd 收货地址
        .wu-cell__ft
      .wu-cell.wu-cell--access
        .wu-cell__bd 我的优惠券
        .wu-cell__ft

</template>

<script>
  import WuCol from 'components/col'
  import WuIcon from 'components/icon'

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {}
      }
    },

    components: {
      WuIcon,
      WuCol
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

<style lang="scss">
  page {
    background-color: #f2f2f2;
    height:100%;
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

  .customer-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .customer-card-content {
    position: relative;
    top: -20rpx;
    width: 650rpx;
    height: 165rpx;
    border-radius: 15rpx;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(213,213,213,0.60);
  }

  .user {
    &-links {
      margin-top: 10px;
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .wu-icon {
        display: block;
        font-size: 24px;
      }
    }
  }

</style>
