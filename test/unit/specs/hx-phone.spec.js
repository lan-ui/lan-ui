import Vue from 'vue2'
import HxCustomComponents from '@/hx/modules/index'
// import HxInputPhone from '@/hx/modules/input/HxInputPhone.vue'
// import HxInputPhone from '@/modules/HxInputPhone'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

const { HxInputPhone } = HxCustomComponents

describe('HxInputPhone.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxInputPhone)
    expect(Vue.component(HxInputPhone.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('hx-input hx-input-foundation')
    expect(vm.$el.querySelector('input'))
      .to.be.ok
  })
  it('should not show clear button when no text', () => {
    vm = createPhoneInput()
    expect(vm.$el.querySelector('.cubeic-warn'))
      .to.be.null
  })
  it('should show clear button when has text 111', () => {
    vm = createPhoneInput(1)
    expect(vm.$el.querySelector('.hx-input-clear').style.display)
      .to.equal('')
  })
  it('should show clear button when select input', () => {
    vm = createPhoneInput()
    dispatchTap(vm.$el.querySelector('input'))
    expect(vm.$el.querySelector('.hx-input-clear').style.display)
      .to.equal('')
  })
  it('value should be empty when clear button clicked', (done) => {
    vm = createPhoneInput(1)
    expect(vm.$el.querySelector('input').value)
      .is.not.empty
    dispatchTap(vm.$el.querySelector('.hx-input-clear'))
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .is.empty
      done()
    }, 50)
  })
})

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-input-phone 
        ref="hx-input-phone"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        v-model="value" 
      ></hx-input-phone>
    `,
    data: {
      disabled: false,
      readonly: false,
      useClear: {
        visible: true,
        blurHidden: false
      },
      value: value && 'test'
    }
  })
  return vm
}
