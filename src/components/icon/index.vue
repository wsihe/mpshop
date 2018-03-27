<template>
  <i class="wu-icon" :class="iconCls" v-on="$listeners">
    <slot></slot>
    <div v-if="info" class="wu-icon__info">{{ info }}</div>
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
      return `wu-icon-${this.name}`
    }

  }
}

</script>
