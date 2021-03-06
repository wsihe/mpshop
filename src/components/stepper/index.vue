<template lang="pug">
  .wu-stepper
    button.wu-stepper__stepper.wu-stepper__minus(:class="{ 'wu-stepper__minus--disabled': isMinusDisabled }", @click="onChange('minus')")
    input.wu-stepper__input(type="number", :value="currentValue", :disabled="disabled || disableInput", @input="onInput")
    button.wu-stepper__stepper.wu-stepper__plus(:class="{ 'wu-stepper__plus--disabled': isPlusDisabled }", @click="onChange('plus')")

</template>

<script>

export default {
  name: 'wuStepper',

  props: {
    value: {},
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data () {
    let value = this.value ? +this.value : +this.defaultValue
    const correctedValue = this.correctValue(value)
    if (value !== correctedValue) {
      value = correctedValue
      this.$emit('input', value)
    }

    return {
      currentValue: value
    }
  },

  computed: {
    isMinusDisabled () {
      const min = +this.min
      const step = +this.step
      const currentValue = +this.currentValue
      return min === currentValue || (currentValue - step) < min || this.disabled
    },

    isPlusDisabled () {
      const max = +this.max
      const step = +this.step
      const currentValue = +this.currentValue
      return max === currentValue || (currentValue + step) > max || this.disabled
    }
  },

  watch: {
    value (val) {
      if (val !== '') {
        val = this.correctValue(+val)
        if (val !== this.currentValue) {
          this.currentValue = val
        }
      }
    }
  },

  methods: {
    correctValue (value) {
      if (Number.isNaN(value)) {
        value = this.min
      } else {
        value = Math.max(this.min, value)
        value = Math.min(this.max, value)
      }

      return value
    },

    onInput (event) {
      const { value } = event.target
      this.currentValue = value ? this.correctValue(+value) : value
      event.target.value = this.currentValue
      this.emitInput()
    },

    onChange (type) {
      if ((this.isMinusDisabled && type === 'minus') || (this.isPlusDisabled && type === 'plus')) {
        this.$emit('overlimit', type)
        return
      }

      const step = +this.step
      const currentValue = +this.currentValue
      this.currentValue = type === 'minus' ? (currentValue - step) : (currentValue + step)
      this.emitInput()
      this.$emit(type)
    },

    emitInput () {
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    }
  }
}
</script>
