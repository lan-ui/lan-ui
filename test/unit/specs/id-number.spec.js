import Vue from 'vue2'
// import {HxInputIdcard} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputIdcard from '@/hx/modules/input/HxInputIdcard.vue'
import IdNumber from '@/modules/id-number'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputIdcard } = HxCustomComponents

describe('IdNumber.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(IdNumber)
    expect(Vue.component(IdNumber.name))
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
      <lan-id-number 
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :readonly="true"
        v-model="value" 
      ></lan-id-number>
      `,
      data: {
        value: '230339199705043726',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('230339199705043726')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <lan-id-number 
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :disabled="true"
        v-model="value" 
      ></lan-id-number>
      `,
      data: {
        value: '230339199705043726',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('230339199705043726')
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
    vm.inputCheckIdcard()
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput(111)
    vm.inputCheckIdcard('111')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput('230229199502042020')
    vm.inputCheckIdcard('230229199502042020')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('触发clickEye', (done) => {
    const vm = createVue({
      template: `
      <lan-id-number 
      ref="lan-id-number"
      :placeholder="'请输入身份证号码'"
      :label="'身份证号码'"
      :readonly="true"
      :eye="eye"
      v-model="value" 
    ></lan-id-number>
      `,
      data: {
        value: '235335199002082726',
        eyeVal: [],
        eye: true
      }
    })
    vm.clickEye(e)
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .to.equal('235335199002082726')
      vm.clickEye(!e)
      setTimeout(() => {
        expect(vm.$el.querySelector('input').value)
          .to.equal('2353**********2726')
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
      <lan-id-number 
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        v-model="value" 
      ></lan-id-number>
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
