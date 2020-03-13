import Vue from 'vue2'
import HxValitity from '@/modules/hx-validity'
import createVue from '../utils/create-vue'

describe('HxValitity.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxValitity)
    expect(Vue.component(HxValitity.name))
      .to.be.a('function')
  })
  it('HTML', () => {
    vm = createHxvalidity(false, 24, '', [2022, 4, 20], false, false)
    console.log(vm)
    expect(vm.$el.className)
      .to.be.equal('validity')
    expect(vm.$el.querySelector('.text'))
      .to.be.ok
  })
  it('warning警告信息', () => {
    vm = createHxvalidity(false, 24, '', [2022, 4, 20], false, false)
    vm.handleClick(event)
    vm.cancelHandle()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.warning'))
        .to.be.ok
    })
  })
  it('disabled禁用', () => {
    vm = createHxvalidity(false, 24, '', [2022, 4, 20], false, true)
    vm.handleClick(event)
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('readonly只读', () => {
    vm = createHxvalidity(false, 24, '', [2022, 4, 20], true, false)
    vm.handleClick(event)
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('validity长期有效', () => {
    vm = createHxvalidity(false, 65, '', [], false, false)
    vm.handleClick(event)
    vm.datePicker.show()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.text').innerHTML)
        .to.be.equal('长期有效')
    })
  })
  it('@receive="handleSelect"', () => {
    vm = createHxvalidity(false, 24, '', [], false, false)
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
function createHxvalidity(warning, age, validity, validityArray, readonly, disabled) {
  const vm = createVue({
    template: `
    <hx-validity :age="age" :warning="warning" :validity="validity" :validityArray="validityArray" :readonly="readonly" :disabled="disabled" @receive="handleSelect" :isLongTerm="isLongTerm"></hx-validity>
    `,
    data() {
      return {
        age: age,
        warning: warning,
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
