<template>
  <cube-page type="switch-view" title="Switch Android Style">
    <template slot="content">
      <p class="switch-view-title">表单开关项</p>
      <p class="switch-view-main"><span>默认开</span><cube-switch v-model="values[0]" :square="true"></cube-switch></p>
      <p class="switch-view-main"><span>默认关</span><cube-switch v-model="values[1]" :square="true"></cube-switch></p>
      <p class="switch-view-main"><span>默认开不可修改</span><cube-switch v-model="values[2]" :disabled="disabled" :square="true"></cube-switch></p>
      <p class="switch-view-main"><span>默认关不可修改</span><cube-switch v-model="values[3]" :disabled="disabled" :square="true"></cube-switch></p>
      <p class="switch-view-main"><span>图标效果</span><cube-switch v-model="values[0]" :square="true"><i slot="yes" class="icon-lan-phonecall"></i><i slot="no" class="icon-lan-phonecalloff"></i></cube-switch></p>
      <p class="switch-view-main"><span>文字效果</span><cube-switch v-model="values[1]" :square="true"><i slot="yes">开</i><i slot="no">关</i></cube-switch></p>
      <p class="switch-view-main"><span>英文效果</span><cube-switch v-model="values[0]" :square="true"><i slot="yes">NO</i><i slot="no">OFF</i></cube-switch></p>
      <p class="switch-view-main"><span>密码显示</span><cube-switch v-model="values[1]" :square="true"><i slot="yes">123</i><i slot="no">···</i></cube-switch></p>
      <p class="switch-view-main"><span>状态显示</span><cube-switch v-model="values[0]" :square="true"><i slot="yes" class="icon-lan-visible"></i><i slot="no" class="icon-lan-invisible"></i></cube-switch></p>
      <p class="switch-view-main"><span>其他风格</span><cube-switch v-model="values[0]" color="#f95e5a" :square="true"></cube-switch></p>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'

  export default {
    data() {
      return {
        values: [true, false, true, false],
        disabled: true
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .switch-view
    .content
      overflow: auto
      .cube-switch
        float: right
        background-color: white
  .switch-view-title
    padding:15px 0
    border-bottom: 1px solid #ddd
    font-size: 12px
    color: #999
  .switch-view-main
    padding:10px 20px
    width: 100%
    border-bottom: 1px solid #ddd
    box-sizing: border-box
    overflow: hidden
    span
      float: left
      line-height: 30px
      font-size: 14px
      color: #666
</style>
