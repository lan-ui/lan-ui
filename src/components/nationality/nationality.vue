<template>
  <div      
      class="lan-select"
      :class="disabled?'lan-select-disabled':''"
      :data-pos="position">
    <div class="lan-select-wrap">
      <p class="lan-select-title">国籍/地区</p>
      <div class="lan-select-main" v-if="!readonly">
        <p class="select-main-info" @click="showPicker">
          <input v-model="nationality" :placeholder="placeholder" :class="nationality==placeholder?'main-info-init':'main-info-selected'" readonly/>
          <i :class="disabled?'':'icon-lan-nationality'"></i>
        </p>
      </div>
      <p class="select-main-info" v-else>{{readValue.text}}</p>
    </div>
    <cube-validator ref="validator" v-model="valid" :model="nationality" :rules="rules" :messages="messages" v-if="!(disabled || readonly)"></cube-validator>
  </div>
</template>

<script>
import { nationalityList } from './../../common/data/nationality'
const list = nationalityList

const COMPONENT_NAME = 'lan-nationality'

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: '请选择国籍/地区'
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
      nationalitys: this.options,
      nationality: this.value ? this.value.text : this.placeholder,
      valid: undefined,
      rules: {
        custom: (val) => {
          return val !== this.placeholder
        }
      },
      messages: {
        custom: '请选择您的国籍/地区'
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
      if (!that.disabled) {
        if (!that.picker) {
          that.picker = that.$createPicker({
            title: '国籍/地区',
            cancelTxt: '取消',
            confirmTxt: '确定',
            data: that.nationalitys ? [that.nationalitys] : [list],
            onSelect: that.selectHandle,
            onCancel: that.cancelHandle
          })
        }
        this.picker.show()
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.nationality = selectedText[0]
      var value = []
      value.push(selectedText[0])
      value.push(selectedVal[0])
      this.$emit('selectNationality', value)
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
