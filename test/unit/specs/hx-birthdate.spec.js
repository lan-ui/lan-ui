import Vue from 'vue2'
import HxBirthdate from '@/modules/hx-birthdate'
import createVue from '../utils/create-vue'

describe('HxBirthdate.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxBirthdate)
    expect(Vue.component(HxBirthdate.name))
      .to.be.a('function')
  })
  it('HTML', () => {
    vm = createHxbirth(false, '2018-04-20', [], false, false)
    expect(vm.$el.className)
      .to.be.equal('birth')
    expect(vm.$el.querySelector('.text'))
      .to.be.ok
  })
  it('warning警告信息', () => {
    vm = createHxbirth(false, '', [], false, false)
    vm.handleClick(event)
    vm.cancelHandle()
    /* let btn = vm.$el.querySelector('.birth')
    let clickEvent = new window.Event('click')
    btn.dispatchEvent(clickEvent)
    vm._watcher.run() */
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.warning'))
        .to.be.ok
    })
  })
  it('disabled禁用', () => {
    vm = createHxbirth(false, '2018-04-20', [], false, true)
    vm.handleClick(event)
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('readonly只读', () => {
    vm = createHxbirth(false, '2018-04-20', [], true, false)
    vm.handleClick(event)
    vm.$nextTick((doen) => {
      expect(vm.$el.querySelector('.icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-popup-content'))
        .to.be.null
    })
  })
  it('birth、关闭日期框', () => {
    vm = createHxbirth(false, '2018-04-20', [], false, false)
    vm.handleClick(event)
    vm.datePicker.show()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.text').innerHTML)
        .to.be.equal('2018-04-20')
    })
  })
  it('@receive="handleSelect"', () => {
    vm = createHxbirth(false, '2018-04-20', [], false, false)
    vm.selectHandle('receive', [2012, 2, 20], ['2012', '2', '20'])
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.text').innerHTML)
        .to.be.equal('2012-02-22')
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
function createHxbirth(warning, birth, birthArray, readonly, disabled) {
  const vm = createVue({
    template: `
    <hx-birthdate :warning="warning" :birth="birth" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></hx-birthdate>
    `,
    data() {
      return {
        warning: warning,
        birth: birth,
        birthArray: birthArray,
        readonly: readonly,
        disabled: disabled
      }
    },
    methods: {
      handleSelect: function (val, txt) {
        this.birthArray = val
        this.birth = txt.join('-')
      }
    }
  })
  return vm
}
