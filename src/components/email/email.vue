<template>
  <lan-input-foundation
    ref="lan-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :inputCheck="inputCheckEmail"
    :errorInfo="emailErrorInfo"
    :lanstyle="lanstyle"
    @input="handleInput"
  >
  </lan-input-foundation>
  
</template>

<script>
import LanInputFoundation from '../input-fdn/input-fdn'

const REGEXP_EMAIL = /^([a-z0-9\u4E00-\u9FA5\uFF00-\uFFFF/?^{|}~!#$%&'*+-]+[.]?)*[a-z0-9\u4E00-\u9FA5\uFF00-\uFFFF/?^{|}~!#$%&'*+-]+@([a-z0-9\u4E00-\u9FA5]+[-._~]?)*[a-z0-9\u4E00-\u9FA5]+\.[a-z]{2,6}$/

export default {
  name: 'lan-email',
  components: {
    LanInputFoundation
  },
  props: {
    ...LanInputFoundation.props
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
