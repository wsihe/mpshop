<template lang="pug">
  .address-list
    radio-group.address-list__group(:value="value", @input="$emit('input', $event)")
      cell-group
        cell(v-for="(item, index) in list", :key="item.id", is-link="")
          radio(:name="item.id", @click="$emit('select', item, index)")
            .address-list__name {{ item.name }}，{{ item.tel }}
            .address-list__address 收货地址：{{ item.address }}
          wu-icon.address-list__edit(name="edit", @click="$emit('edit', item, index)")
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
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
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

  .address-list {
    height: 100%;

    .van-cell__value {
      color: $text-color;
      padding-right: 34px;
      position: relative;
    }

    .van-radio__label {
      margin-left: 32px;
    }

    .van-radio__input {
      top: 50%;
      left: 0;
      position: absolute;
      transform: translate(0, -50%);
    }

    .van-icon-checked {
      color: $blue;
    }

    &__group {
      height: 100%;
      overflow-y: scroll;
      padding-bottom: 40px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      background-color: $background-color;
    }

    &__name {
      font-size: 14px;
      line-height: 1.5;
    }

    &__address {
      font-size: 12px;
      line-height: 1.5;
      color: $gray-darker;
    }

    &__edit {
      position: absolute;
      top: 50%;
      right: 15px;
      font-size: 20px;
      color: $gray-dark;
      transform: translate(0, -50%);
    }

    &__add {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 9999;
      padding-left: 15px;

      .van-cell__text {
        font-size: 16px;
      }

      .van-icon-add {
        color: $blue;
        font-size: 20px;
      }
    }
  }

</style>
