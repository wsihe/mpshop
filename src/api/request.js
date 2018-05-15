import urls from './urls'
/**
 * 调用微信登录
 */
const login = function () {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          // 登录远程服务器
          console.log(res)
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

const getUserInfo = function () {
  return new Promise(function (resolve, reject) {
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        console.log(res)
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

const request = (url, data = {}, method = 'GET') => new Promise((resolve, reject) => {
  wx.request({
    url,
    data,
    method,
    header: {
      'Content-Type': 'application/json',
      'X-Nideshop-Token': wx.getStorageSync('token')
    },
    success: res => {
      if (res.statusCode === 200) {
        if (res.data.errno === 401) {
          let code = null
          return login().then((res) => {
            code = res.code
            return getUserInfo()
          }).then((userInfo) => {
            // 登录远程服务器
            request(urls.authLoginByWeixin, { code: code, userInfo: userInfo }, 'POST').then(res => {
              if (res.errno === 0) {
                wx.setStorageSync('userInfo', res.data.userInfo)
                wx.setStorageSync('token', res.data.token)
                resolve(res)
              } else {
                reject(res)
              }
            }).catch((err) => {
              reject(err)
            })
          }).catch((err) => {
            reject(err)
          })
        } else {
          resolve(res.data)
        }
      } else {
        reject(res.errMsg)
      }
    },
    fail: res => reject(res)
  })
})

export default function () {
  return {

    /**
     * get 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    get (url, params, headers) {
      return request(url, params)
    },

    /**
     * post 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    post (url, params, headers) {
      return request(url, params, 'POST')
    },

    /**
     * put 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    put  (url, params, headers) {
      return request(url, params, 'put')
    },

    /**
     * delete 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    delete (url, params, headers) {
      return request(url, 'delete')
    }
  }
}
