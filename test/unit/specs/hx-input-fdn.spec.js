import Vue from 'vue2'
import HxInputFdn from '@/modules/hx-input-fdn'
import createVue from '../utils/create-vue'
// import { dispatchTap } from '../utils/event'

describe('HxInputFdn.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxInputFdn)
    expect(Vue.component(HxInputFdn.name))
      .to.be.a('function')
  })
  it('触发input', () => {
    vm = createPhoneInput(111)
    // vm.handleFocus()
    vm.$el.querySelector('input').focus()
    vm.$el.querySelector('input').blur()
    vm.clickEye(e)
    // vm.handleClear()
    vm.clickTap('1232')
    vm.countdown()
    vm.showPicker()
    vm.selectHandle(['+86'], [1], ['中国大陆'])
    const domainList = ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com']
    vm.find(domainList, cha, num)
    // setTimeout(() => {
    expect(vm.$el.querySelector('input').value)
      .to.equal('111')
    //   done()
    // })
  })
})
let e = false
// let str = data.domainList
let cha = '@'
let num = '1'
function createPhoneInput (value) {
  const vm = createVue({
    template: `
    <hx-input-foundation v-model="value"></hx-input-foundation>
    `,
    data: {
      value: value,
      domainList: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
      domainList1: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
      send: '获取验证码',
      resend: false
    }
  })
  return vm
}
