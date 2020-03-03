<template>
  <div      
      class="hx-select"
      :class="disabled?'hx-select-disabled':''"
      :data-pos="position">
    <div>
      <p class="hx-select-title">银行</p>
      <div class="hx-select-main" v-if="!readonly">
        <p class="select-main-info" @click="showPicker">
          <input v-model="bank" :placeholder="placeholder"  :class="bank==placeholder?'main-info-init':'main-info-selected'" readonly/>
          <i :class="disabled?'':'icon-hualife-bankcard'"></i>
        </p>
      </div>
      <p class="select-main-info" v-else>{{readValue.text}}</p>
    </div>
    <cube-validator ref="validator" v-model="valid" :model="bank" :rules="rules" :messages="messages" v-if="!(disabled || readonly)"></cube-validator>
  </div>
</template>

<script>
import { banksList } from './../../common/data/bank'
const list = banksList
const COMPONENT_NAME = 'hx-bank'

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: '请选择银行'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    },
    readValue: {
      type: Object
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      banks: this.options,
      bank: this.value ? this.value.text : this.placeholder,
      valid: undefined,
      rules: {
        custom: (val) => {
          return val !== this.placeholder
        }
      },
      messages: {
        custom: '请选择您的银行'
      }
    }
  },
  watch: {},
  methods: {
    showPicker() {
      var that = this
      if (!this.disabled) {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: '银行',
            cancelTxt: '取消',
            confirmTxt: '确定',
            data: that.banks ? [that.banks] : [list],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.bank = selectedText[0]
      var value = []
      value.push(selectedText[0])
      value.push(selectedVal[0])
      this.$emit('selected', value)
    },
    cancelHandle() {
      this.$refs.validator.validate()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@require '../../common/stylus/variable.styl';
@require '../../common/stylus/mixin.styl';
@require '../../common/stylus/common.styl';

</style>
