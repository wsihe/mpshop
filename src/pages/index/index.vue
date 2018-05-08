<template lang="pug">
  .container
    swiper.banner(:indicator-dots="true", :autoplay="true" interval="3000" duration="1000")
      swiper-item(v-for="(item, index) in banner", :key="index")
        navigator(:url="item.link")
          image(:src="item.image_url" background-size="cover")
    ul.products
      li.products-item(v-for="(item, index) in hotGoodsList", :key="index")
        div(@click="handleViewTo(item.id)")
          img.products-item-img(mode="scaleToFill", :src="item.list_pic_url")
          .products-right
            text.product-title {{item.name}}
            span.product-desc {{item.goods_brief}}
            .product-status
              wu-icon(name="hot-sale")
    ul.products
      li.products-item(v-for="(item, index) in newGoodsList", :key="index")
        div(@click="handleViewTo(item.id)")
          img.products-item-img(mode="scaleToFill", :src="item.list_pic_url")
          .products-right
            text.product-title {{item.name}}
            .product-status
              wu-icon(name="new-arrival")
</template>

<script>
import api from '@/api'
import WuIcon from 'components/icon'

export default {
  components: {
    WuIcon
  },
  data () {
    return {
      banner: [],
      newGoodsList: [],
      hotGoodsList: []
    }
  },

  mounted () {
    this.getIndexData()
  },

  methods: {
    async getIndexData () {
      let res = await api.getIndex()
      if (res.errno === 0) {
        this.banner = res.data.banner
        this.newGoodsList = res.data.newGoodsList
        this.hotGoodsList = res.data.hotGoodsList
      }
    },
    handleViewTo (id) {
      let url = `/pages/goods/main?id=${id}`
      wx.navigateTo({ url })
    }
  }

}
</script>

<style lang="scss">
  .banner {
    width: 750rpx;
    height: 417rpx;

    image {
      width: 100%;
      height: 417rpx;
    }
  }

  .products-item {
    border-radius: 4px;
    margin: 20rpx;
    padding: 10rpx;
    background: #fff;
    box-shadow: 0 6px 25px 0 rgba(182,182,182,0.30);
    .products-item-img {
      width: 100%;
      height: 250rpx;
    }
  }

  .products-right {
    position: relative;
    padding: 10rpx 10rpx 20rpx;
  }
  .product-title {
    margin-left: 10rpx;
  }
  .product-desc {
    display: block;
    margin-top: 10rpx;
    margin-left: 10rpx;
    padding-top: 15rpx;
    border-top: 1px solid #ededed;
    font-size: 14px;
    color: #666;
  }

  .product-status {
    position: absolute;
    top: 10rpx;
    right: 10px;
    .wu-icon {
      font-size: 24px;
    }
    .wu-icon-new-arrival {
      color: #3cc51f;
    }
    .wu-icon-hot-sale {
      color: red;
    }
  }

  .slide-image {
    position:relative;
    width: 100%;
    align-items:center;
    justify-content:center;
  }


</style>
