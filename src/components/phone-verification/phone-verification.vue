<template>
  <lan-input-foundation
    ref="lan-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :inputCheck="inputCheckVerification"
    :errorInfo="verificationErrorInfo"
    :lanstyle="lanstyle"
    @input="handleInput"
  >
  </lan-input-foundation>
</template>

<script>
import LanInputFoundation from '../input-fdn/input-fdn'

const REGEXP_VERIFICATION = /^[0-9]{4}$/

export default {
  name: 'lan-phone-verification',
  components: {
    LanInputFoundation
  },
  props: {
    ...LanInputFoundation.props
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
      // console.log(e)
    }
  }
}
</script>
