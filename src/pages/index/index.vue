<template lang="pug">
  .container
    swiper.banner(:indicator-dots="true", :autoplay="true" interval="3000" duration="1000")
      swiper-item(v-for="(item, index) in banner", :key="index")
        navigator(:url="item.link")
          image(:src="item.image_url" background-size="cover")

    ul.a-section.a-new(v-if="newGoodsList.length > 0")
      .h
         p.txt 新品首发
      .b
        li.item(v-for="(item, index) in newGoodsList", :key="index")
          div(@click="handleTo(item.id)")
            image.img(:src="item.list_pic_url", background-size="cover")
            p.name {{item.name}}
            p.price ￥{{item.retail_price}}

    ul.a-section.a-popular(v-if="hotGoodsList.length > 0")
      .h
        p.txt 人气推荐
      .b
        li.item(v-for="(item, index) in hotGoodsList", :key="index")
          div(@click="handleTo(item.id)")
            image.img(:src="item.list_pic_url", background-size="cover")
            .right
              .text
                p.name {{item.name}}
                p.desc {{item.goods_brief}}
                p.price ￥{{item.retail_price}}
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
    handleTo (id) {
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

  .a-section {
    width: 750rpx;
    height: auto;
    overflow: hidden;
    background: #fff;
    color: #333;
    margin-top: 20rpx;
  }

  .a-section .h {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 130rpx;
  }

  .a-section .h .txt {
    padding-right: 30rpx;
    background-size: 16.656rpx 27rpx;
    display: inline-block;
    height: 36rpx;
    font-size: 33rpx;
    line-height: 36rpx;
  }

  .a-new .b {
    width: 750rpx;
    height: auto;
    overflow: hidden;
    padding: 0 31rpx 45rpx 31rpx;
  }

  .a-new .b .item {
    float: left;
    width: 302rpx;
    margin-top: 10rpx;
    margin-left: 21rpx;
    margin-right: 21rpx;
  }

  .a-new .b .item-b {
    margin-left: 42rpx;
  }

  .a-new .b .img {
    width: 302rpx;
    height: 302rpx;
  }

  .a-new .b .name {
    text-align: center;
    display: block;
    width: 302rpx;
    height: 35rpx;
    margin-bottom: 14rpx;
    overflow: hidden;
    font-size: 30rpx;
    color: #333;
  }

  .a-new .b .price {
    display: block;
    text-align: center;
    line-height: 30rpx;
    font-size: 30rpx;
    color: #b4282d;
  }

  .a-popular {
    width: 750rpx;
    height: auto;
    overflow: hidden;
  }

  .a-popular .b .item {
    border-top: 1px solid #d9d9d9;
    margin: 0 20rpx;
    height: 264rpx;
    width: 710rpx;
  }

  .a-popular .b .img {
    margin-top: 12rpx;
    margin-right: 12rpx;
    float: left;
    width: 240rpx;
    height: 240rpx;
  }

  .a-popular .b .right {
    float: left;
    height: 264rpx;
    width: 456rpx;
    display: flex;
    flex-flow: row nowrap;
  }

  .a-popular .b .text {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: 264rpx;
    width: 456rpx;
  }

  .a-popular .b .name {
    width: 456rpx;
    display: block;
    color: #333;
    line-height: 50rpx;
    font-size: 30rpx;
  }

  .a-popular .b .desc {
    width: 456rpx;
    display: block;
    color: #999;
    line-height: 50rpx;
    font-size: 25rpx;
  }

  .a-popular .b .price {
    width: 456rpx;
    display: block;
    color: #b4282d;
    line-height: 50rpx;
    font-size: 33rpx;
  }

</style>
