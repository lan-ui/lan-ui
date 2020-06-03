<template>
  <div      
      class="lan-select"
      :class="disabled?'lan-select-disabled':''"
      :data-pos="position">
    <div class="lan-select-wrap">
      <p class="lan-select-title">证件类型</p>
      <div class="lan-select-main" v-if="!readonly">
        <p class="select-main-info" @click="showPicker">
          <input v-model="certificatetype" :placeholder="placeholder" :class="certificatetype==placeholder?'main-info-init':'main-info-selected'" readonly/>
          <i :class="disabled?'':'icon-hualife-certificates'"></i>
        </p>
      </div>
      <p class="select-main-info" v-else>{{readValue.text}}</p>
    </div>
    <cube-validator ref="validator" v-model="valid" :model="certificatetype" :rules="rules" :messages="messages"  v-if="!(disabled || readonly)"></cube-validator>
  </div>
</template>

<script>
import { certificateTypeList } from './../../common/data/certificatetype'
const typeList = certificateTypeList

const COMPONENT_NAME = 'lan-certificatetype'

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: '请选择证件类型'
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
      certificatetypes: this.options,
      certificatetype: this.value ? this.value.text : this.placeholder,
      valid: undefined,
      rules: {
        custom: (val) => {
          return val !== this.placeholder
        }
      },
      messages: {
        custom: '请选择您的证件类型'
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    showPicker() {
      var that = this
      if (!this.disabled) {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: '证件类型',
            cancelTxt: '取消',
            confirmTxt: '确定',
            data: that.certificatetypes ? [that.certificatetypes] : [typeList],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.certificatetype = selectedText[0]
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
