<template lang="pug">
  .address-edit
    .wu-panel
      .wu-cell.wu-field
        input.input(v-model="address.name", placeholder="姓名", auto-focus)
      .wu-cell.wu-field
        input.input(v-model="address.mobile", placeholder="手机或者固定电话")
      .wu-cell.wu-field
        input.input(v-model="address.full_region", placeholder="省份、城市、区县", @click="openSelectRegion")
      .wu-cell.wu-field
        input.input(v-model="address.address", placeholder="如街道、楼层、门牌号等")

    .wu-button-group
      button.wu-btn.wu-btn--primary(@click="saveAddress") 确定
      button.wu-btn(v-if="showDelete", @click="cancelAddress") 删除

    .wu-pop.wu-pop--bottom(:class="popCls")
      .wu-pop__mask(@click="openSelectRegion")
      .wu-pop__container.region-select
        .hd
          .region-selected
            .item(@click="selectRegionType(index)" v-for="(item, index) in selectRegionList", :key="item.id") {{item.name}}
          .done(@click="doneSelectRegion") 确定
        .bd
          .region-list
            .item(@click="selectRegion(index)", v-for="(item, index) in regionList", :key="item.id") {{item.name}}

</template>

<script>
import api from '@/api'
import { showErrorToast } from '@/utils'
import WuIcon from 'components/icon'
import WuField from 'components/field'

export default {
  components: {
    WuField,
    WuIcon
  },

  data () {
    return {
      addressId: 0,
      address: {
        id: 0,
        province_id: 0,
        city_id: 0,
        district_id: 0,
        full_region: '',
        address: '',
        name: '',
        mobile: '',
        is_default: 0
      },
      popupVisible: false,
      selectRegionList: [
        { id: 0, name: '省份', parent_id: 1, type: 1 },
        { id: 0, name: '城市', parent_id: 1, type: 2 },
        { id: 0, name: '区县', parent_id: 1, type: 3 }
      ],
      regionType: 1,
      regionList: [],
      selectRegionDone: false,
      showDelete: false
    }
  },

  mounted () {
    this.getRegionList(1)
  },

  computed: {
    popCls () {
      const cls = this.popupVisible ? 'wu-pop--show' : ''
      return cls
    }
  },

  methods: {

    openSelectRegion () {
      this.popupVisible = !this.popupVisible
    },

    async getRegionList (regionId) {
      let regionType = this.regionType
      let res = await api.regionList(regionId)
      if (res.errno === 0) {
        this.regionList = res.data.map(item => {
          if (regionType === item.type && this.selectRegionList[regionType - 1].id === item.id) {
            item.selected = true
          } else {
            item.selected = false
          }
          return item
        })
      }
    },

    selectRegionType (regionTypeIndex) {
      let selectRegionList = this.selectRegionList
      // 判断是否可点击
      if (regionTypeIndex + 1 === this.regionType || (regionTypeIndex - 1 >= 0 && selectRegionList[regionTypeIndex - 1].id <= 0)) {
        return false
      }
      this.regionType = regionTypeIndex + 1
      let selectRegionItem = selectRegionList[regionTypeIndex]
      this.getRegionList(selectRegionItem.parent_id)
      this.setRegionDoneStatus()
    },

    selectRegion (regionIndex) {
      let regionItem = this.regionList[regionIndex]
      let regionType = regionItem.type
      let selectRegionList = this.selectRegionList
      selectRegionList[regionType - 1] = regionItem
      if (regionType !== 3) {
        this.selectRegionList = selectRegionList
        this.regionType = regionType + 1
        this.getRegionList(regionItem.id)
      } else {
        this.selectRegionList = selectRegionList
      }
      this.selectRegionList = selectRegionList.map((item, index) => {
        if (index > regionType - 1) {
          item.id = 0
          item.name = index === 1 ? '城市' : '区县'
          item.parent_id = 0
        }
        return item
      })
      this.regionList = this.regionList.map(item => {
        if (this.regionType === item.type && this.selectRegionList[this.regionType - 1].id === item.id) {
          item.selected = true
        } else {
          item.selected = false
        }
        return item
      })

      this.setRegionDoneStatus()
    },

    setRegionDoneStatus () {
      this.selectRegionDone = this.selectRegionList.every(item => {
        return item.id !== 0
      })
    },

    doneSelectRegion () {
      if (this.selectRegionDone === false) {
        return false
      }
      let address = this.address
      let selectRegionList = this.selectRegionList
      address.province_id = selectRegionList[0].id
      address.city_id = selectRegionList[1].id
      address.district_id = selectRegionList[2].id
      address.province_name = selectRegionList[0].name
      address.city_name = selectRegionList[1].name
      address.district_name = selectRegionList[2].name
      address.full_region = selectRegionList.map(item => {
        return item.name
      }).join('')
      this.openSelectRegion()
    },

    cancelAddress () {
      wx.reLaunch({
        url: '/pages/address/addressList/main'
      })
    },

    async saveAddress () {
      let address = this.address
      if (address.name === '') {
        showErrorToast('请输入姓名')
        return false
      }
      if (address.mobile === '') {
        showErrorToast('请输入手机号码')
        return false
      }
      if (address.district_id === 0) {
        showErrorToast('请输入省市区')
        return false
      }
      if (address.address === '') {
        showErrorToast('请输入详细地址')
        return false
      }
      const params = {
        id: address.id,
        name: address.name,
        mobile: address.mobile,
        province_id: address.province_id,
        city_id: address.city_id,
        district_id: address.district_id,
        address: address.address,
        is_default: address.is_default
      }
      try {
        let res = await api.addressSave(params)
        if (res.errno === 0) {
          wx.reLaunch({
            url: '/pages/address/addressList/main'
          })
        }
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss">

  .address-edit .input {
    width: 100%;
    height: 44rpx;
    line-height: 44rpx;
    overflow: hidden;
  }

  .region-select{
    width: 100%;
    height: 600rpx;
    background: #fff;
    position: fixed;
    z-index: 10;
    left:0;
    bottom: 0;
  }

  .region-select .hd{
    box-sizing: border-box;
    height: 108rpx;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    padding: 46rpx 30rpx 0 30rpx;
  }

  .region-select .region-selected{
    float: left;
    height: 60rpx;
    display: flex;
  }

  .region-select .region-selected .item{
    max-width: 140rpx;
    margin-right: 30rpx;
    text-align: left;
    line-height: 60rpx;
    height: 100%;
    color: #333;
    font-size: 28rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .region-select .region-selected .item.disabled{
    color: #999;
  }

  .region-select .region-selected .item.selected{
    color: #b4282d;
  }

  .region-select .done{
    float: right;
    height: 60rpx;
    width: 60rpx;
    border: none;
    background: #fff;
    line-height: 60rpx;
    text-align: center;
    color: #333;
    font-size: 28rpx;
  }

  .region-select .done.disabled{
    color: #999;
  }



  .region-select .bd{
    height: 492rpx;
    width: 100%;
    padding: 0 30rpx;
  }

  .region-select .region-list{
    height: auto;
    overflow: scroll;

  }

  .region-select .region-list .item{
    width: 100%;
    height: 104rpx;
    line-height: 104rpx;
    text-align: left;
    color: #333;
    font-size: 28rpx;
  }

  .region-select .region-list .item.selected{
    color: #b4282d;
  }

  .wu-button-group {
    margin-top: 20rpx;
    padding: 0 20rpx;
  }

</style>
