import Vue from 'vue'
import Icon from './icon'

const components = [
  Icon
]

const install = function (opts = {}) {
  if (install.installed) return
  components.map(component => {
    console.log(component)
    Vue.component('wu-icon', component)
  })
}

install()

export default {
  version: '0.0.1',
  Icon
}
