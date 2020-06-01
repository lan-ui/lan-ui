import Vue from 'vue2'
// import {HxInputAccountName} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputAccountName from '@/hx/modules/input/HxInputAccountName.vue'
import AccountName from '@/modules/account-name'
import createVue from '../utils/create-vue'
// import e from 'express'
// import { createEvent, dispatchTap} from '../utils/event'

// const { HxInputAccountName } = HxCustomComponents

describe('AccountName.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('账户名组件', () => {
    Vue.use(AccountName)
    expect(Vue.component(AccountName.name))
      .to.be.a('function')
  })
  it('呈现正确的内容', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('hx hx-input-foundation')
    expect(vm.$el.querySelector('input'))
      .to.be.ok
    expect(vm.$el.querySelector('.hx-input-prepend').innerText)
      .to.equal('账户名')
    const input = vm.$el.querySelector('input')
    expect(input.className)
      .to.equal('hx-input-field')
    expect(input.placeholder)
      .to.equal('请输入账户名')
    expect(input.value)
      .to.equal('')
    // expect(input.getAttribute('readonly'))
    //   .to.equal('')
    expect(vm.$props.disabled)
      .to.be.false
    expect(vm.$props.readonly)
      .to.be.false
    // expect(vm.$props.type)
    // .to.be.accountName
  })

  it('触发input', (done) => {
    vm = createPhoneInput(111)
    // const value = '哈哈'
    vm.handleInput(event)
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验1', (done) => {
    vm = createPhoneInput()
    vm.inputCheckAccuntName()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput(111)
    vm.inputCheckAccuntName('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('哈哈')
    vm.inputCheckAccuntName('哈哈')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
})
let event = '111'

function createPhoneInput(value) {
  const vm = createVue({
    template: `
      <lan-account-name
        ref="lan-account-name"
        :placeholder="'请输入账户名'"
        :label="'账户名'"
        v-model="value" 
      ></lan-account-name>
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
