<template>
  <button
    class="cube-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
    <p class="sub-title">
      <slot name="sub-title"></slot>
    </p>
  </button>
</template>

<script>
  const COMPONENT_NAME = 'cube-button'
  export default {
    name: COMPONENT_NAME,
    props: {
      icon: {
        type: String,
        default: ''
      },
      active: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      primary: {
        type: Boolean,
        default: false
      },
      outline: {
        type: Boolean,
        default: false
      },
      light: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'button'
      },
      minor: {
        type: Boolean,
        default: false
      },
      corner: {
        type: String,
        default: ''
      },
      state: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      ico: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      btnClass() {
        return {
          'cube-btn_active': this.active,
          'cube-btn_disabled': this.disabled,
          'cube-btn-inline': this.inline,
          'cube-btn-primary': this.primary,
          'cube-btn-outline': this.outline,
          'cube-btn-outline-primary': this.outline && this.primary,
          'cube-btn-light': this.light,
          'cube-btn-minor': this.minor,
          'cube-btn-corner-medium': this.corner === 'medium',
          'cube-btn-corner-big': this.corner === 'big',
          'cube-btn-state-general': this.state === 'general',
          'cube-btn-state-danger': this.state === 'danger',
          'cube-btn-state-warn': this.state === 'warn',
          'cube-btn-state-dotted': this.state === 'dotted',
          'cube-btn-state-invalid': this.state === 'invalid',
          'cube-btn-size-big': this.size === 'big',
          'cube-btn-size-medium': this.size === 'medium',
          'cube-btn-size-small': this.size === 'small',
          'cube-btn-ico': this.ico
        }
      }
    },
    methods: {
      handleClick(event) {
        if (this.disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"
  btn-active($bg, $border = null)
    &.cube-btn_active, &:active
      background: $bg
      if $border != null
        border-1px($border)

  .cube-btn
    display: block
    margin: 0
    padding: 10px 16px
    width: 100%
    text-align: center
    white-space: nowrap
    cursor: pointer
    font-size: $fontsize-large
    line-height: 1.6
    color: $btn-color
    background: $btn-bgc
    outline: none
    border: none
    border-radius: 0
    box-sizing: border-box
    -webkit-tap-highlight-color: transparent
    btn-active($btn-active-bgc)
    .sub-title
      font-size: $fontsize-small
      line-height: 1.1
    > i
      display: inline-block
      margin-right: 4px
      font-size: 100%
      transform: scale(1.13)
      transform-origin: right center

  .cube-btn-inline
    width: auto
    display: inline-block
    vertical-align: middle
    padding: 9px 10px
    font-size: $fontsize-small
    > i
      margin-right: 2px
      transform: scale(1.14)

  .cube-btn-primary
    color: $btn-primary-color
    background: $btn-primary-bgc
    btn-active($btn-primary-active-bgc)

  .cube-btn-light
    color: $btn-light-color
    background: $btn-light-bgc
    box-shadow: $box-shadow-content
    btn-active($btn-light-active-bgc)

  .cube-btn-outline
    color: $btn-outline-color
    background: $btn-outline-bgc
    border-1px($btn-outline-bdc)
    btn-active($btn-outline-active-bgc, $btn-outline-active-bdc)

  .cube-btn-outline-primary
    color: $btn-outline-primary-color
    background: $btn-outline-primary-bgc
    border-1px($btn-outline-primary-bdc)
    btn-active($btn-outline-primary-active-bgc, $btn-outline-primary-active-bdc)

  .cube-btn_disabled
    color: $btn-disabled-color
    background: $btn-disabled-bgc
    border-1px($btn-disabled-bdc)
    btn-active($btn-disabled-bgc, $btn-disabled-bdc)

  .cube-btn-minor
    color: $btn-minor-color
    background: $btn-minor-bgc
    border:1px solid $btn-minor-bdc
    &:active
      color: #fff

  .cube-btn-corner-medium
    border-radius: $radius-size-medium

  .cube-btn-corner-big
    border-radius: $radius-size-big

  .cube-btn-state-general
    color: $btn-general-color
    background: $btn-general-bgc
    border:1px solid $btn-general-bdc
    &:active
      btn-active($btn-general-active-bgc)

  .cube-btn-state-danger
    color: $btn-danger-color
    background: $btn-danger-bgc
    border:1px solid $btn-danger-bgc
    &:active
      btn-active($btn-danger-bgc)
      opacity: 0.8

  .cube-btn-state-warn
    color: $btn-warn-color
    background: $btn-warn-bgc
    border:1px solid $btn-warn-bgc
    &:active
      btn-active($btn-warn-bgc)
      opacity: 0.8

  .cube-btn-state-dotted
    color: $btn-dotted-color
    background: $btn-dotted-bgc
    border:1px dashed $btn-dotted-bdc
    &:active
      btn-active($btn-dotted-active-bgc)
  
  .cube-btn-state-invalid
    color: $btn-invalid-color
    background: $btn-invalid-bgc
    border:1px solid $btn-invalid-bdc
    &:active
      btn-active($btn-invalid-bgc)

  .cube-btn-size-big
    padding: 12.5px 0
    width: 120px
    text-align: center
  .cube-btn-size-medium
    padding: 9px 0
    width: 120px
    font-size: $fontsize-medium
    text-align: center

  .cube-btn-size-small
    padding: 5.5px 0
    width: 80px
    font-size: $fontsize-small
    text-align: center
  
  .cube-btn-ico
    padding: 8px 16px
    width: 50px
    font-size: $fontsize-large-xx
    text-align: center
    border:1px solid $btn-bgc
    > i  
      margin: 0
</style>
