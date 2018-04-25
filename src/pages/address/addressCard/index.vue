<template lang="pug">
  .address-card(:class="addressCls", @click="onClick")
    .address-card__content
      template(v-if="type === 'add'")
        wu-icon.address-card__icon(name="add2")
        .address-card__text 新增收货地址
      template(v-else-if="type === 'edit'")
        wu-icon.address-card__icon(name="contact")
        .address-card__text
          div {{ name }}，{{ tel }}
          div 收货地址：{{ address }}
    span.address-card__arrow
      wu-icon(name="arrow")
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
    position: relative;
    background-color: #fff;

    &:active {
      background-color: #e8e8e8;
    }

    &--uneditable {
      &:active {
        background-color: #fff;
      }
    }

    &--add {
      line-height: 40px;

      .wu-icon {
        width: 38px;
        color: #38f;
        font-size: 38px;
      }
    }

    &--edit {
      .wu-icon {
        font-size: 18px;
        vertical-align: top;
      }
    }

    &__content {
      padding: 15px 10px;
    }

    .wu-icon,
    &__text {
      display: inline-block;
      vertical-align: middle;
    }

    .wu-icon {
      margin-right: 10px;
    }

    &__text {
      line-height: 20px;
      font-size: 14px;
    }

    &__arrow .wu-icon {
      width: 12px;
      top: 50%;
      right: 0;
      font-size: 12px;
      position: absolute;
      color: #999;
      transform: translate3d(0, -50%, 0);
    }

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 2px;
      background-image: url('data:image/false;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAECAYAAAA3S5neAAAAAXNSR0IArs4c6QAAAIpJREFUOBHF0iESg1AMBNDshx4H0+EUSCxnQKBAVDIMjhnOgO8NOADTI7V/CcjU58ckq/aJQHTYto2u7bpdB3hjXWvb+Ry/jTC6e6CeQBIK6i3KJWfZbHsuDxiTeCCcc+m6SlGFhTnkHcty2J5y+lVM4NHv2D+vxxEkxsGiXHIIf99x95JJPIDcnhMVeyVty5S/SAAAAABJRU5ErkJggg==');
      background-size: 34px 2px;
    }
  }

</style>
