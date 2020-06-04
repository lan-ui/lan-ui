import Vue from 'vue2'
import Nationality from '@/modules/nationality'
import Validator from '@/modules/validator'
import Picker from '@/modules/picker'
import createVue from '../utils/create-vue'

describe('Nationality.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('Nationality国籍/地区组件', () => {
    Vue.use(Nationality)
    expect(Vue.component(Nationality.name))
      .to.be.a('function')
  })
  it('Nationality组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('Nationality组件引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('Nationality基础内容', () => {
    vm = createNationality()
    const el = vm.$el
    expect(el.className)
      .to.equal('lan-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.lan-select-title').innerText)
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
      .to.equal('icon-lan-nationality')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('Nationality基础用法：设置选择框右对齐', () => {
    const vm = createVue({
      template: `
        <lan-certificatetype :readonly="false"  @selected="selected" ref="lanValidate" position="right"></lan-certificatetype>
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
  it('Nationality基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createNationality()
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
  it('Nationality自定义数据用法', (done) => {
    const vm = createVue({
      template: `
        <lan-nationality :readonly="false" :options="types"  @selected="selected" ref="lanValidate"></lan-nationality>
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
  it('Nationality不可操作用法', () => {
    const vm = createVue({
      template: `
        <lan-nationality :readonly="false" :disabled="true" :value="value1"></lan-nationality>
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
      .to.include('lan-select-disabled')
    expect(input.className)
      .to.equal('main-info-selected')
    expect(el.querySelector('i').className)
      .to.equal('')
    expect(input.value)
      .to.equal('中国(香港)')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('Nationality回显值只读用法', () => {
    const vm = createVue({
      template: `
        <lan-nationality :readonly="true" :readValue="readType"></lan-nationality>
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
    expect(el.querySelector('.lan-select-main'))
      .to.be.null
    expect(el.querySelector('.cube-validator'))
      .to.be.null
    expect(el.querySelector('.select-main-info').innerText)
      .to.equal('中国(香港)')
  })
})
function createNationality () {
  const vm = createVue({
    template: `
      <lan-nationality :readonly="false" @selected="selected" ref="lanValidate"></lan-nationality>
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
