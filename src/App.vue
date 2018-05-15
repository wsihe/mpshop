<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="scss">
  @import "style/index.scss";

  .container {
    display:flex;
    flex-direction:column;
    min-height:100%;
    justify-content: space-between;
    box-sizing: border-box;
    background: #f2f2f2;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

  view,image,text,navigator{
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  view,text{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    font-size: 29rpx;
    color: #333;
  }

</style>
