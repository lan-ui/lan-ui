<template>
  <cube-page type="tip-view" title="Tip">
    <div slot="content">
      <div class="tip_wrap">
        <cube-tip ref="tip" direction="bottom" offsetRight="80%" :closed="true" :lightStyle="true" style="top:0;left:30%;">引导标题文字</cube-tip>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    mounted() {
      this.$refs.tip.show()
    },
    methods: {
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tip-view
    .tip_wrap
      position: relative
</style>
