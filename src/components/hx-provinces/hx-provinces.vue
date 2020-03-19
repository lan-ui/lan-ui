<template>
  <div      
      class="hx-select"
      :class="disabled?'hx-select-disabled':''"
      :readonly="readonly"
      :readValue="readValue"
      :disabled="disabled"
      :data-pos="position">
    <div class="hx-select-wrap">
      <p class="hx-select-title">所在省市</p>
      <div class="hx-select-main" v-if="!readonly">
        <p class="select-main-info" @click="showAddressPicker">
          <input v-model="location" :placeholder="placeholder" :class="location==placeholder?'main-info-init':'main-info-selected'" readonly/>
          <i :class="disabled?'':'icon-hualife-region'"></i>
        </p>
      </div>
      <p class="select-main-info" v-else>{{readValue.text.join(' ')}}</p>
    </div>
    <cube-validator ref="validator" v-model="valid" :model="location" :rules="rules" :messages="messages" v-if="!(disabled || readonly)"></cube-validator>
  </div>
</template>

<script>
import { provinceList, cityList } from './../../common/data/provinces'

const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
})
const COMPONENT_NAME = 'hx-provinces'

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: '请选择开户行所在省市'
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
      locations: this.options,
      location: this.value ? this.value.text.join(' ') : this.placeholder,
      valid: undefined,
      rules: {
        custom: (val) => {
          return val !== this.placeholder
        }
      },
      messages: {
        custom: '请选择您的开户行所在省市'
      }
    }
  },
  computed: {
  },
  watch: {
  },
  mounted () {
    this.addressPicker = this.$createCascadePicker({
      title: '所在省市',
      data: this.locations ? this.locations : addressData,
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showAddressPicker() {
      if (!this.disabled) {
        this.addressPicker.show()
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.location = selectedText.join(' ')
      var value = {}
      value.text = selectedText
      value.value = selectedVal
      value.index = selectedIndex
      this.$emit('selected', value)
      // this.$createDialog({
      //   type: 'warn',
      //   content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
      //   icon: 'cubeic-alert'
      // }).show()
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
