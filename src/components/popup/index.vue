<template lang="pug">
  .wu-pop.wu-pop--bottom(:class="popCls")
    .wu-pop__mask(@click="close")
    .wu-pop__container
    slot
</template>

<script>

export default {
  name: 'WuPopup',

  props: {
    value: Boolean
  },

  data () {
    return {
      popupVisible: this.value
    }
  },

  watch: {
    value (val) {
      this.popupVisible = val
    }
  },

  computed: {
    popCls () {
      const cls = this.popupVisible ? 'wu-pop--show' : ''
      return cls
    }
  },

  methods: {
    close () {
      this.popupVisible = false
    }
  }
}

</script>
