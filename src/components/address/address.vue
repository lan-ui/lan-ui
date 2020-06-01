<template>
  <lan-input-foundation
    ref="lan-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :inputCheck="inputCheckAddress"
    :errorInfo="addressErrorInfo"
    :hxstyle="hxstyle"
    @input="handleInput"
  >
  </lan-input-foundation>
</template>

<script>
import LanInputFoundation from '../input-fdn/input-fdn'

// const REGEXP_ADDRESS = /^[^`!@#$%^&*.<>]+$/
const REGEXP_ADDRESS = /^[A-Za-z0-9\u4e00-\u9fa5]+$/

export default {
  name: 'lan-address',
  components: {
    LanInputFoundation
  },
  props: {
    ...LanInputFoundation.props
  },
  data() {
    return {
      addressErrorInfo: ''
    }
  },
  methods: {
    inputCheckAddress(address) {
      const value = address
      if (!value /* 值校验不通过 */) {
        this.addressErrorInfo = '请输入投保人详细地址到门牌号'
        return false
      } else if (!REGEXP_ADDRESS.test(value)/* 格式校验不通过 */) {
        this.addressErrorInfo = '投保人/被保人详细地址中含有特殊字符，请修改'
        return false
      } else if (value.length < 6) {
        this.addressErrorInfo = '投保人详细地址不能少于6个字符'
        return false
      } else {
        return true
      }
    },
    handleInput(e) {
      this.$emit('input', e)
    }
  }
}
</script>
