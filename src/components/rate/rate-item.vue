<template>
  <!-- <li class="cube-rate-item" :class="{ 'cube-rate-item_active': index <= $parent.tempValue }">
    <slot>
      <div class="cube-rate-item-def"></div>
    </slot>
  </li> -->
  <li class="cube-rate-item" :class="index <= $parent.tempValue?activeIcon:icon" :style="'color:'+(index <= $parent.tempValue?activeColor:color)"></li>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-rate-item'
  export default {
    name: COMPONENT_NAME,
    props: {
      index: {
        type: Number,
        default: 0
      },
      activeIcon: {
        type: String,
        default: 'icon-lan-starfilled'
      },
      icon: {
        type: String,
        default: 'icon-lan-star'
      },
      activeColor: {
        type: String,
        default: '#999'
      },
      color: {
        type: String,
        default: '#999'
      }
    },
    computed: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/mixin.styl"

  .cube-rate-item
    font-size:28px
    color:#f6bc4d
    .rate-item-label
      font-size:14px
      color:#999
    // position: relative
    // width: 32px
    // flex: 0 1 auto
    // margin-right: 6px
    // &::after
    //   content: ""
    //   display: block
    //   padding: 50% 0
    // &:last-child
    //   margin-right: 0
  //   .cube-rate-item-def
  //     position: absolute
  //     width: 100%
  //     height: 100%
  //     background-size: 100%
  //     background-repeat: no-repeat
  //     background-position: center
  //     content:'&#xe62c;'
  //     bg-image("evaluation_icon_star_gray")
  // .cube-rate-item_active
  //   .cube-rate-item-def
  //     bg-image("evaluation_icon_star")
</style>
