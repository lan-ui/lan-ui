import Vue from 'vue2'
import Bank from '@/modules/bank'
import Validator from '@/modules/validator'
import Picker from '@/modules/picker'
import createVue from '../utils/create-vue'

describe('Bank.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('Bank银行组件', () => {
    Vue.use(Bank)
    expect(Vue.component(Bank.name))
      .to.be.a('function')
  })
  it('Bank组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('Bank组件引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('Bank基础内容', () => {
    vm = createBank()
    const el = vm.$el
    expect(el.className)
      .to.equal('lan-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.lan-select-title').innerText)
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
      .to.equal('icon-lan-bankcard')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('Bank基础用法：设置选择框右对齐', () => {
    const vm = createVue({
      template: `
        <lan-bank :readonly="false"  @selected="selected" ref="lanValidate" position="right"></lan-bank>
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
  it('Bank基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createVue({
      template: `
        <lan-bank :readonly="false"  @selected="selected" ref="lanValidate"></lan-bank>
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
  it('Bank自定义数据用法', (done) => {
    const vm = createVue({
      template: `
        <lan-bank :options="banks"  @selected="selected" ref="lanValidate"></lan-bank>
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
  it('Bank不可操作用法', () => {
    const vm = createVue({
      template: `
        <lan-bank :disabled="true" :value="value1"></lan-bank>
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
      .to.include('lan-select-disabled')
    expect(input.className)
      .to.equal('main-info-selected')
    expect(el.querySelector('i').className)
      .to.equal('')
    expect(input.value)
      .to.equal('建设银行')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('Bank回显值只读用法', () => {
    const vm = createVue({
      template: `
        <lan-bank :readonly="true" :readValue="readBank"></lan-bank>
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
    expect(el.querySelector('.lan-select-main'))
      .to.be.null
    expect(el.querySelector('.cube-validator'))
      .to.be.null
    expect(el.querySelector('.select-main-info').innerText)
      .to.equal('工商银行')
  })
})
function createBank () {
  const vm = createVue({
    template: `
      <lan-bank :readonly="false"  @selected="selected" ref="lanValidate"></lan-bank>
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
