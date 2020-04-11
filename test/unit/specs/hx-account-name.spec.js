import Vue from 'vue2'
// import {HxInputAccountName} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputAccountName from '@/hx/modules/input/HxInputAccountName.vue'
import HxAccountName from '@/modules/hx-account-name'
import createVue from '../utils/create-vue'
// import e from 'express'
// import { createEvent, dispatchTap} from '../utils/event'

// const { HxInputAccountName } = HxCustomComponents

describe('HxAccountName.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('账户名组件', () => {
    Vue.use(HxAccountName)
    expect(Vue.component(HxAccountName.name))
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
  // it('没有内容时清空按钮不显示', () => {
  //   vm = createPhoneInput()
  //   expect(vm.$el.querySelector('.cubeic-warn'))
  //     .to.be.null
  // })
  // it('聚焦时显示清除按钮', () => {
  //   vm = createPhoneInput()
  //   dispatchTap(vm.$el.querySelector('input'))
  //   expect(vm.$el.querySelector('.hx-input-clear').style.display)
  //     .to.equal('')
  // })
  // it('点击清除按钮input值为空', (done) => {
  //   vm = createPhoneInput(1)
  //   expect(vm.$el.querySelector('input').value)
  //     .is.not.empty
  //   dispatchTap(vm.$el.querySelector('.hx-input-clear'))
  //   setTimeout(() => {
  //     expect(vm.$el.querySelector('input').value)
  //       .is.not.empty
  //     done()
  //   }, 50)
  // })
  // it('账户名回显值只读用法', () => {
  //   const vm = createVue({
  //     template: `
  //     <hx-account-name
  //     ref="hx-account-name"
  //     :placeholder="'请输入账户名'"
  //     :label="'账户名'"
  //     :readonly="true"
  //     v-model="value"
  //   ></hx-account-name>
  //     `,
  //     data: {
  //       value: '测试账户',
  //       readonly: false
  //     }
  //   })
  //   const el = vm.$el
  //   expect(vm.$props.readonly)
  //     .to.be.true
  //   expect(el.querySelector('input').value)
  //     .to.equal('测试账户')
  // })
  // it('账户名禁止操作', () => {
  //   const vm = createVue({
  //     template: `
  //     <hx-account-name
  //     ref="hx-account-name"
  //     :placeholder="'请输入账户名'"
  //     :label="'账户名'"
  //     :disabled="true"
  //     v-model="value"
  //   ></hx-account-name>
  //     `,
  //     data: {
  //       value: '测试账户',
  //       disabled: false
  //     }
  //   })
  //   const el = vm.$el
  //   expect(vm.$props.disabled)
  //     .to.be.true
  //   expect(el.querySelector('input').value)
  //     .to.equal('测试账户')
  // })
  // it('提示语校验', () => {
  //   vm = createPhoneInput()
  //   dispatchTap(vm.$el.querySelector('input'))
  //   expect(vm.$el.querySelector('.hx-input-clear').style.display)
  //     .to.equal('')
  // })
  // it('should trigger events', (done) => {
  //   // const vm = createVue({
  //   //   template: `
  //   //     <hx-input-foundation
  //   //       ref="hx-input-foundation"
  //   //       :value="value"
  //   //       :label="label"
  //   //       :type="type"
  //   //       :readonly="readonly"
  //   //       :disabled="disabled"
  //   //       :placeholder="placeholder"
  //   //       :inputCheck="inputCheckAccuntName"
  //   //       :errorInfo="accuntNameErrorInfo"
  //   //       :hxstyle="hxstyle"
  //   //       @input="handleInput"
  //   //     >
  //   //     </hx-input-foundation>
  //   //     `,
  //   //     data: {
  //   //       accuntNameErrorInfo: ''
  //   //     }
  //   //   })
  //   // vm.handleInput(e)
  //   // vm.inputCheckAccuntName(accuntName)
  //   // // const e = createEvent('')
  //   // setTimeout(() => {
  //   //   expect(vm.$el.querySelector('.hx-rule-error'))
  //   //   .to.equal('请输入账户名！')
  //   //   expect(vm.$props.accuntNameErrorInfo)
  //   //   .to.equal('请输入账户名！')
  //   //   done()
  //   // }, 50)
  //   const focusHandler = sinon.spy()
  //   const blurHandler = sinon.spy()
  //   const changeHandler = sinon.spy()
  //   vm = createVue({
  //     template: `
  //     <hx-account-name
  //       ref="hx-account-name"
  //       :placeholder="'请输入账户名'"
  //       :label="'账户名'"
  //       v-model="value"
  //       @focus="focusHandler"
  //       @blur="blurHandler"
  //       @change="changeHandler"
  //     ></hx-account-name>
  //     `,
  //     data: {
  //       value: 'value'
  //     },
  //     methods: {
  //       focusHandler: focusHandler,
  //       blurHandler: blurHandler,
  //       changeHandler: changeHandler
  //     }
  //   })
  //   const input = vm.$el.querySelector('input')
  //   // vm.focusHandler()
  //   dispatchTap(vm.$el.querySelector('input'))
  //   setTimeout(() => {
  //     expect(focusHandler)
  //       .to.be.calledOnce
  //     input.value = 'new value'
  //     // vm.blurHandler()
  //     const e = createEvent('', 'change')
  //     input.dispatchEvent(e)
  //     setTimeout(() => {
  //       expect(blurHandler)
  //         .to.be.calledOnce
  //       expect(changeHandler)
  //         .to.be.calledOnce
  //       done()
  //     })
  //   })
  // })
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

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-account-name
        ref="hx-account-name"
        :placeholder="'请输入账户名'"
        :label="'账户名'"
        v-model="value" 
      ></hx-account-name>
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
