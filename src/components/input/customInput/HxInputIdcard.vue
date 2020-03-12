<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :inputCheck="inputCheckIdcard"
    :errorInfo="idcardErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from './HxInputFoundation.vue'

const REGEXP_IDCARD = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

export default {
  name: 'hx-input-idcard',
  components: {
    HxInputFoundation
  },
  props: {
    ...HxInputFoundation.props
  },
  data() {
    return {
      idcardErrorInfo: ''
    }
  },
  methods: {
    inputCheckIdcard(idcard) {
      const value = idcard
      if (!value /* 值校验不通过 */) {
        this.idcardErrorInfo = '请输入身份证号码！'
        return false
      } else if (!REGEXP_IDCARD.test(value) || value.length !== 18/* 格式校验不通过 */) {
        this.idcardErrorInfo = '请输入正确的身份证号码！'
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
