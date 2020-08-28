<template>
  <cube-page type="button-view" title="Select">
    <div slot="content">
      <p class="select-title">基本使用：</p>
      <cube-select
        v-model="value"
        :title="title"
        :options="options"
        :placeholder="placeholder"
        :auto-pop="autoPop"
        :disabled="disabled"
        cancelTxt="取消"
        confirmTxt="确认"
        @change="change">
      </cube-select>
      <cube-button-group>
        <cube-button @click="modify">修改</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup
    },
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016,
        title: '请选择',
        placeholder: '请选择日期',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      },
      modify() {
        this.value = 2014
      }
    }
  }
</script>
<style lang="stylus">
  .select-title
    font-size: 12px
    color: #999
    line-height: 36px
</style>
