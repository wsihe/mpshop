<template lang="pug">
  .address-edit
    .wu-panel
      wu-field(maxlength="15", placeholder="名字", label="收货人", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      wu-field(maxlength="15", placeholder="手机或者固定电话", label="联系电话", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      wu-field(maxlength="15", placeholder="如街道、楼层、门牌号等", label="详细地址", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
      wu-field(maxlength="15", placeholder="邮政编码(选填)", label="邮政编码", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
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
      }
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

    onClick (event) {
    }
  }
}
</script>

<style lang="scss">

  .wu-button-group {
    margin-top: 20rpx;
    padding: 0 20rpx;
  }

</style>
