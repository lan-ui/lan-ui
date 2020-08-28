<template>
  <div
    class="cube-tab"
    :class="{'cube-tab_active': isActive}"
    @click="handleClick">
    <slot name="icon">
      <i :class="icon"></i>
    </slot>
    <slot>
      <div v-html="label"></div>
    </slot>
    <slot name="tips">
      <div class="cube-tab-tips" v-html="tips" v-if="tips"></div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      value: {
        type: [String, Number],
        default() {
          return this.label
        }
      },
      icon: {
        type: String,
        default: ''
      },
      tips: {
        type: [String, Number],
        default: ''
      }
    },
    mounted () {
      this.$parent.addTab(this)
    },
    destroyed () {
      this.$parent.removeTab(this)
    },
    computed: {
      isActive () {
        return this.$parent.value === this.value
      }
    },
    methods: {
      handleClick (item) {
        this.$parent.trigger(this.value)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab
    position: relative
    flex: 1
    padding: 7px 0
    color: $tab-color
    text-align: center
    // border-top:1px solid #e9e9e9
    // border-bottom:1px solid #e9e9e9
    div
      line-height: 36px
      margin-left: 4px
      &.cube-tab-tips
        position: absolute
        top: 8px
        right: 0
        padding: 0 2px
        min-width: 12px
        height: 16px
        font-size: $fontsize-small
        line-height: 16px
        background: red
        border-radius: 8px
        color: #fff

  .cube-tab_active
    color: $tab-active-color
</style>
