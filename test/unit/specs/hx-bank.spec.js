import Vue from 'vue2'
import hxBank from '@/modules/hx-bank'
import Validator from '@/modules/validator'
import Picker from '@/modules/picker'
import createVue from '../utils/create-vue'

describe('hxBank.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('hxBank银行组件', () => {
    Vue.use(hxBank)
    expect(Vue.component(hxBank.name))
      .to.be.a('function')
  })
  it('hxBank组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('hxBank组件引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('hxBank基础内容', () => {
    vm = createHxBank()
    const el = vm.$el
    expect(el.className)
      .to.equal('hx-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.hx-select-title').innerText)
      .to.equal('银行')
    const input = el.querySelector('input')
    expect(input)
      .to.be.ok
    expect(input.className)
      .to.equal('main-info-init')
    expect(input.placeholder)
      .to.equal('请选择银行')
    expect(input.value)
      .to.equal('请选择银行')
    expect(input.getAttribute('readonly'))
      .to.equal('readonly')
    expect(el.querySelector('i').className)
      .to.equal('icon-hualife-bankcard')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('hxBank基础用法：设置选择框右对齐', () => {
    const vm = createVue({
      template: `
        <hx-bank :readonly="false"  @selected="selected" ref="hxValidate" position="right"></hx-bank>
      `,
      data: {
      },
      methods: {
        selected (data) {
        }
      }
    })
    const el = vm.$el
    expect(el.getAttribute('data-pos'))
      .to.equal('right')
  })
  it('hxBank基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createVue({
      template: `
        <hx-bank :readonly="false"  @selected="selected" ref="hxValidate"></hx-bank>
      `,
      data: {
      },
      methods: {
        selected (data) {
        }
      }
    })
    const el = vm.$el
    const input = el.querySelector('input')
    const info = el.querySelector('.select-main-info')
    expect(vm.$props.readonly)
      .to.be.false
    expect(input)
      .to.be.ok
    info.click()
    const validate = vm.$children[0].$el
    const picker = vm.$children[1].$el
    expect(picker.querySelector('.cube-picker-title').innerText)
      .to.equal('银行')
    setTimeout(function() {
      picker.querySelector('.cube-picker-cancel').click()
      vm.$refs.validator.validate()
      expect(picker.style.display)
        .to.equal('')
      Vue.nextTick(() => {
        expect(input.value)
          .to.equal('请选择银行')
        expect(validate.className)
          .to.include('cube-validator_invalid')
        expect(validate.querySelector('.cube-validator-msg-def').innerText)
          .to.equal('请选择您的银行')
        done()
      })
    })
    const wheels = picker.querySelectorAll('.cube-picker-wheel-item')
    expect(wheels.length)
      .to.equal(18)
    info.click()
    setTimeout(function() {
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(() => {
        expect(input.value)
          .to.equal('中国农业银行')
        done()
      })
    })
  })
  it('hxBank自定义数据用法', (done) => {
    const vm = createVue({
      template: `
        <hx-bank :options="banks"  @selected="selected" ref="hxValidate"></hx-bank>
      `,
      data: {
        banks: [
          {
            text: '中国银行',
            value: '00001'
          },
          {
            text: '建设银行',
            value: '00002'
          },
          {
            text: '工商银行',
            value: '00003'
          },
          {
            text: '招商银行',
            value: '00004'
          },
          {
            text: '农业银行',
            value: '00005'
          }
        ]
      },
      methods: {
        selected (data) {
        }
      }
    })
    const el = vm.$el
    const input = el.querySelector('input')
    const info = el.querySelector('.select-main-info')
    info.click()
    const picker = vm.$children[1].$el
    const wheels = picker.querySelectorAll('.cube-picker-wheel-item')
    expect(wheels.length)
      .to.equal(5)
    expect(info)
      .to.be.ok
    setTimeout(() => {
      expect(picker.style.display)
        .to.equal('')
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('中国银行')
        done()
      })
    })
  })
  it('hxBank不可操作用法', () => {
    const vm = createVue({
      template: `
        <hx-bank :disabled="true" :value="value1"></hx-bank>
      `,
      data: {
        value1: {
          text: '建设银行',
          value: ''
        }
      }
    })
    const el = vm.$el
    const input = el.querySelector('input')
    const info = el.querySelector('.select-main-info')
    info.click()
    expect(el.className)
      .to.include('hx-select-disabled')
    expect(input.className)
      .to.equal('main-info-selected')
    expect(el.querySelector('i').className)
      .to.equal('')
    expect(input.value)
      .to.equal('建设银行')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('hxBank回显值只读用法', () => {
    const vm = createVue({
      template: `
        <hx-bank :readonly="true" :readValue="readBank"></hx-bank>
      `,
      data: {
        readBank: {
          text: '工商银行',
          value: '00003'
        }
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('.hx-select-main'))
      .to.be.null
    expect(el.querySelector('.cube-validator'))
      .to.be.null
    expect(el.querySelector('.select-main-info').innerText)
      .to.equal('工商银行')
  })
})
function createHxBank () {
  const vm = createVue({
    template: `
      <hx-bank :readonly="false"  @selected="selected" ref="hxValidate"></hx-bank>
    `,
    data: {
    },
    methods: {
      selected (data) {
      }
    }
  })
  return vm
}
