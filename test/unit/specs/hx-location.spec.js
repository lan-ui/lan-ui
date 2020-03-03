import Vue from 'vue2'
import hxLocation from '@/modules/hx-location'
import Validator from '@/modules/validator'
import CascadePicker from '@/modules/cascade-picker'
import createVue from '../utils/create-vue'

describe('hxLocation.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('hxLocation所在地区组件', () => {
    Vue.use(hxLocation)
    expect(Vue.component(hxLocation.name))
      .to.be.a('function')
  })
  it('hxLocation组件引用validator组件', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })
  it('hxLocation组件引用CascadePicker组件', () => {
    Vue.use(CascadePicker)
    expect(Vue.component(CascadePicker.name))
      .to.be.a('function')
  })
  it('hxLocation基础内容', () => {
    vm = createHxLocation()
    const el = vm.$el
    expect(el.className)
      .to.equal('hx-select')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.hx-select-title').innerText)
      .to.equal('所在地区')
    const input = el.querySelector('input')
    expect(input)
      .to.be.ok
    expect(input.className)
      .to.equal('main-info-init')
    expect(input.placeholder)
      .to.equal('请选择所在地区')
    expect(input.value)
      .to.equal('请选择所在地区')
    expect(input.getAttribute('readonly'))
      .to.equal('readonly')
    expect(el.querySelector('i').className)
      .to.equal('icon-hualife-region')
    expect(el.querySelector('.cube-validator'))
      .to.be.ok
    expect(el.querySelector('.cube-validator').innerText)
      .to.equal('')
  })
  it('hxLocation基础用法：设置选择框右对齐', () => {
    const vm = createVue({
      template: `
        <hx-location :readonly="false"  @selected="selected" ref="hxValidate" position="right"></hx-location>
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
  it('hxLocation基础用法：选择回显内容，取消进行校验', (done) => {
    const vm = createHxLocation()
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
      .to.equal('所在地区')
    setTimeout(() => {
      picker.querySelector('.cube-picker-cancel').click()
      vm.$refs.validator.validate()
      expect(picker.style.display)
        .to.equal('')
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('请选择所在地区')
        expect(validate.className)
          .to.include('cube-validator_invalid')
        expect(validate.querySelector('.cube-validator-msg-def').innerText)
          .to.equal('请选择您的所在地区')
        done()
      })
    })
    info.click()
    setTimeout(() => {
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('北京市 市辖区 东城区')
        done()
      })
    })
  })
  it('hxLocation自定义数据用法', () => {
    const vm = createVue({
      template: `
        <hx-location :readonly="false" :options="value"  @selected="selected" ref="hxValidate"></hx-location>
      `,
      data: {
        value: [
          {
            value: 'Fruit',
            text: 'Fruit',
            children: [
              {
                value: 'Apple',
                text: 'Apple',
                children: [
                  {
                    value: 1,
                    text: 'One'
                  },
                  {
                    value: 2,
                    text: 'Two'
                  }
                ]
              }
            ]
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
    expect(info)
      .to.be.ok
    setTimeout(() => {
      expect(picker.style.display)
        .to.equal('')
      picker.querySelector('.cube-picker-confirm').click()
      Vue.nextTick(function() {
        expect(input.value)
          .to.equal('Fruit Apple One')
      })
    })
  })
  it('hxLocation不可操作用法', () => {
    const vm = createVue({
      template: `
        <hx-location :readonly="false" :disabled="true" :value="value1"></hx-location>
      `,
      data: {
        value1: {
          text: ['北京', '北京市', '东城区'],
          value: ['110000', '110100', '110101']
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
      .to.equal('北京 北京市 东城区')
    expect(el.querySelector('.cube-validator'))
      .to.be.null
  })
  it('hxLocation回显值只读用法', () => {
    const vm = createVue({
      template: `
        <hx-location :readonly="true" :readValue="readType"></hx-location>
      `,
      data: {
        readType: {
          text: ['山西省', '阳泉市', '市辖区'],
          value: ['140000', '140300', '140301']
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
      .to.equal('山西省 阳泉市 市辖区')
  })
})
function createHxLocation () {
  const vm = createVue({
    template: `
      <hx-location :readonly="false"  @selected="selected" ref="hxValidate"></hx-location>
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
