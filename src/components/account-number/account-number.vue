<template>
  <lan-input-foundation
    ref="lan-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :eye="eye"
    :placeholder="placeholder"
    :inputCheck="inputCheckAccunt"
    :errorInfo="accuntErrorInfo"
    :lanstyle="lanstyle"
    @input="handleInput"
    @clickEye="clickEye"
  >
  </lan-input-foundation>
</template>

<script>
import LanInputFoundation from '../input-fdn/input-fdn'

// const REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/

export default {
  name: 'lan-account-number',
  components: {
    LanInputFoundation
  },
  props: {
    // value: InputFoundation.props.value,
    ...LanInputFoundation.props
    // defaultVal: String
  },
  data() {
    return {
      accuntErrorInfo: '',
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
      ],
      eyeVal: []
    }
  },
  methods: {
    formatAccunt(accunt) {
      if (!accunt) return ''
      const res = Array.prototype.reduce.call(this.deFormatAccunt(accunt), (temp, num, i) => temp + num + ((i % 4 === 3) ? ' ' : ''))
      // console.log('res', res)
      return res
    },
    deFormatAccunt(accunt) {
      return accunt.replace(/\s/g, '')
    },
    inputCheckAccunt(accunt) {
      const REGEXP_ACCUNT = /^([1-9]{1})(\d{15}|\d{16}|\d{17}|\d{18}|\d{19})$/
      const value = this.deFormatAccunt(accunt)
      if (!value /* 值校验不通过 */) {
        this.accuntErrorInfo = '请输入账号！'
        return false
      } else if (!REGEXP_ACCUNT.test(value)) {
        this.accuntErrorInfo = '请输入正确的账号！'
        return false
      } else {
        return true
      }
    },
    handleInput(e) {
      this.$emit('input', this.formatAccunt(e))
      // console.log(e)
      e = e.replace(/\s/g, '')
      if (e.length >= 6) {
        // debugger
        for (var i = 0; i < this.bankList.length; i++) {
          if (e === this.bankList[i].value) {
            this.$emit('binkList', this.bankList[i])
          }
        }
      }
    },
    clickEye(e) {
      this.eyeVal.push(this.value.replace(/\s/g, ''))
      var val = this.value.replace(/\s/g, '')
      var str1
      var str3
      if (e === true) {
        this.$emit('input', this.eyeVal[0])
      } else {
        if (val.length === 16) {
          str1 = val.slice(12, 16)
          str3 = '************' + str1
        } else if (val.length === 19) {
          str1 = val.slice(15, 19)
          str3 = '***************' + str1
        }
        // console.log(str3)
        this.$emit('input', str3)
      }
    }
  }
}
</script>
