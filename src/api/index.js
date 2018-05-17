import request from '@/api/request'
import urls from './urls'
// import { formatUrl } from '@/utils'

export default {
  /**
   * 首页
   * @return {Promise}
   */
  getIndex () {
    return request().get(urls.indexUrl)
  },

  /**
   * 产品详情
   * @param id [产品ID]
   * @return {Promise}
   */
  goodsDetail (id) {
    const params = {
      id
    }
    return request().get(urls.goodsDetail, params)
  },

  /**
   * 添加商品到购物车
   * @param id [产品ID]
   * @return {Promise}
   */
  cartAdd (goodsId, number, productId) {
    const params = {
      goodsId,
      number,
      productId
    }
    return request().post(urls.cartAdd, params)
  },

  /**
   * 获取购物车的数据
   * @return {Promise}
   */
  cartList () {
    return request().get(urls.cartList)
  },

  /**
   * 添加商品到购物车
   * @param addressId [地址ID]
   * @param couponId [优惠券ID]
   * @return {Promise}
   */
  cartCheckout (addressId, couponId) {
    const params = {
      addressId,
      couponId
    }
    return request().get(urls.cartCheckout, params)
  },

  /**
   * 提交订单
   * @param addressId [地址ID]
   * @param couponId [优惠券ID]
   * @return {Promise}
   */
  orderSubmit (addressId, couponId) {
    const params = {
      addressId,
      couponId
    }
    return request().post(urls.orderSubmit, params)
  },
  /**
   * 获取微信统一下单prepay_id
   * @param orderId [订单ID]
   * @return {Promise}
   */
  payPrepayId (orderId) {
    const params = {
      orderId
    }
    return request().get(urls.payPrepayId, params)
  },

  /**
   * 收货地址列表
   * @return {Promise}
   */
  addressList () {
    return request().get(urls.addressList)
  },
  /**
   * 收货地址详情
   * @return {Promise}
   */
  addressDetail (id) {
    const params = {
      id
    }
    return request().get(urls.addressDetail, params)
  },
  /**
   * 删除收货地址
   * @return {Promise}
   */
  addressDelete (id) {
    const params = {
      id
    }
    return request().post(urls.addressDelete, params)
  },
  /**
   * 保存收货地址
   * @return {Promise}
   */
  addressSave (params) {
    return request().post(urls.addressSave, params)
  },
  /**
   * 获取区域列表
   * @return {Promise}
   */
  regionList (parentId) {
    const params = {
      parentId
    }
    return request().get(urls.regionList, params)
  },

  /**
   * 订单列表
   * @return {Promise}
   */
  orderList () {
    return request().get(urls.orderList)
  },
  /**
   * 订单详情
   * @param orderId [订单ID]
   * @return {Promise}
   */
  orderDetail (orderId) {
    const params = {
      orderId
    }
    return request().get(urls.orderDetail, params)
  },
  /**
   * 取消订单
   * @param orderId [订单ID]
   * @return {Promise}
   */
  orderCancel (orderId) {
    const params = {
      orderId
    }
    return request().post(urls.orderCancel, params)
  }
}
