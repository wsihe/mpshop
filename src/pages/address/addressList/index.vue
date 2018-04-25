<template lang="pug">
  .address-list 地址列表
</template>

<script>
import WuIcon from 'components/icon'

export default {
  components: {
    WuIcon
  },

  name: 'addressCard',

  data () {
    return {
      type: 'add',
      tel: '13888888888',
      name: '小茗',
      address: '广州市天河区'
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
    onClick (event) {
    }
  }
}
</script>

<style lang="scss">

  .address-card {

  }

</style>
