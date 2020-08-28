<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
    <cube-button-group>
      <cube-button @click="goTo('default')">加载loading</cube-button>
      <!-- <cube-button @click="goTo('process')">进程加载</cube-button> -->
      <cube-button @click="goTo('button')">按钮加载</cube-button>
      <cube-button @click="goTo('empty')">空页面加载</cube-button>
      <cube-button @click="goTo('modal')">模态加载</cube-button>
    </cube-button-group>
    <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubeView from 'example/components/cube-view.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup,
      CubeView
    },
    methods: {
      goTo(subPath) {
        this.$router.push('/loading/' + subPath)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cube-loading {
  display: inline-block;
  margin:0 10px;
  vertical-align: middle;
}
</style>
