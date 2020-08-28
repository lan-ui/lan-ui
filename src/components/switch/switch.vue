<template>
  <div class="cube-switch" :class="_classContent">
    <input class="cube-switch-input" type="checkbox" v-model="checkboxValue" :disabled="disabled">
    <i class="cube-switch-ui" :style="_style"></i>
    <span class="cube-switch-yes" v-if="checkboxValue"><slot name="yes"></slot></span>
    <span class="cube-switch-no" v-else><slot name="no"></slot></span>
    <span class="cube-switch-label"><slot></slot></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-switch'

  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: ''
      },
      square: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        checkboxValue: this.value
      }
    },
    computed: {
      _style () {
        if (this.color) {
          return {
            'border-color': this.color,
            'background-color': this.color
          }
        }
      },
      _classContent () {
        return {
          'cube-switch-square': this.square
        }
      }
    },
    watch: {
      value (newVal) {
        this.checkboxValue = newVal
      },
      checkboxValue (newVal) {
        this.$emit(EVENT_INPUT, newVal)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  $switch-width = 70px
  $switch-height = 30px

  $switch-square-width = 58px
  $switch-square-height = 30px

  .cube-switch
    display: flex
    position: relative
    align-items: center
    .cube-switch-input
      position: absolute
      z-index: 1
      width: $switch-width
      height: $switch-height
      opacity: 0
      &:checked + .cube-switch-ui
        border-color: $switch-on-bgc
        background-color: $switch-on-bgc
        &::before
          transform: scale(0)
        &::after
          transform: translateX($switch-width - $switch-height - 2)
      &:disabled + .cube-switch-ui
        opacity: 0.3
    .cube-switch-ui
      position: relative
      display: block
      width: $switch-width
      height: $switch-height
      box-sizing: content-box
      border-radius: $switch-height
      background-color: $switch-off-border-color
      &::before, &::after
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        border-radius: $switch-height
        background-color: $switch-off-bgc
        transition: transform .4s cubic-bezier(.25, .1, .25, 1.28)
      &::after
        margin: 3px 4px
        width: 24px
        height: 24px
        background-color: $color-white
        box-shadow: 0 1px 3px rgba(0, 0, 0, .4)

    .cube-switch-yes
      position: absolute
      left:0
      width:$switch-width - 26
      font-style: normal
      text-align: center
      color: #fff
      [class^="icon-lan-"]
        font-size: 18px
      i 
        font-style: normal
    .cube-switch-no
      position: absolute
      right:0
      width:$switch-width - 26
      font-style: normal
      text-align: center
      color: #fff
      [class^="icon-lan-"]
        font-size: 18px
      i 
        
        font-style: normal
    .cube-switch-label
      display: block
      margin-left: 10px
      &:empty
        margin-left: 0
  .cube-switch.cube-switch-square
    .cube-switch-input
      width: $switch-square-width
      height: $switch-square-height
      &:checked + .cube-switch-ui
        &::after
          transform: translateX($switch-square-width - $switch-square-height - 2)
    .cube-switch-ui
      width: $switch-square-width
      height: $switch-square-height
      border-radius: 5px
      &::before, &::after
        border-radius: 5px
    .cube-switch-yes
      width:$switch-square-width - 26
    .cube-switch-no
      width:$switch-square-width - 26

</style>
