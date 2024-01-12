<template>
  <div class="cube-tab-bar" :class="_classContent">
    <slot>
      <cube-tab
        v-for="(item, index) in data"
        :label="item.label"
        :value="item.value"
        :icon="item.icon"
        :tips="item.tips"
        :key="item.value || item.label">
      </cube-tab>
    </slot>
    <div v-if="showSlider" ref="slider" class="cube-tab-bar-slider"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import { findIndex } from '../../common/helpers/util'
  import CubeTab from './tab.vue'

  const COMPONENT_NAME = 'cube-tab-bar'

  const EVENT_INPUT = 'input'
  const EVENT_CHANGE = 'change'
  const EVENT_CLICK = 'click'

  const TRANSFORM = prefixStyle('transform')
  const TRANSITION = prefixStyle('transition')

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeTab
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      data: {
        type: Array,
        default () {
          return []
        }
      },
      inline: {
        type: Boolean,
        default: false
      },
      showSlider: {
        type: Boolean,
        default: false
      },
      useTransition: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    },
    computed: {
      _classContent() {
        return {
          'cube-tab-bar_inline': this.inline,
          'cube-tab-bar_bottom': this.position === 'bottom',
          'cube-tab-bar_vertical': this.position === 'vertical'
        }
      }
    },
    watch: {
      value () {
        this._updateSliderStyle()
      }
    },
    created () {
      this.tabs = []
    },
    mounted () {
      this._updateSliderStyle()
      window.addEventListener('resize', this._resizeHandler)
    },
    activated() {
      /* istanbul ignore next */
      window.addEventListener('resize', this._resizeHandler)
    },
    deactivated() {
      /* istanbul ignore next */
      this._cleanUp()
    },
    beforeDestroy () {
      /* istanbul ignore next */
      this._cleanUp()
      clearTimeout(this._resizeTimer)
    },
    methods: {
      addTab (tab) {
        this.tabs.push(tab)
      },
      removeTab (tab) {
        const index = this.tabs.indexOf(tab)
        if (index > -1) this.tabs.splice(index, 1)
      },
      trigger (value) {
        // emit click event as long as tab is clicked
        this.$emit(EVENT_CLICK, value)
        // only when value changed, emit change & input event
        if (value !== this.value) {
          const changedEvents = [EVENT_INPUT, EVENT_CHANGE]
          changedEvents.forEach((eventType) => {
            this.$emit(eventType, value)
          })
        }
      },
      _updateSliderStyle () {
        /* istanbul ignore if */
        if (!this.showSlider) return
        const slider = this.$refs.slider
        this.$nextTick(() => {
          if (this.position === 'vertical') {
            const { height, index } = this._getSliderHeightAndIndex()
            slider.style.height = `${height}px`
            slider.style.right = '0'
            this.setSliderTransformY(this._getOffsetTop(index))
          } else {
            const { width, index } = this._getSliderWidthAndIndex()
            slider.style.width = `${width}px`
            slider.style.left = '0'
            this.setSliderTransform(this._getOffsetLeft(index))
          }
        })
      },
      setSliderTransform (offset) {
        const slider = this.$refs.slider
        if (typeof offset === 'number') {
          offset = `${offset}px`
        }
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = `${TRANSFORM} 0.2s linear`
          slider.style[TRANSFORM] = `translateX(${offset}) translateZ(0)`
        }
      },
      setSliderTransformY (offset) {
        const slider = this.$refs.slider
        if (typeof offset === 'number') {
          offset = `${offset}px`
        }
        if (slider) {
          if (this.useTransition) slider.style[TRANSITION] = `${TRANSFORM} 0.2s linear`
          slider.style[TRANSFORM] = `translateY(${offset}) translateZ(0)`
        }
      },
      _getSliderWidthAndIndex () {
        let width = 0
        let index = 0
        if (this.tabs.length > 0) {
          index = findIndex(this.tabs, (tab) => tab.value === this.value)
          width = this.tabs[index].$el.clientWidth
        }
        return {
          width,
          index
        }
      },
      _getSliderHeightAndIndex () {
        let height = 0
        let index = 0
        if (this.tabs.length > 0) {
          index = findIndex(this.tabs, (tab) => tab.value === this.value)
          height = this.tabs[index].$el.clientHeight
        }
        return {
          height,
          index
        }
      },
      _getOffsetLeft (index) {
        return this.tabs[index].$el.offsetLeft || 0
      },
      _getOffsetTop (index) {
        return this.tabs[index].$el.offsetTop || 0
      },
      _resizeHandler () {
        clearTimeout(this._resizeTimer)
        this._resizeTimer = setTimeout(() => {
          this._updateSliderStyle()
        }, 60)
      },
      _cleanUp () {
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab-bar
    position: relative
    display: flex
    align-items: center
    justify-content: center
    border-top:1px solid #e9e9e9
    border-bottom:1px solid #e9e9e9

  .cube-tab-bar.cube-tab-bar_bottom
    position: fixed
    bottom: 0
    width: 100%
    
  .cube-tab-bar.cube-tab-bar_vertical
    flex-wrap: wrap
    border: none
    border-right:1px solid #e9e9e9
    .cube-tab
      width: 100%
      flex-basis: unset
      .cube-tab-tips
        right: 5px
    .cube-tab-bar-slider
      top: 0
      height:50px
      width:2px


  .cube-tab-bar_inline
    .cube-tab
      display: flex
      align-content: center
      justify-content: center
      i 
        line-height: 36px

  .cube-tab-bar-slider
    position: absolute
    bottom: 0
    height: 2px
    width: 20px
    background-color: $tab-slider-bgc
</style>
