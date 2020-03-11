import Vue from 'vue'

export default function componentExtender(name, SuperComponent, options = {}) {
  /**
   * 错误处理
   */

  return Vue.component(name, {
    extends: SuperComponent,
    ...options
  })
}

// import componentExtender from '../componentExtender'

// const CubeInputWithConsole = componentExtender('cube-input-with-console', Input, {
//   data() {
//     return {
//       inputValue: '1234'
//     }
//   },
//   methods: {
//     handleFocus(e) {
//       // debugger
//       console.log('packged by extend, this.name:', this.$options.name)
//       this.isFocus = true
//     }
//   }
// })
