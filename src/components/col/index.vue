<template lang="pug">
  div(:class="colCls")
    slot
</template>

<script>

export default {
  name: 'wuCol',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    colCls () {
      return `wu-col wu-col-${this.span} wu-col-offset-${this.offset}`
    }
  }
}

</script>
