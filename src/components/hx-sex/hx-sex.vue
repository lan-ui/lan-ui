<template>
  <div class="hx-sex" :readonly="readonly" :readValue="readValue">
    <p class="hx-sex-title">性别</p>
    <cube-radio-group v-model="radioValue" :options="options" :horizontal="true" v-if="!readonly"></cube-radio-group>
    <p v-else>{{readValue.label}}</p>
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
    background :#fff
  .hx-sex
    margin :0 20px
    height :50px
    line-height :50px
    color :#333;
    font-size :16px
    text-align:left
    border-bottom :1px solid #eee
    .hx-sex-title
      float :left
      width :112px
    // 覆盖cube ui样式
    .cube-radio-group[data-horz="true"]::after
      border:none
    .cube-radio-group[data-horz="true"] .cube-radio
      display block
      flex:none
      margin-right:10px
      padding:0
      width 64px
      height:28px
    .cube-radio
      margin-top:10px
      color:#4c4c4c
      font-size:14px
      border:1px solid #efefef
      border-radius:6px
      box-sizing:border-box
    .cube-radio-hollow
      border:none
    .cube-radio-ui
      display none
    .border-right-1px::after
      border:none
    .cube-radio_disabled
      color:#ccc
      border:1px solid #efefef
    .cube-radio_selected
      color:#1890ff
      border:1px solid #1890ff
</style>
