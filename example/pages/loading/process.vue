<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
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
