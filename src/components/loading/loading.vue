<template>
  <div class="cube-loading">
    <span class="cube-loading-spinners" :style="style">
      <i class="cube-loading-spinner" v-for="item in balde"></i>
    </span>
    <slot class="cube-loading-details"></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-loading'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number,
        default: 24
      }
    },
    computed: {
      style() {
        if (!this.size) {
          return
        }
        let size = this.size > 24 ? this.size : 24
        const value = size + 'px'
        const fontSize = size / 2 + 'px'
        return {
          width: value,
          height: value,
          fontSize: fontSize
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-loading
    font-size: $fontsize-large-xxx
  .cube-loading-spinners
    position: relative
    display: block
    width: 1em
    height: 1em
  .cube-loading-spinner
    position: absolute
    left: 44.5%
    top: 37%
    width: 0.22em // for rem
    height: 0.5em
    border-radius: 45%
    opacity: .25
    background-color: currentColor
    animation: spinner-fade 1s linear infinite
    for num in (1..12)
      &:nth-child({num})
        animation-delay: ((num - 1) / 12)s
        transform: rotate(30deg * (num - 12)) translateY(-150%)
  @keyframes spinner-fade
    0%
      opacity: .9
    50%
      opacity: .5
    100%
      opacity: 0
  .cube-loading-details 
    display: block
    font-size: 20px
</style>
