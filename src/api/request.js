const request = (url, data = {}, method = 'GET') => new Promise((resolve, reject) => {
  wx.request({
    url,
    data,
    method,
    header: {
      'Content-Type': 'application/json'
    },
    success: res => resolve(res.data),
    fail: res => reject(res)
  })
})

export default request
