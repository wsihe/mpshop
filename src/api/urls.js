const rootUrl = 'http://127.0.0.1:8360/api/'

export default {
  // 微信登录
  authLoginByWeixin: `${rootUrl}auth/loginByWeixin`,

  // 首页
  indexUrl: `${rootUrl}index/index`,

  // 商品详情
  goodsDetail: `${rootUrl}goods/detail`,

  // 获取购物车的数据
  cartList: `${rootUrl}cart/index`,
  // 添加商品到购物车
  cartAdd: `${rootUrl}cart/add`,
  // 更新购物车的商品
  cartUpdate: `${rootUrl}cart/update`,
  // 删除购物车的商品
  cartDelete: `${rootUrl}cart/delete`,
  // 选择或取消选择商品
  cartChecked: `${rootUrl}cart/checked`,
  // 获取购物车商品件数
  cartGoodsCount: `${rootUrl}cart/goodscount`,
  // 下单前信息确认
  cartCheckout: `${rootUrl}cart/checkout`
}
