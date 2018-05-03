<template lang="pug">
  .address-list
    radio-group.address-list__group(:value="value", @input="$emit('input', $event)")
      .wu-panel
        .wu-cell(v-for="(item, index) in list", :key="item.id")
          .wu-cell__value
            label.radio
              radio.wu-radio__input(:name="item.id", @click="$emit('select', item, index)")
              div.wu-radio__label
                .address-list__name {{ item.name }}，{{ item.tel }}
                .address-list__address 收货地址：{{ item.address }}
          .address-list__edit
            wu-icon(name="edit", @click="$emit('edit', item, index)")
    .address-list__add
      .wu-panel(@click="handleAdd")
        .wu-cell.wu-cell--access
          .wu-cell__icon
            wu-icon(name="add")
          .wu-cell__bd 新增收货地址
          .wu-cell__ft
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

  mounted () {
  },

  computed: {
    addressCls () {
      return `address-card--${this.type}`
    }
  },

  methods: {
    onClick (event) {
    },
    handleAdd () {
      const url = '../addressEdit/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss">
  page {
    background-color: #f2f2f2;
  }

  .address-list {
    height: 100%;

    .wu-cell__value {
      color: #333;
      padding-right: 34px;
      position: relative;
    }

    .wu-radio__label {
      margin-left: 32px;
    }

    .wu-radio__input {
      top: 50%;
      left: 0;
      position: absolute;
      transform: translate(0, -50%);
    }

    .wu-icon-checked {
      color: #38f;
    }

    &__group {
      height: 100%;
      overflow-y: scroll;
      padding-bottom: 40px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    }

    &__name {
      font-size: 14px;
      line-height: 1.5;
    }

    &__address {
      font-size: 12px;
      line-height: 1.5;
      color: #666;
    }

    &__edit {
      position: absolute;
      top: 50%;
      right: 15px;
      font-size: 20px;
      color: #999;
      transform: translate(0, -50%);
    }

    &__add {
      left:0;
      right:0;
      bottom:0;
      width:100%;
      z-index:100;
      position:fixed;
      user-select:none;

      .wu-cell__text {
        font-size: 16px;
      }

      .wu-icon-add {
        color: #38f;
        font-size: 20px;
      }
    }
  }

</style>
