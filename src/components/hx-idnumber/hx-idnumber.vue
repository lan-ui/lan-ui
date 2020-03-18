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
    :inputCheck="inputCheckIdcard"
    :errorInfo="idcardErrorInfo"
    @input="handleInput"
    @clickEye="clickEye"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from '../hx-input-fdn/hx-input-fdn'

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
      idcardErrorInfo: '',
      eyeVal: []
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
    },
    clickEye(e) {
      this.eyeVal.push(this.value.replace(/\s/g, ''))
      var val = this.value.replace(/\s/g, '')
      if (e === true) {
        this.$emit('input', this.eyeVal[0])
      } else {
        var str1 = val.slice(0, 4)
        var str2 = val.slice(14, 18)
        var str3 = str1 + '**********' + str2
        this.$emit('input', str3)
      }
    }
  }
}
</script>
