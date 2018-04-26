<template lang="pug">
  .address-edit
    wu-field(maxlength="15", placeholder="121", label="121", v-model="data.name",:error="errorInfo.name", @focus="onFocus('name')")
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

  .address-card {

  }

</style>
