import Vue from 'vue2'
import Valitity from '@/modules/validity'
import createVue from '../utils/create-vue'

describe('Valitity', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Valitity)
    expect(Vue.component(Valitity.name))
      .to.be.a('function')
  })
  it('HTML', () => {
    vm = createValidity(24, '', [2022, 4, 20], false, false)
    expect(vm.$el.querySelector('.text'))
      .to.be.ok
  })
  it('warning警告信息', () => {
    vm = createValidity(24, '', [2022, 4, 20], false, false)
    vm.handleClick(event)
    vm.cancelHandle()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.warning'))
        .to.be.ok
    })
  })
  it('disabled禁用', () => {
    vm = createValidity(24, '', [2022, 4, 20], false, true)
    vm.handleClick(event)
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('readonly只读', () => {
    vm = createValidity(24, '', [2022, 4, 20], true, false)
    vm.handleClick(event)
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('validity长期有效', () => {
    vm = createValidity(65, '', [], false, false)
    vm.handleClick(event)
    vm.datePicker.show()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.text').innerHTML)
        .to.be.equal('长期有效')
    })
  })
  it('@receive="handleSelect"', () => {
    vm = createValidity(24, '', [], false, false)
    vm.selectHandle('receive', [2022, 2, 20], ['2022', '2', '20'])
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.text').innerHTML)
        .to.be.equal('2022-02-22')
    })
  })
})
let event = {
  preventDefault: function () {
    return false
  },
  stopPropagation: function () {
    return false
  }
}
function createValidity(age, validity, validityArray, readonly, disabled) {
  const vm = createVue({
    template: `
    <lan-validity :age="age" :validity="validity" :validityArray="validityArray" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></lan-validity>
    `,
    data() {
      return {
        age: age,
        validity: validity,
        validityArray: validityArray,
        readonly: readonly,
        disabled: disabled
      }
    },
    methods: {
      handleSelect: function (val, txt) {
        this.validityArray = val
        this.validity = txt.join('-')
      }
    }
  })
  return vm
}
