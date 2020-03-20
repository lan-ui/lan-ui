import Vue from 'vue2'
// import {HxInputVerification} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputVerification from '@/hx/modules/input/HxInputVerification.vue'
import HxInputVerification from '@/modules/hx-phoneverification'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputPhoneverification } = HxCustomComponents

describe('HxInputVerification.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxInputVerification)
    expect(Vue.component(HxInputVerification.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('hx-input hx-input_normal hx-input-foundation')
    expect(vm.$el.querySelector('input'))
      .to.be.ok
  })
  it('should not show clear button when no text', () => {
    vm = createPhoneInput()
    expect(vm.$el.querySelector('.cubeic-warn'))
      .to.be.null
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
        .is.not.empty
      done()
    }, 50)
  })
})

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-input-verification 
        ref="hx-input-verification"
        :placeholder="'请输入手机验证码'"
        :label="'手机验证码'"
        v-model="value" 
      ></hx-input-verification>
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
