import Vue from 'vue2'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputPhone from '@/hx/modules/input/HxInputPhone.vue'
import HxPhoneNumber from '@/modules/hx-phone-number'
import createVue from '../utils/create-vue'
import Picker from '@/modules/picker'
import { dispatchTap } from '../utils/event'

// const { HxInputPhone } = HxCustomComponents

describe('HxPhoneNumber.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxPhoneNumber)
    expect(Vue.component(HxPhoneNumber.name))
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
  it('should show clear button when has text 111', () => {
    vm = createPhoneInput(1)
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
  it('引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('回显值只读用法', () => {
    const vm = createVue({
      template: `
      <hx-phone-number
        ref="hx-phone-number"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        :readonly="true"
        v-model="value" 
      ></hx-phone-number>
      `,
      data: {
        value: '13245667865',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('13245667865')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <hx-phone-number
        ref="hx-phone-number"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        :disabled="true"
        v-model="value" 
      ></hx-phone-number>
      `,
      data: {
        value: '13245667865',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('13245667865')
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
  it('校验区号1', (done) => {
    const vm = createVue({
      template: `
        <hx-phone-number
          ref="hx-phone-number"
          :placeholder="'请输入手机号'"
          :label="'手机号'"
          v-model="value" 
        ></hx-phone-number>
      `,
      data: {
        value: '111',
        phoneType: '+852'
      }
    })
    // vm.handleInput('111')
    vm.inputCheckPhone('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验区号2', (done) => {
    const vm = createVue({
      template: `
        <hx-phone-number
          ref="hx-phone-number"
          :placeholder="'请输入手机号'"
          :label="'手机号'"
          v-model="value" 
        ></hx-phone-number>
      `,
      data: {
        value: '',
        phoneType: '+853'
      }
    })
    vm.inputCheckPhone()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验区号3', (done) => {
    const vm = createVue({
      template: `
        <hx-phone-number
          ref="hx-phone-number"
          :placeholder="'请输入手机号'"
          :label="'手机号'"
          v-model="value" 
        ></hx-phone-number>
      `,
      data: {
        value: '',
        phoneType: '+886'
      }
    })
    vm.inputCheckPhone()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验1', (done) => {
    vm = createPhoneInput()
    vm.inputCheckPhone()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput(111)
    vm.inputCheckPhone('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('13245679048')
    vm.inputCheckPhone('13245679048')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('触发clickEye', (done) => {
    const vm = createVue({
      template: `
      <hx-phone-number
        ref="hx-phone-number"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        v-model="value" 
        :readonly="true"
        :eye="eye"
      ></hx-phone-number>
      `,
      data: {
        value: '13425643567',
        eyeVal: [],
        eye: true
      }
    })
    vm.clickEye(e)
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .to.equal('13425643567')
      vm.clickEye(!e)
      setTimeout(() => {
        expect(vm.$el.querySelector('input').value)
          .to.equal('134****3567')
        done()
      })
      done()
    })
  })
})
let e = true
function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-phone-number
        ref="hx-phone-number"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        v-model="value" 
      ></hx-phone-number>
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
