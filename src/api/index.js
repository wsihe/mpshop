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
  }
}
