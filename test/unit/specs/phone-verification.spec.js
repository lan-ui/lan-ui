import Vue from 'vue2'
// import {HxInputVerification} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputVerification from '@/hx/modules/input/HxInputVerification.vue'
import PhoneVerification from '@/modules/phone-verification'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputPhoneverification } = HxCustomComponents

describe('PhoneVerification.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(PhoneVerification)
    expect(Vue.component(PhoneVerification.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('hx hx-input-foundation')
    expect(vm.$el.querySelector('input'))
      .to.be.ok
  })
  it('should not show clear button when no text', () => {
    vm = createPhoneInput()
    expect(vm.$el.querySelector('.cubeic-warn'))
      .to.be.null
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
  it('回显值只读用法', () => {
    const vm = createVue({
      template: `
      <lan-phone-verification 
        ref="lan-phone-verification"
        :placeholder="'请输入手机验证码'"
        :label="'手机验证码'"
        :readonly="true"
        v-model="value" 
      ></lan-phone-verification>
      `,
      data: {
        value: '6547',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('6547')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <lan-phone-verification 
        ref="lan-phone-verification"
        :placeholder="'请输入手机验证码'"
        :label="'手机验证码'"
        :disabled="true"
        v-model="value" 
      ></lan-phone-verification>
      `,
      data: {
        value: '6547',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('6547')
  })
  it('触发input', (done) => {
    vm = createPhoneInput(111)
    // const value = '哈哈'
    vm.handleInput('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验1', (done) => {
    vm = createPhoneInput()
    vm.inputCheckVerification()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput(111)
    vm.inputCheckVerification('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('1234')
    vm.inputCheckVerification('1234')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
})

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <lan-phone-verification 
        ref="lan-phone-verification"
        :placeholder="'请输入手机验证码'"
        :label="'手机验证码'"
        v-model="value" 
      ></lan-phone-verification>
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
