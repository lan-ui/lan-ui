import Vue from 'vue2'
import Input from '@/modules/input'
import createVue from '../utils/create-vue'
import { createEvent, dispatchTap } from '../utils/event'

describe('Input.vue', () => {
  let vm
  // 每条测试用例执行之后销毁实例，解除绑定
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Input)
    expect(Vue.component(Input.name))
      .to.be.a('function')
  })
  // 测试input对象
  it('should render correct contents', () => {
    vm = createInput()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-input')
    expect(el.querySelector('input'))
      .to.be.ok
  })
  // input没有内容时不显示class为.cube-input-clear的DOM对象
  it('should not show clear button when no text', () => {
    vm = createInput()
    expect(vm.$el.querySelector('.cube-input-clear'))
      .to.be.null
  })
  // input有内容时应该显示.cube-input-clear的DOM对象
  it('should show clear button when has text', () => {
    vm = createInput(1)
    expect(vm.$el.querySelector('.cube-input-clear').style.display)
      .to.equal('')
  })
  // 测试点击.cube-input-clear时input内容为空
  it('value should be empty when clear button clicked', (done) => {
    vm = createInput(1)
    // 测试input是否为空
    expect(vm.$el.querySelector('input').value)
      .is.not.empty
    dispatchTap(vm.$el.querySelector('.cube-input-clear'))
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .is.empty
      done()
    }, 50)
  })
  // 测试组件属性配置
  it('should support more native props', () => {
    vm = createVue({
      template: `
        <cube-input type="number" :min="1" :max="10" :autocomplete="true" :readonly="true" :disabled="true" v-model="value" />
      `,
      data: {
        value: '1'
      }
    })

    const el = vm.$el.querySelector('input')
    // type为Number时最小值1
    expect(el.min)
      .to.equal('1')
    // type为Number时最大值10
    expect(el.max)
      .to.equal('10')
    // 测试自动补全是否为真
    expect(el.autocomplete)
      .to.equal('true')
      // 测试禁用状态为真
    expect(el.disabled)
      .to.be.true
      // 测试readOnly只读为真
    expect(el.readOnly)
      .to.be.true
      // 测试autofocus为假
    expect(el.autofocus)
      .to.be.false
  })
  // 测试type属性为password，value值为pwd，eye眼睛为真
  it('should show password eye and work correctly', (done) => {
    vm = createVue({
      template: `
        <cube-input type="password" v-model="value" :eye="eye" />
      `,
      data: {
        value: 'pwd',
        eye: true
      }
    })
// 测试type为text时，open为假
    expect(vm.$el.querySelector('input').type)
      .to.equal('text')
    vm.$parent.eye = {
      open: false
    }
    // type属性为password时open为真
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('input').type)
        .to.equal('password')
      vm.$parent.eye = {
        open: true
      }
      vm.$nextTick(() => {
        // 测试input的type值
        expect(vm.$el.querySelector('input').type)
          .to.equal('text')
        // click eye
        vm.$el.querySelector('.cube-input-eye').click()
        vm.$nextTick(() => {
          // now password is invisible
          expect(vm.$el.querySelector('input').type)
            .to.equal('password')
          done()
        })
      })
    })
  })
  // 测试clearable清空按钮
  it('should show clearable icon and work correctly', (done) => {
    vm = createVue({
      template: `
        <cube-input v-model="value" :clearable="clearable" />
      `,
      data: {
        value: 'xxx',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    })
// 测试.cube-input-clear是否显示，blurHidden为假
    expect(vm.$el.querySelector('.cube-input-clear'))
      .to.be.null
    vm.$parent.clearable.blurHidden = false
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.cube-input-clear'))
        .not.to.be.null
      done()
    })
  })
// 测试focus，blur，change事件
  it('should trigger events', (done) => {
    const focusHandler = sinon.spy()
    const blurHandler = sinon.spy()
    const changeHandler = sinon.spy()

    vm = createVue({
      template: `
        <cube-input type="password" v-model="value" @focus="focusHandler" @blur="blurHandler" @change="changeHandler" />
      `,
      data: {
        value: 'value'
      },
      methods: {
        focusHandler: focusHandler,
        blurHandler: blurHandler,
        changeHandler: changeHandler
      }
    })
    const input = vm.$el.querySelector('input')
    vm.focus()
    setTimeout(() => {
      expect(focusHandler)
        .to.be.calledOnce
      input.value = 'new value'
      vm.blur()
      const e = createEvent('', 'change')
      input.dispatchEvent(e)
      setTimeout(() => {
        expect(blurHandler)
          .to.be.calledOnce
        expect(changeHandler)
          .to.be.calledOnce
        done()
      })
    })
  })
})

function createInput (value) {
  const vm = createVue({
    template: `
      <cube-input
        :disabled="disabled"
        :readonly="readonly"
        :clearable="useClear"
        v-model="value"
      >
      </cube-input>
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
