<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
      <cube-popup type="my-popup" ref="myPopup" class="empty">
        <cube-loading :size="36"></cube-loading>
        <p>正在加载</p>
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
    }
  }
</script>
<style lang="stylus">
.cube-page .header
  z-index: 999
.empty.cube-my-popup
  .cube-popup-mask
    background: rgb(221,221,221)
  .cube-popup-center
    text-align: center
    .cube-popup-content
      padding: 20px 30px
  .cube-popup-content
    padding: 80px 20px
    color: #999
    background: transparent
    p
      margin-top: 20px
      font-size: 14px
</style>
