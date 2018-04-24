import Vue from 'vue'
import App from './App'
// import initWuui from './components/index'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// initWuui()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页
    pages: [
      'pages/goods/main',
      '^pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#3cc51f',
      navigationBarTitleText: '家有特产',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: 'static/img/icon_index.png',
          selectedIconPath: 'static/img/icon_index_hl.png',
          text: '首页'
        },
        {
          pagePath: 'pages/cart/main',
          iconPath: 'static/img/icon_cart.png',
          selectedIconPath: 'static/img/icon_cart_hl.png',
          text: '购物车'
        },
        {
          pagePath: 'pages/customer/main',
          iconPath: 'static/img/icon_my.png',
          selectedIconPath: 'static/img/icon_my_hl.png',
          text: '我的'
        }
      ]
    }
  }
}
