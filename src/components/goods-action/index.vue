<template>
  <div :class="goodCls" @click="onClick">
    <wu-icon v-if="icon" :info="info" :name="icon" ></wu-icon>
    <span>{{ text }}</span>
  </div>
</template>

<script>
  import WuIcon from '../icon/index'

  const prefixCls = 'wu-goods-action'
  export default {
    components: {WuIcon},
    name: 'goods-action-btn',

    props: {
      text: String,
      info: String,
      icon: String,
      size: String,
      primary: Boolean
    },
    computed: {
      goodCls () {
        const primaryCls = this.primary ? `${prefixCls}__primary` : ''
        return `wu-hairline ${prefixCls}__${this.size}-btn ${primaryCls}`
      }
    },
    methods: {
      onClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
