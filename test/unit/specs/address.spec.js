import Vue from 'vue2'
// import {HxInputAddress} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputAddress from '@/hx/modules/input/HxInputAddress.vue'
import Address from '@/modules/address'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputAddress } = HxCustomComponents

describe('Address.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Address)
    expect(Vue.component(Address.name))
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
  // it('should show clear button when select input', () => {
  //   vm = createPhoneInput()
  //   dispatchTap(vm.$el.querySelector('input'))
  //   expect(vm.$el.querySelector('.hx-input-clear').style.display)
  //     .to.equal('')
  // })
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
      <lan-address
      ref="lan-address"
      :placeholder="'请输入街道(小区)门牌号'"
      :label="'详细地址'"
      :readonly="true"
      v-model="value" 
    ></lan-address>
      `,
      data: {
        value: '某某街道某某小区',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('某某街道某某小区')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <lan-address
      ref="lan-address"
      :placeholder="'请输入街道(小区)门牌号'"
      :label="'详细地址'"
      :disabled="true"
      v-model="value" 
    ></lan-address>
      `,
      data: {
        value: '某某街道某某小区',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('某某街道某某小区')
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
    vm.inputCheckAddress()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput('哈哈哈哈哈##')
    vm.inputCheckAddress('哈哈哈哈哈##')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('哈哈')
    vm.inputCheckAddress('哈哈')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('某某小区某某街道')
    vm.inputCheckAddress('某某小区某某街道')
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
      <lan-address 
        ref="lan-address"
        :placeholder="'请输入街道(小区)门牌号'"
        :label="'详细地址'"
        v-model="value" 
      ></lan-address>
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
