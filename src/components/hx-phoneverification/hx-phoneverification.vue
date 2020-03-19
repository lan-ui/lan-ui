<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :inputCheck="inputCheckVerification"
    :errorInfo="verificationErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from '../hx-input-fdn/hx-input-fdn'

const REGEXP_VERIFICATION = /^[0-9]{4}$/

export default {
  name: 'hx-input-verification',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
  },
  data() {
    return {
      verificationErrorInfo: ''
    }
  },
  methods: {
    inputCheckVerification(verification) {
      const value = verification
      if (!value /* 值校验不通过 */) {
        this.verificationErrorInfo = '请输入验证码！'
        return false
      } else if (!REGEXP_VERIFICATION.test(value)/* 格式校验不通过 */) {
        this.verificationErrorInfo = '验证码有误,请重新输入'
        return false
      } else {
        return true
      }
    },
    handleInput(e) {
      this.$emit('input', e)
      console.log(e)
    }
  }
}
</script>
