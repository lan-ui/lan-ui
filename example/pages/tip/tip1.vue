<template>
  <cube-page type="tip-view" title="Tip">
    <div slot="content">
      <div class="tip_wrap">
        <cube-tip ref="tip" direction="bottom" offsetRight="80%" :closedStyle="true" closedText="我知道了" style="left:12%;">引导标题文字<p>相关描述文字相关描述文字</p><p>相关描述文字相关描述文字</p></cube-tip>
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
      close() {
        console.log('click close button')
      },
      clickHandler() {
        console.log('click tip area')
      }
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
