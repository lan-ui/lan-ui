<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :inputCheck="inputCheckAccuntName"
    :errorInfo="accuntNameErrorInfo"
    :hxstyle="hxstyle"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from '../hx-input-fdn/hx-input-fdn'

const REGEXP_ACCUNTNAME1 = /^[\u4e00-\u9fa5]{2,}$/
const REGEXP_ACCUNTNAME2 = /^[A-Za-z]{1}[A-Za-z ]{2,}$/

export default {
  name: 'hx-account-name',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
  },
  data() {
    return {
      accuntNameErrorInfo: ''
    }
  },
  methods: {
    inputCheckAccuntName(accuntName) {
      const value = accuntName
      if (!value || value === ' ' /* 值校验不通过 */) {
        this.accuntNameErrorInfo = '请输入账户名！'
        return false
      } else if (!REGEXP_ACCUNTNAME1.test(value) && !REGEXP_ACCUNTNAME2.test(value)) {
        this.accuntNameErrorInfo = '账户名格式不正确'
        return false
      } else {
        return true
      }
    },
    handleInput(e) {
      console.log(e)
      this.$emit('input', e)
    }
  }
}
</script>
