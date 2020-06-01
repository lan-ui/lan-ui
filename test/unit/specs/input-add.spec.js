import Vue from 'vue2'
import InputAdd from '@/modules/input-add'
import createVue from '../utils/create-vue'
// import { dispatchTap } from '../utils/event'

describe('InputAdd.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(InputAdd)
    expect(Vue.component(InputAdd.name))
      .to.be.a('function')
  })
  it('触发input', (done) => {
    vm = createPhoneInput(111)
    // vm.handleFocus()
    vm.$el.querySelector('input').focus()
    vm.handlePwdEye()
    vm.handleClear()
    // dispatchTap(vm.handleClear())
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .to.equal('')
      done()
    })
  })
  it('触发高度自适应', () => {
    const vm = createVue({
      template: `
      <lan-input-add v-model="value" type='address'></lan-input-add>
      `,
      data: {
        value: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
      }
    })
    const text = vm.$el.querySelector('textarea')
    vm.autoTextarea(text)
  })
})

function createPhoneInput(value) {
  const vm = createVue({
    template: `
      <lan-input-add v-model="value"></lan-input-add>
    `,
    data: {
      value: value
    }
  })
  return vm
}
