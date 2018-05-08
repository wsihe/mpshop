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
  }
}
