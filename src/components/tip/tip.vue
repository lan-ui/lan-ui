<template>
  <transition name="cube-tip-zoom">
    <div class="cube-tip" :class="_contentClass" :data-dir="direction" v-show="isVisible" @click="handleClick">
      <i class="cube-tip-angle" ref="angle"></i>
      <button ref="tipBtn" :class="closedStyle?'cube-tip-close-text':'cube-tip-close cubeic-close'" @click.stop="close" v-if="!closed">{{closedText}}</button>
      <div class="cube-tip-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import visibilityMixin from '../../common/mixins/visibility'

  const COMPONENT_NAME = 'cube-tip'
  const EVENT_CLICK = 'click'
  const EVENT_CLOSE = 'close'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin],
    props: {
      direction: {
        type: String,
        default: 'top'
      },
      offsetLeft: {
        type: [String, Number],
        default: 0
      },
      offsetRight: {
        type: [String, Number],
        default: 0
      },
      offsetTop: {
        type: [String, Number],
        default: 0
      },
      offsetBottom: {
        type: [String, Number],
        default: 0
      },
      closed: {
        type: Boolean,
        default: false
      },
      lightStyle: {
        type: Boolean,
        default: false
      },
      closedStyle: {
        type: Boolean,
        default: false
      },
      closedText: {
        type: String,
        default: ''
      }
    },
    mounted() {
      this.$nextTick(() => {
        let angleEleStyle = this.$refs.angle.style
        const boxMap = {
          left: 'right',
          right: 'left',
          top: 'bottom',
          bottom: 'top'
        }
        const offsets = [
          {
            name: 'offsetLeft',
            target: 'left',
            percentFix: {
              marginLeft: '-6px'
            }
          },
          {
            name: 'offsetRight',
            target: 'right',
            percentFix: {
              marginRight: '-6px'
            }
          },
          {
            name: 'offsetTop',
            target: 'top',
            percentFix: {
              marginTop: '-6px'
            }
          },
          {
            name: 'offsetBottom',
            target: 'bottom',
            percentFix: {
              marginBottom: '-6px'
            }
          }
        ]
        offsets.forEach((offset) => {
          const value = this[offset.name]
          if (value !== 0) {
            const isNum = typeof value === 'number'
            angleEleStyle[offset.target] = value + (isNum ? 'px' : '')
            if (offset.percentFix && !isNum) {
              Object.keys(offset.percentFix).forEach((key) => {
                angleEleStyle[key] = offset.percentFix[key]
              })
            }
            angleEleStyle[boxMap[offset.target]] = 'auto'
          }
        })
      })
    },
    computed: {
      _contentClass() {
        return {
          'cube-tip-light': this.lightStyle,
          'cube-tip-text': this.closedStyle
        }
      }
    },
    methods: {
      handleClick() {
        if (!this.closed) {
          this.hide()
          this.$emit(EVENT_CLICK)
        }
      },
      close() {
        this.hide()
        this.$emit(EVENT_CLOSE)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-tip
    display: flex
    z-index: 10
    position: absolute
    padding: 10px 38px 10px 16px
    max-height: 60px
    font-size: $fontsize-medium
    color: $tip-color
    background: $tip-bgc
    border-radius: 5px
    transition: opacity .2s
    &[data-dir="top"], &[data-dir="bottom"]
      .cube-tip-angle
        left: 50%
        transform: translateX(-50%)
    &[data-dir="top"]
      .cube-tip-angle
        top: 0
        &::before
          margin-top: -6px
          transform: rotate(0deg)
    &[data-dir="bottom"]
      .cube-tip-angle
        bottom: 0
        &::before
          margin-bottom: -6px
          transform: rotate(180deg)
    &[data-dir="left"], &[data-dir="right"]
      .cube-tip-angle
        top: 50%
        transform: translateY(-50%)
    &[data-dir="left"]
      .cube-tip-angle
        left: 0
        &::before
          margin-left: -9px
          transform: rotate(-90deg)
    &[data-dir="right"]
      .cube-tip-angle
        right: 0
        &::before
          margin-right: -9px
          transform: rotate(90deg)
  .cube-tip-light
    background: $tip-light-bgc
    .cube-tip-angle
      &::before
        border-color: transparent transparent $tip-light-bgc
  .cube-tip-angle
    position: absolute
    &::before
      content: ""
      display: block
      border-width: 0 6px 6px
      border-style: solid
      border-color: transparent transparent $tip-bgc
  .cube-tip-close
    position: absolute
    right: 14px
    top: 12px
    width: 12px
    height: 12px
    padding: 0
    color: inherit
    outline: none
    border: none
    background: none
    transform: scale(1.3)
  .cube-tip-text
    padding-right:84px
  .cube-tip-close-text
    position: absolute
    top: 50%
    right: 14px
    margin-top: -14px
    color: #fff
    padding: 5px
    border:1px solid #fff
    background: transparent
    font-size: $fontsize-small
    outline: none
  .cube-tip-content
    min-height: 18px
    line-height: 18px
    flex-fix()
    overflow: hidden

  .cube-tip-zoom-enter-active
    animation: tip-in .4s

  .cube-tip-zoom-leave-active
    animation: tip-out .2s

  @keyframes tip-in
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)

  @keyframes tip-out
    from
      transform: scale(1)
      opacity: 1
    to
      transform: scale(0)
      opacity: 0
</style>
