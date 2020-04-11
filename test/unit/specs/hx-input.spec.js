import Vue from 'vue2'
import HxInput from '@/modules/hx-input'
import createVue from '../utils/create-vue'
// import { dispatchTap } from '../utils/event'

describe('HxInput.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxInput)
    expect(Vue.component(HxInput.name))
      .to.be.a('function')
  })
  it('触发input', () => {
    vm = createPhoneInput(111)
    // vm.handleFocus()
    vm.$el.querySelector('input').focus()
    vm.handlePwdEye()
    vm.handleClear()
    // setTimeout(() => {
    expect(vm.$el.querySelector('input').value)
      .to.equal('111')
    //   done()
    // })
  })
  it('触发高度自适应', () => {
    const vm = createVue({
      template: `
      <hx-input v-model="value" type='address'></hx-input>
      `,
      data: {
        value: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
      }
    })
    const text = vm.$el.querySelector('textarea')
    vm.autoTextarea(text)
  })
})

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-input v-model="value"></hx-input>
    `,
    data: {
      value: value
    }
  })
  return vm
}
