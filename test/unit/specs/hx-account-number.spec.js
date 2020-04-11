import Vue from 'vue2'
// import {HxInputAccount} from '@/hx/modules'
// import HxCustomComponents from '@/hx/modules/index'
// import HxInputAccount from '@/hx/modules/input/HxInputAccount.vue'
import HxAccountNumber from '@/modules/hx-account-number'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

// const { HxInputAccount } = HxCustomComponents

describe('HxAccountNumber.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(HxAccountNumber)
    expect(Vue.component(HxAccountNumber.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createPhoneInput()
    // const el = vm.$el
    expect(vm.$el.className)
      .to.equal('hx hx-input-foundation')
    expect(vm.$el.querySelector('input'))
      .to.be.ok
  })
  // it('should not show clear button when no text', () => {
  //   vm = createPhoneInput()
  //   expect(vm.$el.querySelector('.cubeic-warn'))
  //     .to.be.null
  // })
  // it('should show clear button when select input', () => {
  //   vm = createPhoneInput()
  //   dispatchTap(vm.$el.querySelector('input'))
  //   expect(vm.$el.querySelector('.hx-input-clear').style.display)
  //     .to.equal('')
  // })
  it('value should be empty when clear button clicked', (done) => {
    vm = createPhoneInput(1)
    expect(vm.$el.querySelector('input').value)
      .is.not.empty
    dispatchTap(vm.$el.querySelector('.hx-input-clear'))
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .is.not.empty
      done()
    }, 50)
  })
  it('回显值只读用法', () => {
    const vm = createVue({
      template: `
      <hx-account-number
      ref="hx-account-number"
      :placeholder="'请输入账号'"
      :label="'账号'"
      :readonly="true"
      v-model="value" 
    ></hx-account-number>
      `,
      data: {
        value: '6225 5678 9803 8988',
        readonly: false
      }
    })
    const el = vm.$el
    expect(vm.$props.readonly)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('6225 5678 9803 8988')
  })
  it('禁止操作', () => {
    const vm = createVue({
      template: `
      <hx-account-number
      ref="hx-account-number"
      :placeholder="'请输入账号'"
      :label="'账号'"
      :disabled="true"
      v-model="value" 
    ></hx-account-number>
      `,
      data: {
        value: '6225 5678 9803 8988',
        disabled: false
      }
    })
    const el = vm.$el
    expect(vm.$props.disabled)
      .to.be.true
    expect(el.querySelector('input').value)
      .to.equal('6225 5678 9803 8988')
  })
  it('触发input', (done) => {
    const vm = createVue({
      template: `
      <hx-account-number
      ref="hx-account-number"
      :placeholder="'请输入账号'"
      :label="'账号'"
      v-model="value" 
    ></hx-account-number>
      `,
      data: {
        value: '111888',
        bankList: [
          {
            text: '深圳发展银行',
            value: '622525'
          }, {
            text: '深圳发展银行',
            value: '622526'
          }, {
            text: '深圳发展银行',
            value: '622538'
          }, {
            text: '大丰银行有限公司',
            value: '622546'
          }, {
            text: '大丰银行有限公司',
            value: '622547'
          }, {
            text: '大丰银行有限公司',
            value: '622548'
          }, {
            text: '哈萨克斯坦国民储蓄银行',
            value: '622549'
          }, {
            text: '哈萨克斯坦国民储蓄银行',
            value: '622550'
          }, {
            text: '德阳市商业银行',
            value: '622561'
          }, {
            text: '德阳市商业银行',
            value: '622562'
          }, {
            text: '德阳市商业银行',
            value: '622563'
          }, {
            text: '招商银行',
            value: '622575'
          }, {
            text: '招商银行',
            value: '622576'
          }, {
            text: '招商银行',
            value: '622577'
          }, {
            text: '招商银行',
            value: '622578'
          }, {
            text: '招商银行',
            value: '622579'
          }, {
            text: '招商银行',
            value: '622580'
          }, {
            text: '招商银行',
            value: '622581'
          }, {
            text: '招商银行',
            value: '622582'
          }, {
            text: '招商银行',
            value: '622588'
          }, {
            text: '招商银行',
            value: '622598'
          }, {
            text: '民生银行',
            value: '622600'
          }, {
            text: '民生银行',
            value: '622601'
          }, {
            text: '中国民生银行',
            value: '622602'
          }, {
            text: '中国民生银行',
            value: '622603'
          }, {
            text: '民生银行',
            value: '622615'
          }, {
            text: '中国民生银行',
            value: '622617'
          }, {
            text: '中国民生银行',
            value: '622619'
          }, {
            text: '中国民生银行',
            value: '622622'
          }, {
            text: '华夏银行',
            value: '622630'
          }, {
            text: '华夏银行',
            value: '622631'
          }, {
            text: '华夏银行',
            value: '622632'
          }, {
            text: '华夏银行',
            value: '622633'
          }, {
            text: '中国光大银行',
            value: '622650'
          }, {
            text: '中国光大银行',
            value: '622655'
          }, {
            text: '中国光大银行',
            value: '622658'
          }, {
            text: '光大银行',
            value: '622660'
          }, {
            text: '中信实业银行信用卡中心',
            value: '622678'
          }, {
            text: '中信实业银行信用卡中心',
            value: '622679'
          }, {
            text: '中信实业银行信用卡中心',
            value: '622680'
          }, {
            text: '江西省农村信用社联合社',
            value: '622681'
          }, {
            text: '江西省农村信用社联合社',
            value: '622682'
          }, {
            text: '渤海银行',
            value: '622684'
          }, {
            text: '中信实业银行信用卡中心',
            value: '622688'
          }, {
            text: '中信实业银行信用卡中心',
            value: '622689'
          }, {
            text: '中信实业银行',
            value: '622690'
          }, {
            text: '中信实业银行',
            value: '622691'
          }, {
            text: '中信实业银行',
            value: '622692'
          }, {
            text: '中信银行',
            value: '622696'
          }, {
            text: '中信银行',
            value: '622698'
          }, {
            text: '建设银行',
            value: '622700'
          }, {
            text: '中国建设银行',
            value: '622725'
          }, {
            text: '中国建设银行',
            value: '622728'
          }, {
            text: '中国银行澳门分行',
            value: '622750'
          }, {
            text: '中国银行澳门分行',
            value: '622751'
          }, {
            text: '中国银行',
            value: '622752'
          }, {
            text: '中国银行',
            value: '622753'
          }, {
            text: '中国银行',
            value: '622755'
          }, {
            text: '中国银行',
            value: '622756'
          }, {
            text: '中国银行',
            value: '622757'
          }, {
            text: '中国银行',
            value: '622758'
          }, {
            text: '中国银行',
            value: '622759'
          }, {
            text: '中国银行',
            value: '622760'
          }, {
            text: '中国银行',
            value: '622761'
          }, {
            text: '中国银行',
            value: '622762'
          }, {
            text: '中国银行',
            value: '622763'
          }, {
            text: '中国银行澳门分行',
            value: '622770'
          }, {
            text: '曲靖市商业银行',
            value: '622777'
          }, {
            text: '农业银行',
            value: '622821'
          }, {
            text: '农业银行',
            value: '622822'
          }, {
            text: '农业银行',
            value: '622823'
          }, {
            text: '农业银行',
            value: '622824'
          }, {
            text: '农业银行',
            value: '622825'
          }, {
            text: '农业银行',
            value: '622826'
          }, {
            text: '农业银行',
            value: '622836'
          }, {
            text: '农业银行',
            value: '622837'
          }, {
            text: '农业银行',
            value: '622840'
          }, {
            text: '农业银行',
            value: '622844'
          }, {
            text: '农业银行',
            value: '622845'
          }, {
            text: '中国农业银行',
            value: '622846'
          }, {
            text: '农业银行',
            value: '622847'
          }, {
            text: '农业银行',
            value: '622848'
          }, {
            text: '江苏东吴农村商业银行',
            value: '622855'
          }, {
            text: '桂林市商业银行',
            value: '622856'
          }, {
            text: '日照市商业银行',
            value: '622857'
          }, {
            text: '浙江省农村信用社联合社',
            value: '622858'
          }, {
            text: '珠海农村信用合作社联社',
            value: '622859'
          }, {
            text: '大庆市商业银行',
            value: '622860'
          }, {
            text: '澳门永亨银行股份有限公司	',
            value: '622861'
          }, {
            text: '莱芜市商业银行',
            value: '622864'
          }, {
            text: '长春市商业银行',
            value: '622865'
          }, {
            text: '徐州市商业银行',
            value: '622866'
          }, {
            text: '重庆市农村信用社联合社',
            value: '622867'
          }, {
            text: '太仓农村商业银行',
            value: '622869'
          }, {
            text: '靖江市长江城市信用社',
            value: '622870'
          }, {
            text: '永亨银行',
            value: '622871'
          }, {
            text: '徽商银行',
            value: '622877'
          }, {
            text: '杭州市商业银行',
            value: '622878'
          }, {
            text: '徽商银行',
            value: '622879'
          }, {
            text: '杭州市商业银行',
            value: '622880'
          }, {
            text: '杭州市商业银行',
            value: '622881'
          }, {
            text: '尧都区农村信用合作社联社',
            value: '622882'
          }, {
            text: '渤海银行',
            value: '622884'
          }, {
            text: '重庆市农村信用社联合社',
            value: '622885'
          }, {
            text: '烟台市商业银行',
            value: '622886'
          }, {
            text: '武进农村商业银行',
            value: '622891'
          }, {
            text: '上海银行',
            value: '622892'
          }, {
            text: '贵州省农村信用社联合社',
            value: '622893'
          }, {
            text: '江苏锡州农村商业银行',
            value: '622895'
          }, {
            text: '中外合资.南充市商业银行',
            value: '622897'
          }, {
            text: '长沙市商业银行',
            value: '622898'
          }, {
            text: '长沙市商业银行',
            value: '622900'
          }, {
            text: '兴业银行',
            value: '622901'
          }, {
            text: '兴业银行',
            value: '622908'
          }, {
            text: '兴业银行',
            value: '622909'
          }, {
            text: '上海银行',
            value: '682900'
          }, {
            text: '泉州市商业银行',
            value: '683970'
          }, {
            text: '广东发展银行',
            value: '685800'
          }, {
            text: '招商',
            value: '622725'
          }, {
            text: '长沙市商业银行',
            value: '694301'
          }, {
            text: '南通商业银行',
            value: '695800'
          }
        ]
      }
    })
    vm.handleInput('111888')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验1', (done) => {
    vm = createPhoneInput('')
    vm.inputCheckAccunt('')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验2', (done) => {
    vm = createPhoneInput('哈哈')
    vm.inputCheckAccunt('哈哈')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('校验3', (done) => {
    vm = createPhoneInput(6225567898038988)
    vm.inputCheckAccunt('6225 5678 9803 8988')
    setTimeout(() => {
      expect(vm.$el.querySelector('.hx-rule-error').innerText)
        .to.equal('')
      done()
    })
  })
  it('触发clickEye', (done) => {
    const vm = createVue({
      template: `
      <hx-account-number
      ref="hx-account-number"
      :placeholder="'请输入账号'"
      :label="'账号'"
      :readonly="true"
      :eye="eye"
      v-model="value" 
    ></hx-account-number>
      `,
      data: {
        value: '6225 5678 9803 8988',
        eyeVal: [],
        eye: true
      }
    })
    vm.clickEye(e)
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .to.equal('6225 5678 9803 8988 ')
      vm.clickEye(!e)
      setTimeout(() => {
        expect(vm.$el.querySelector('input').value)
          .to.equal('************8988')
        done()
      })
      done()
    })
  })
  it('触发clickEye', (done) => {
    const vm = createVue({
      template: `
      <hx-account-number
      ref="hx-account-number"
      :placeholder="'请输入账号'"
      :label="'账号'"
      :readonly="true"
      :eye="eye"
      v-model="value" 
    ></hx-account-number>
      `,
      data: {
        value: '6225 5678 9803 8988 876',
        eyeVal: [],
        eye: true
      }
    })
    vm.clickEye(e)
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .to.equal('6225 5678 9803 8988 876')
      vm.clickEye(!e)
      setTimeout(() => {
        expect(vm.$el.querySelector('input').value)
          .to.equal('***************8876')
        done()
      })
      done()
    })
  })
})
let e = true
function createPhoneInput (value) {
  const vm = createVue({
    template: `
      <hx-account-number
        ref="hx-account-number"
        :placeholder="'请输入账号'"
        :label="'账号'"
        v-model="value" 
      ></hx-account-number>
    `,
    data: {
      disabled: false,
      readonly: false,
      useClear: {
        visible: true,
        blurHidden: false
      },
      value: value && 'test'
    }
  })
  return vm
}
