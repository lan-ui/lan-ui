<template>
  <!-- <div class="hx-sex" :readonly="readonly" :readValue="readValue">
    <p class="hx-sex-title">性别</p>
    <cube-radio-group v-model="radioValue" :options="options" :horizontal="true" v-if="!readonly"></cube-radio-group>
    <p v-else>{{readValue.label}}</p>
  </div> -->
  <div class="hx-sex" :class="disabled?'hx-sex-disabled':''" :readonly="readonly" :readValue="readValue" :disabled="disabled">
    <p class="hx-sex-title">性别</p>
    <cube-checker type="radio" v-model="radioValue" :options="options" :horizontal="true" v-if="!readonly"></cube-checker>
    <p v-else>{{readValue.text}}</p>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'hx-sex'
  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    inject: {
      radioGroup: {
        default: null
      }
    },
    props: {
      options: {
        type: Array
      },
      value: [String, Number],
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      initValue: {
        type: String
      },
      readValue: {
        type: Object,
        default: function () {
          return {label: '男', value: 0}
        }
      }
    },
    data() {
      return {
        radioValue: this.value
      }
    },
    created() {
      const radioGroup = this.radioGroup
      if (radioGroup) {
        this.radioValue = radioGroup.radioValue
        this._cancelWatchGroup = this.$watch(() => {
          return radioGroup.radioValue
        }, (newValue) => {
          this.radioValue = newValue
        })
      }
    },
    beforeDestroy() {
      this._cancelWatchGroup && this._cancelWatchGroup()
      this._cancelWatchGroup = null
    },
    computed: {
    },
    watch: {
      value(newV) {
        this.radioValue = newV
      },
      radioValue(newV) {
        if (typeof this.value === 'number') {
          newV = Number(newV)
        }
        this.$emit(EVENT_INPUT, newV)
        if (this.radioGroup) {
          this.radioGroup.radioValue = newV
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"
  .cube-page
    background: #fff
  .hx-sex
    margin: 0 20px
    height: 50px
    line-height: 50px
    font-size: 16px
    border-bottom: 1px solid #eee
    &.hx-sex-disabled 
      color: $color-light-grey-s
    .hx-sex-title
      float: left
      width: 112px
    .cube-checker-item
      margin-top: 10px
      margin-right:1 0px
      padding: 0
      width: 64px
      height: 28px
      line-height: 28px
      border-radius: 6px
    .cube-checker-item_active
      color: $checker-item-active-color
      background: $checker-item-active-bgc
      border-1px($checker-item-active-bdc, 6px)
    .cube-checker-item_disabled
      color: $checker-item-disabled-color
      border-1px($checker-item-disabled-bdc, 6px)
      background: $checker-item-disabled-bgc
</style>
