<template>
  <div class="customer">

    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="customer-card">
      <div class="customer-card-content">
        <div class="wu-row user-links">
          <wu-col span="6">
            <i class="wu-icon wu-icon-pending-payment"></i>
            待付款
          </wu-col>
          <wu-col span="6">
            <i class="wu-icon wu-icon-pending-orders"></i>
            待接单
          </wu-col>
          <wu-col span="6">
            <i class="wu-icon wu-icon-pending-deliver"></i>
            待发货
          </wu-col>
          <wu-col span="6">
            <i class="wu-icon wu-icon-logistics"></i>
            待发货
          </wu-col>
        </div>
      </div>
    </div>

    <div class="wu-cell-group wu-hairline--top-bottom">
      <div class="wu-cell wu-hairline wu-cell--clickable">
        <div class="wu-cell__title">
          <wu-icon name="records"></wu-icon>
          <span class="wu-cell__text">全部订单</span>
        </div>
        <div class="wu-cell__right-icon">
          <wu-icon name="arrow"></wu-icon>
        </div>
      </div>
      <div class="wu-cell wu-hairline wu-cell--clickable">
        <div class="wu-cell__title">
          <wu-icon name="gold-coin"></wu-icon>
          <span class="wu-cell__text">我的优惠券</span>
        </div>
        <div class="wu-cell__right-icon">
          <wu-icon name="arrow"></wu-icon>
        </div>
      </div>
    </div>

  </div>
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
  .customer {
    background: #f2f2f2;
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
