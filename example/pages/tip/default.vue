<template>
  <cube-page type="tip-view" title="Tip">
    <div slot="content">
      <p class="tip-eg">
        <cube-button
            :inline="true"
            :outline="true"
            :primary="true">lan-ui</cube-button>
        <cube-tip ref="tip3" direction="bottom" style="left:117px;top:-50px;">Top 提示文字</cube-tip>
        <cube-tip ref="tip4" direction="top" style="left:107px;top:50px;">Bottom 提示文字</cube-tip>
        <cube-tip ref="tip5" direction="left" style="left:220px;top:0px;">Right 提示文字</cube-tip>
        <cube-tip ref="tip6" direction="right" style="left:10px;top:0px;">Left 提示文字</cube-tip>
      </p>
      <p class="tip-eg tip-eg-top">
        <cube-button
          :inline="true"
          :outline="true"
          :primary="true"
          @click="$refs.tip.show()">Show tip</cube-button>
        <cube-tip ref="tip" direction="bottom" style="left:143px;top:-50px;">Tip</cube-tip>
      </p>
      <p class="tip-eg">
        <cube-button
            :inline="true"
            :outline="true"
            :primary="true"
            @click="showTip('bottom')">lan-ui</cube-button>
        <cube-tip
            ref="tip2"
            :direction="direction"
            :style="tipStyle"
            @close="close"
            @click="clickHandler">
          <div>Awesome!</div>
        </cube-tip>
      </p>
      <cube-button @click="showTip('bottom')">top</cube-button>
      <cube-button @click="showTip('top')">bottom</cube-button>
      <cube-button @click="showTip('right')">left</cube-button>
      <cube-button @click="showTip('left')">right</cube-button>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  // import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    mounted() {
      this.$refs.tip3.show()
      this.$refs.tip4.show()
      this.$refs.tip5.show()
      this.$refs.tip6.show()
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.$refs.tip2.show()

        switch (direction) {
          case 'bottom':
            this.tipStyle = 'left: 125px; top: -50px;'
            break
          case 'top':
            this.tipStyle = 'left: 125px; top: 50px;'
            break
          case 'right':
            this.tipStyle = 'left: 30px; top: 0px;'
            break
          case 'left':
            this.tipStyle = 'left: 220px; top: 0;'
            break
        }
      },
      close() {
        console.log('click close button')
      },
      clickHandler() {
        console.log('click tip area')
      }
    },
    components: {
      // CubeButtonGroup,
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tip-view
    .tip-eg
      position: relative
      left: -11px
      width: 370px
      margin: 70px auto
      text-align: center
    .cube-btn
      margin-bottom: 10px
    .tip-eg-top
      margin-top: 100px
</style>
