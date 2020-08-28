<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
      <p class="loading-title">无文案样式</p>
      <cube-loading></cube-loading>
      <cube-loading :size="35"></cube-loading>
      <cube-loading :size="43"></cube-loading>
      <cube-loading :size="52"></cube-loading>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'

  export default {
    components: {
      CubePage
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-page .loading-view >.wrapper {
  color: rgb(153, 153, 153)
}
.loading-title {
  margin-top:20px;
  color:rgb(153 ,153 ,153);
  font-size:12px;
}
</style>
