import Vue from 'vue2'
import Email from '@/modules/email'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

describe('Email.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Email)
    expect(Vue.component(Email.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('lan lan-input-foundation')
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
    dispatchTap(vm.$el.querySelector('input'))
    expect(vm.$el.querySelector('input').value)
      .is.not.empty
    dispatchTap(vm.$el.querySelector('.lan-input-clear'))
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .is.not.empty
      done()
    }, 50)
  })
  it('回显值只读用法', () => {
    const vm = createVue({
      template: `
      <lan-email 
        ref="lan-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        :readonly="true"
        v-model="value" 
      ></lan-email>
      `,
      data: {
        value: '42351435@qq.com',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('42351435@qq.com')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <lan-email 
        ref="lan-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        :disabled="true"
        v-model="value" 
      ></lan-email>
      `,
      data: {
        value: '42351435@qq.com',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('42351435@qq.com')
  })
  it('触发input', (done) => {
    vm = createPhoneInput(111)
    // const value = '哈哈'
    vm.handleInput('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.lan-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验1', (done) => {
    vm = createPhoneInput('')
    vm.inputCheckEmail('')
    setTimeout(() => {
      expect(vm.$el.querySelector('.lan-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput(111)
    vm.inputCheckEmail('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.lan-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('2313516@qq.com')
    vm.inputCheckEmail('2313516@qq.com')
    setTimeout(() => {
      expect(vm.$el.querySelector('.lan-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
})

function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <lan-email 
        ref="lan-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        v-model="value" 
      ></lan-email>
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
