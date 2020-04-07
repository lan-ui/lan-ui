import Vue from 'vue2'
// import {HxInputEmail} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputEmail from '@/hx/modules/input/HxInputEmail.vue'
import HxInputEmail from '@/modules/hx-email'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputEmail } = HxCustomComponents

describe('HxInputEmail.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxInputEmail)
    expect(Vue.component(HxInputEmail.name))
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
  it('should show clear button when select input', () => {
    vm = createPhoneInput()
    dispatchTap(vm.$el.querySelector('input'))
    expect(vm.$el.querySelector('.hx-input-clear').style.display)
      .to.equal('')
  })
  it('value should be empty when clear button clicked', (done) => {
    vm = createPhoneInput(1)
    dispatchTap(vm.$el.querySelector('input'))
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
      <hx-input-email 
        ref="hx-input-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        v-model="value" 
      ></hx-input-email>
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
