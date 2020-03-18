<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :eye="eye"
    :placeholder="placeholder"
    :inputCheck="inputCheckPhone"
    :errorInfo="phoneErrorInfo"
    @input="handleInput"
    @defaultPhone="defaultPhone"
    @clickEye="clickEye"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from '../hx-input-fdn/hx-input-fdn'

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
      phoneType: '+86',
      eyeVal: []
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
      if (!phone) return ''
      const res = Array.prototype.reduce.call(this.deFormatPhone(phone), (temp, num, i) => temp + num + ((i % 4 === 2) ? ' ' : ''))
      // console.log('res', res)
      return res
    },
    deFormatPhone(phone) {
      return phone.replace(/\s/g, '')
    },
    inputCheckPhone(phone) {
      console.log(this.eye)
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
      // console.log(e)
      this.phoneType = e
    },
    handleInput(e) {
      // debugger
      // this.inputValue = this.value
      this.$emit('input', this.formatPhone(e))
    },
    clickEye(e) {
      this.eyeVal.push(this.value.replace(/\s/g, ''))
      console.log(e)
      console.log(this.eyeVal[0])
      var val = this.value.replace(/\s/g, '')
      // val = '1111'
      // console.log(val)
      // debugger
      if (e === true) {
        this.$emit('input', this.eyeVal[0])
      } else {
        var str1 = val.slice(0, 3)
        var str2 = val.slice(7, 11)
        var str3 = str1 + '****' + str2
        this.$emit('input', str3)
      }
    }
  }
}
</script>
