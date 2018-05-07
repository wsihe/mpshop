import request from '@/api'
import urls from './urls'
// import { formatUrl } from '@/utils'

export default {
  /**
   * 首页
   * @return {Promise}
   */
  getIndex () {
    return request().get(urls.indexUrl)
  }
}
