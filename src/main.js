import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['pages/logs/logs', '^pages/index/index'], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#3cc51f',
      navigationBarTitleText: '农家小卖部',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [{
        pagePath: 'pages/index/index',
        iconPath: '～images/icon_component.png',
        selectedIconPath: '～images/icon_component_HL.png',
        text: '首页'
      }, {
        pagePath: 'pages/logs/logs',
        iconPath: '～images/icon_API.png',
        selectedIconPath: '～images/icon_API_HL.png',
        text: '我的'
      }]
    }
  }
}
