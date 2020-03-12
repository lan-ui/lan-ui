<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :inputCheck="inputCheckAddress"
    :errorInfo="addressErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from './HxInputFoundation.vue'

// const REGEXP_ADDRESS = /^[^`!@#$%^&*.<>]+$/
const REGEXP_ADDRESS = /^[\u4e00-\u9fa5a-z]+$/gi

export default {
  name: 'hx-input-address',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
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
        this.addressErrorInfo = '请输入详细地址！'
        return false
      } else if (!REGEXP_ADDRESS.test(value)/* 格式校验不通过 */) {
        this.addressErrorInfo = '投保人详细地址中含有特殊字符,请修改'
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
