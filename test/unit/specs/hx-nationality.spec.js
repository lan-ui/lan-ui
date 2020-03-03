import Vue from 'vue2'
import hxNationality from '@/modules/hx-nationality'
import Validator from '@/modules/validator'
import Picker from '@/modules/picker'
import createVue from '../utils/create-vue'

describe('hxNationality.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('hxNationality国籍/地区组件', () => {
    Vue.use(hxNationality)
    expect(Vue.component(hxNationality.name))
      .to.be.a('function')
  })
  it('hxNationality组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('hxNationality组件引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('hxNationality基础内容', () => {
    vm = createHxNationality()
    const el = vm.$el
    expect(el.className)
      .to.equal('hx-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.hx-select-title').innerText)
      .to.equal('国籍/地区')
    const input = el.querySelector('input')
    expect(input)
      .to.be.ok
    expect(input.className)
      .to.equal('main-info-init')
    expect(input.placeholder)
      .to.equal('请选择国籍/地区')
    expect(input.value)
      .to.equal('请选择国籍/地区')
    expect(input.getAttribute('readonly'))
      .to.equal('readonly')
    expect(el.querySelector('i').className)
      .to.equal('icon-hualife-nationality')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('hxNationality基础用法：设置选择框右对齐', () => {
    const vm = createVue({
      template: `
        <hx-certificatetype :readonly="false"  @selected="selected" ref="hxValidate" position="right"></hx-certificatetype>
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
  it('hxNationality基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createHxNationality()
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
      .to.equal('国籍/地区')
    setTimeout(() => {
      picker.querySelector('.cube-picker-cancel').click()
      vm.$refs.validator.validate()
      expect(picker.style.display)
        .to.equal('')
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('请选择国籍/地区')
        expect(validate.className)
          .to.include('cube-validator_invalid')
        expect(validate.querySelector('.cube-validator-msg-def').innerText)
          .to.equal('请选择您的国籍/地区')
        done()
      })
    })
    const wheels = picker.querySelectorAll('.cube-picker-wheel-item')
    expect(wheels.length)
      .to.equal(256)
    info.click()
    setTimeout(() => {
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('中国')
        done()
      })
    })
  })
  it('hxNationality自定义数据用法', (done) => {
    const vm = createVue({
      template: `
        <hx-nationality :readonly="false" :options="types"  @selected="selected" ref="hxValidate"></hx-nationality>
      `,
      data: {
        types: [
          {
            text: '中国（香港）',
            value: '00001'
          },
          {
            text: '中国',
            value: '00002'
          },
          {
            text: '中国（澳门）',
            value: '00003'
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
      .to.equal(3)
    expect(info)
      .to.be.ok
    setTimeout(() => {
      expect(picker.style.display)
        .to.equal('')
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('中国（香港）')
        done()
      })
    })
  })
  it('hxNationality不可操作用法', () => {
    const vm = createVue({
      template: `
        <hx-nationality :readonly="false" :disabled="true" :value="value1"></hx-nationality>
      `,
      data: {
        value1: {
          value: 'HK',
          text: '中国(香港)'
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
      .to.equal('中国(香港)')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('hxNationality回显值只读用法', () => {
    const vm = createVue({
      template: `
        <hx-nationality :readonly="true" :readValue="readType"></hx-nationality>
      `,
      data: {
        readType: {
          text: '中国(香港)',
          value: '00002'
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
      .to.equal('中国(香港)')
  })
})
function createHxNationality () {
  const vm = createVue({
    template: `
      <hx-nationality :readonly="false" @selected="selected" ref="hxValidate"></hx-nationality>
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
