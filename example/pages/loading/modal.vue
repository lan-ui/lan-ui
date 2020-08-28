<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
      <cube-popup type="my-popup" :mask="false" ref="myPopup">
        <cube-loading :size="36"></cube-loading>
        <p>全局加载提示</p>
      </cube-popup>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'

  export default {
    components: {
      CubePage
    },
    mounted() {
      const modalLoading = this.$refs['myPopup']
      modalLoading.show()
    },
    methods: {
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cube-my-popup
    .cube-popup-center
      text-align: center
      .cube-popup-content
        padding: 20px 30px
    .cube-popup-content
      padding: 80px 20px
      color: #fff
      border-radius: 10px
      background-color: rgba(0, 0, 0, .8)
      p
        margin-top: 20px
        font-size: 14px
</style>
