import Vue from 'vue2'
import hxCertificatetype from '@/modules/hx-certificatetype'
import Validator from '@/modules/validator'
import Picker from '@/modules/picker'
import createVue from '../utils/create-vue'

describe('hxCertificatetype.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('hxCertificatetype证件类型组件', () => {
    Vue.use(hxCertificatetype)
    expect(Vue.component(hxCertificatetype.name))
      .to.be.a('function')
  })
  it('hxCertificatetype组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('hxCertificatetype组件引用picker组件', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })
  it('hxCertificatetype基础内容', () => {
    vm = createHxCertificatetype()
    const el = vm.$el
    expect(el.className)
      .to.equal('hx-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.hx-select-title').innerText)
      .to.equal('证件类型')
    const input = el.querySelector('input')
    expect(input)
      .to.be.ok
    expect(input.className)
      .to.equal('main-info-init')
    expect(input.placeholder)
      .to.equal('请选择证件类型')
    expect(input.value)
      .to.equal('请选择证件类型')
    expect(input.getAttribute('readonly'))
      .to.equal('readonly')
    expect(el.querySelector('i').className)
      .to.equal('icon-hualife-certificates')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('hxCertificatetype基础用法：设置选择框右对齐', () => {
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
  it('hxCertificatetype基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createHxCertificatetype()
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
      .to.equal('证件类型')
    setTimeout(() => {
      picker.querySelector('.cube-picker-cancel').click()
      vm.$refs.validator.validate()
      expect(picker.style.display)
        .to.equal('')
      Vue.nextTick(() => {
        expect(input.value)
          .to.equal('请选择证件类型')
        expect(validate.className)
          .to.include('cube-validator_invalid')
        expect(validate.querySelector('.cube-validator-msg-def').innerText)
          .to.equal('请选择您的证件类型')
        done()
      })
    })
    const wheels = picker.querySelectorAll('.cube-picker-wheel-item')
    expect(wheels.length)
      .to.equal(12)
    info.click()
    setTimeout(() => {
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(() => {
        expect(input.value)
          .to.equal('居民身份证')
        done()
      })
    })
  })
  it('hxCertificatetype自定义数据用法', (done) => {
    const vm = createVue({
      template: `
        <hx-certificatetype :readonly="false" :options="types"  @selected="selected" ref="hxValidate"></hx-certificatetype>
      `,
      data: {
        types: [
          {
            text: '居民身份证',
            value: '00001'
          },
          {
            text: '居民户口薄',
            value: '00002'
          },
          {
            text: '军官证',
            value: '00003'
          },
          {
            text: '护照',
            value: '00004'
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
      .to.equal(4)
    expect(info)
      .to.be.ok
    setTimeout(() => {
      expect(picker.style.display)
        .to.equal('')
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(() => {
        expect(input.value)
          .to.equal('居民身份证')
        done()
      })
    })
  })
  it('hxCertificatetype不可操作用法', () => {
    const vm = createVue({
      template: `
        <hx-certificatetype :readonly="false" :disabled="true" :value="value1"></hx-certificatetype>
      `,
      data: {
        value1: {
          value: '17',
          text: '港澳台居民居住证'
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
      .to.equal('港澳台居民居住证')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('hxCertificatetype回显值只读用法', () => {
    const vm = createVue({
      template: `
        <hx-certificatetype :readonly="true" :readValue="readType"></hx-certificatetype>
      `,
      data: {
        readType: {
          text: '居民身份证',
          value: '00001'
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
      .to.equal('居民身份证')
  })
})
function createHxCertificatetype () {
  const vm = createVue({
    template: `
      <hx-certificatetype :readonly="false"  @selected="selected" ref="hxValidate"></hx-certificatetype>
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
