import request from './request'

/**
 * API 公共请求模块
 * @return {Object}
 */
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
      return request.post(url, params, 'POST')
    },

    /**
     * put 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    put  (url, params, headers) {
      return request.put(url, params, 'put')
    },

    /**
     * delete 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    delete (url, params, headers) {
      return request.delete(url, 'delete')
    }
  }
}
