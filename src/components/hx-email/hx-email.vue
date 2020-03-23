<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :inputCheck="inputCheckEmail"
    :errorInfo="emailErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
  
</template>

<script>
import HxInputFoundation from '../hx-input-fdn/hx-input-fdn'

const REGEXP_EMAIL = /^([a-z0-9\u4E00-\u9FA5\uFF00-\uFFFF/?^{|}~!#$%&'*+-]+[.]?)*[a-z0-9\u4E00-\u9FA5\uFF00-\uFFFF/?^{|}~!#$%&'*+-]+@([a-z0-9\u4E00-\u9FA5]+[-._~]?)*[a-z0-9\u4E00-\u9FA5]+\.[a-z]{2,6}$/

export default {
  name: 'hx-input-email',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
  },
  data() {
    return {
      emailErrorInfo: ''
    }
  },
  methods: {
    inputCheckEmail(val) {
      // val = val.toLocaleLowerCase()
      // console.log(val)
      if (val === '') {
        this.emailErrorInfo = '请输入邮箱地址！'
        return false
      } else if (!REGEXP_EMAIL.test(val)) {
        this.emailErrorInfo = '请输入正确的邮箱地址！'
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
