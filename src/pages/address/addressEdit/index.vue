<template lang="pug">
  .address-edit
    .wu-panel
      wu-field(maxlength="15", placeholder="姓名", label="收货人", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      wu-field(maxlength="11", placeholder="手机或者固定电话", label="联系电话", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      picker(mode="region", @change="bindPickerChange", :value="region", :custom-item="customItem")
        .wu-cell.wu-field
          .wu-cell__bd 收货地区
          .wu-cell__ft.address-edit-blue {{region[0]}}，{{region[1]}}，{{region[2]}}
      wu-field(placeholder="如街道、楼层、门牌号等", label="详细地址", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      wu-field(placeholder="邮政编码(选填)", label="邮政编码", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
    .wu-button-group
      button.wu-btn.wu-btn--primary 确定
      button.wu-btn 删除
</template>

<script>
// import { mobile } from '@/utils'
import WuIcon from 'components/icon'
import WuField from 'components/field'

const defaultAddress = {
  name: '',
  tel: '',
  province: '',
  city: '',
  county: '',
  area_code: '',
  postal_code: '',
  address_detail: '',
  is_default: false
}

export default {
  components: {
    WuField,
    WuIcon
  },

  props: {
    isSaving: Boolean,
    isDeleting: Boolean,
    areaList: Object,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultAddress })
    },
    searchResult: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      showArea: false,
      data: {
        ...defaultAddress,
        ...this.addressInfo
      },
      detailFocused: false,
      errorInfo: {
        name: false,
        tel: false,
        address_detail: false,
        postal_code: false
      },
      region: ['广东省', '广州市', '海珠区'],
      customItem: '-请选择-'
    }
  },

  created () {
  },

  computed: {
    addressCls () {
      return `address-card--${this.type}`
    }
  },

  methods: {
    onFocus (key) {
      this.errorInfo[key] = false
      this.detailFocused = key === 'address_detail'
      this.$emit('focus', key)
    },

    bindPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.target.value)
      this.region = e.target.value
    }
  }
}
</script>

<style lang="scss">

  .wu-button-group {
    margin-top: 20rpx;
    padding: 0 20rpx;
  }
  .address-edit-blue {
    color: #3388ff;
  }

</style>
