<template>
  <hx-input-foundation
    ref="hx-input-foundation"
    :value="value"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :inputCheck="inputCheckAccuntName"
    :errorInfo="accuntNameErrorInfo"
    @input="handleInput"
  >
  </hx-input-foundation>
</template>

<script>
import HxInputFoundation from './HxInputFoundation.vue'

const REGEXP_ACCUNTNAME1 = /^[\u4e00-\u9fa5]{2,}$/
const REGEXP_ACCUNTNAME2 = /^[A-Za-z ]+$/

export default {
  name: 'hx-input-accountName',
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
      if (!value /* 值校验不通过 */) {
        this.accuntNameErrorInfo = '请输入账号名！'
        return false
      } else if (!REGEXP_ACCUNTNAME1.test(value) && !REGEXP_ACCUNTNAME2.test(value)) {
        this.accuntNameErrorInfo = '账号名格式不正确'
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
