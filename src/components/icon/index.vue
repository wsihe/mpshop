<template lang="pug">
  i.wu-icon(:class="iconCls", v-on="$listeners")
    slot
    .wu-icon__info(v-if="info") {{ info }}
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
