<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :inputCheck="inputCheckAccunt"
    :errorInfo="accuntErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from './HxInputFoundation.vue'

// const REGEXP_ACCUNT = /^[\u4e00/[0-9]{16}/-\u9fa5]+$/
const REGEXP_ACCUNT = /^([1-9]{1})(\d{15}|\d{18})$/

export default {
  name: 'hx-input-account',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
  },
  data() {
    return {
      accuntErrorInfo: '',
      value1: {},
      bankList: [
        {
          text: '招商银行',
          value: '6225'
        }, {
          text: '中国民生银行',
          value: '62261'
        }, {
          text: '华夏银行',
          value: '62263'
        }, {
          text: '中国光大银行',
          value: '62265'
        }, {
          text: '中信银行',
          value: '62269'
        }, {
          text: '中国建设银行',
          value: '62272'
        }, {
          text: '中国银行',
          value: '62275'
        }, {
          text: '农业银行',
          value: '6228'
        }
      ]
    }
  },
  methods: {
    formatAccunt(accunt) {
      // debugger
      if (!accunt) return ''
      const res = accunt.replace(/\D/g, '').replace(/....(?!$)/g, '$& ')
      // console.log('res', res)
      return res
    },
    deFormatAccunt(accunt) {
      return accunt.replace(/\s/g, '')
    },
    inputCheckAccunt(accunt) {
      const value = this.deFormatAccunt(accunt)
      if (!value /* 值校验不通过 */) {
        this.accuntErrorInfo = '请输入账号！'
        return false
      } else if (!REGEXP_ACCUNT.test(value)/* 格式校验不通过 */) {
        this.accuntErrorInfo = '账号格式不正确'
        return false
      } else {
        return true
      }
    },
    handleInput(e) {
      this.$emit('input', this.formatAccunt(e))
      if (e.length >= 4) {
        for (var i = 0; i < this.bankList.length; i++) {
          if (e === this.bankList[i].value) {
            this.$emit('binkList', this.bankList[i])
          }
        }
      }
    }
  }
}
</script>
