<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :inputCheck="inputCheckPhone"
    :errorInfo="phoneErrorInfo"
    @input="handleInput"
    @defaultPhone="defaultPhone"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from './HxInputFoundation.vue'

// const REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/

export default {
  name: 'hx-input-phone',
  components: {
    HxInputFoundation
  },
  props: {
    // value: HxInputFoundation.props.value,
    ...HxInputFoundation.props
    // defaultVal: String
  },
  data() {
    return {
      phoneErrorInfo: '',
      phoneType: '+86'
      // inputValue: ''
    }
  },
  methods: {
    /**
     * 手机号码装饰器
     * @example
     *
     * formatPhone('17610242070') -> '176 1024 2070'
     * formatPhone('1761024207086235') -> '176 1024 2070 8623 5'
     *
     */
    formatPhone(phone) {
      // debugger
      if (!phone) return ''
      const res = Array.prototype.reduce.call(this.deFormatPhone(phone), (temp, num, i) => temp + num + ((i % 4 === 2) ? ' ' : ''))
      // console.log('res', res)
      return res
    },
    deFormatPhone(phone) {
      return phone.replace(/\s/g, '')
    },
    inputCheckPhone(phone) {
      // debugger
      var phoneLength = 11
      var REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/
      // debugger
      if (this.phoneType === '+86') {
        // 大陆号码
        console.log(this.phoneType)
        phoneLength = 11
        REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/
      } else if (this.phoneType === '+852') {
        // 香港号码
        console.log(this.phoneType)
        phoneLength = 8
        REGEXP_PHONE = /^([6|9])\d{7}$/
      } else if (this.phoneType === '+853') {
        // 澳门号码
        console.log(this.phoneType)
        phoneLength = 7
        REGEXP_PHONE = /^[6]([8|6])\d{5}$/
      } else if (this.phoneType === '+886') {
        // 台湾号码
        console.log(this.phoneType)
        phoneLength = 10
        REGEXP_PHONE = /^[0][9]\d{8}$/
      }
      console.log(this.phoneType)
      const value = this.deFormatPhone(phone)
      if (!value /* 值校验不通过 */) {
        this.phoneErrorInfo = '请输入手机号码！'
        return false
      } else if (!REGEXP_PHONE.test(value) || (value + '').length !== phoneLength) {
        this.phoneErrorInfo = '请输入正确的手机号码！'
        return false
      } else {
        return true
      }
    },
    defaultPhone(e) {
      console.log(e)
      this.phoneType = e
    },
    handleInput(e) {
      // debugger
      // this.inputValue = this.value
      this.$emit('input', this.formatPhone(e))
    }
  }
}
</script>
