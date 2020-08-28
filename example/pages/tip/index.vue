<template>
  <cube-page type="tip-view" title="Tip">
    <div slot="content">
    <cube-button-group>
      <cube-button @click="goTo('default')">小引导 Tips</cube-button>
      <cube-button @click="goTo('tip-demo')">小引导1</cube-button>
      <cube-button @click="goTo('tip-demo1')">小引导2</cube-button>
      <cube-button @click="goTo('tip-demo2')">小引导3</cube-button>
    </cube-button-group>
    <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubePage from 'example/components/cube-page.vue'
  import CubeView from 'example/components/cube-view.vue'

  export default {
    data() {
      return {
      }
    },
    methods: {
      goTo(subPath) {
        this.$router.push('/tip/' + subPath)
      }
    },
    components: {
      CubeButtonGroup,
      CubePage,
      CubeView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
