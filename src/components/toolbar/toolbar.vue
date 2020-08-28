<template>
  <div class="cube-toolbar" :class="_toolbarClass">
    <ul
      class="cube-toolbar-group cube-toolbar-group-more"
      v-if="moreActions"
      v-show="showMore">
      <cube-toolbar-item
        v-for="(action, index) in moreActions"
        :key="index"
        :action="action"
        @click.native="itemClick(action)"></cube-toolbar-item>
    </ul>
    <ul class="cube-toolbar-group">
      <cube-toolbar-item
        v-for="(action, index) in basicActions"
        :key="index"
        :action="action"
        @click.native="itemClick(action)"></cube-toolbar-item>
    </ul>
  </div>
</template>

<script>
  import CubeToolbarItem from './toolbar-item.vue'

  const COMPONENT_NAME = 'cube-toolbar'
  const EVENT_CLICK = 'click'
  const EVENT_MORE_CLICK = 'more-click'

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeToolbarItem
    },
    props: {
      actions: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      moreActions: {
        type: Array
      },
      toolbarStyle: {
        type: String,
        default: 'light'
      }
    },
    data() {
      return {
        showMore: false
      }
    },
    computed: {
      basicActions() {
        const basicActions = this.actions.slice()
        this.moreActions && basicActions.push({
          icon: 'cubeic-more',
          $cubeMore: true
        })
        return basicActions
      },
      _toolbarClass() {
        return {
          'cube-toolbar-light': this.toolbarStyle === 'light',
          'cube-toolbar-dark': this.toolbarStyle === 'dark',
          'cube-toolbar-grey': this.toolbarStyle === 'grey'
        }
      }
    },
    methods: {
      itemClick(action) {
        if (action.$cubeMore) {
          this.showMore = !this.showMore
          this.$emit(EVENT_MORE_CLICK, this.showMore)
        } else {
          this.$emit(EVENT_CLICK, action)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  $toolbar-spacing = 10px
  .cube-toolbar
    position: fixed
    left: $toolbar-spacing
    right: $toolbar-spacing
    bottom: $toolbar-spacing
    z-index: 2
    safe-area-mixin(padding-bottom, bottom)
  .cube-toolbar-dark
    .cube-toolbar-group
      border: none
      background-color: $toolbar-dark-bgc
      .cube-toolbar-item
        background-color: $toolbar-dark-bgc
        .cube-btn
          color: #fff
  .cube-toolbar-grey
    .cube-toolbar-group.cube-toolbar-group-more
      border:1px solid #ccc
      .cube-toolbar-item
        width: 100%
        border-bottom: 1px solid #ccc
    .cube-toolbar-group
      border: none
      background-color: transparent
      .cube-toolbar-item
        background-color: transparent
        &:last-child
          border-bottom: none
        .cube-btn
          color: #999
  .cube-toolbar-group
    display: flex
    height: 50px
    overflow: hidden
    box-sizing: border-box
    border-radius: 2px
    border: 1px solid #f2f2f2
    background-color: $toolbar-bgc
    .cube-toolbar-item
      .cube-btn
        font-size: $fontsize-medium
  .cube-toolbar-group.cube-toolbar-group-more
    height: auto
  .cube-toolbar-group-more
    position: absolute
    right: 0
    bottom: 50px
    display: inline-block
    margin-bottom: $toolbar-spacing
    padding: 0 15px
    border: 1px solid #f2f2f2
    .cube-toolbar-item
      width: 100%
      height: 36px
      padding: 5px 0
      border-bottom: 1px solid #ccc
      &:last-child
        border-bottom: none
        .cube-toolbar-down
          position: absolute
          top: 44px
          right: 9%
          height: $toolbar-spacing
          color: $toolbar-bgc
          font-size: $fontsize-large-xxx
          font-family: cube-icon
          font-style: normal
          text-shadow: 0 1px 3px $toolbar-active-bgc
          transform: scale(1.3)
          &::before
            content: "\E603"
            position: relative
            top: -10px
          &::after
            content: ""
            display: block
            position: absolute
            left: 30%
            top: 50%
            margin-top: -6px
            width: 40%
            height: 2px
            background-color: $toolbar-bgc
</style>
