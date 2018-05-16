import api from '@/api'

const requestPayment = function (payParam) {
  return new Promise(function (resolve, reject) {
    wx.requestPayment({
      'timeStamp': payParam.timeStamp,
      'nonceStr': payParam.nonceStr,
      'package': payParam.package,
      'signType': payParam.signType,
      'paySign': payParam.paySign,
      'success': function (res) {
        resolve(res)
      },
      'fail': function (res) {
        reject(res)
      },
      'complete': function (res) {
        reject(res)
      }
    })
  })
}

const payOrder = async (orderId) => {
  let res = await api.payPrepayId(orderId)
  if (res.errno === 0) {
    let pay = requestPayment(res.data)
    return pay
  } else {
    return res
  }
}

export default payOrder
