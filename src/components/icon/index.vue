<template>
  <i class="van-icon" :class="iconCls" v-on="$listeners">
    <div v-if="info" class="van-icon__info">{{ info }}</div>
  </i>
</template>

<script>

export default {
  name: 'WuIcon',

  props: {
    name: String,
    info: String
  },

  computed: {
    iconCls () {
      return `van-icon-${this.name}`
    }

  }
}

</script>
