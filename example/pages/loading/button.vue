<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
      <div class="loading-main"></div>
      <cube-button><cube-loading :size="20"></cube-loading>操作按钮</cube-button>
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
  background:rgba(245, 245, 245, 1);
}
.loading-main {
  margin-bottom:20px;
  width:100%;
  height:250px;
  background:#fff;
}
</style>