<template>
  <cube-page type="checkbox-view" title="Checkbox">
    <template slot="content">
      <p>基本使用：</p>
      <ul class="checkbox">
        <li><cube-checkbox v-model="bCheckedF">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedF" :option="{disabled: true}">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT" :option="{disabled: true}">复选框</cube-checkbox></li>
      </ul>
      <ul class="checkbox">
        <li><cube-checkbox v-model="bCheckedF" shape="square" :hollow-style="true">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT" shape="square" :hollow-style="true">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedF" shape="square" :option="{disabled: true}" :hollow-style="true">复选框</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT" shape="square" :option="{disabled: true}" :hollow-style="true">复选框</cube-checkbox></li>
      </ul>
      <p>独立使用（动态）：</p>
      <div class="select">
        <cube-checkbox v-model="bCheckedF">
          勾选同意<a href="javascript:;" @click.stop>《用户服务协议》</a>
        </cube-checkbox>
      </div>
      <!-- <div class="select"><div><cube-checkbox v-model="bCheckedF">勾选同意</cube-checkbox></div><a href="https://www.baidu.com">《用户服务协议》</a></div> -->
      <p>独立使用（静态）：</p>
      <ul>
        <li><cube-checkbox v-model="bCheckedF">默认效果</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT">选中效果</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedF" :option="{disabled: true}">禁用效果</cube-checkbox></li>
        <li><cube-checkbox v-model="bCheckedT" :option="{disabled: true}">选中禁用</cube-checkbox></li>
      </ul>
      <p>其他使用：</p>
      <cube-checkbox v-model="checked">Checkbox</cube-checkbox>
      <p>checked value: {{checked}}</p>
      <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">Styled Checkbox</cube-checkbox>
      <br><br>
      <cube-checkbox v-model="checked2" :option="optionValue"></cube-checkbox>
      <p>checked value (with option) : {{checked2}}</p>
      <cube-checkbox v-model="checked2" :option="{disabled: true}" :hollow-style="true">
        Disabled Checkbox
      </cube-checkbox>
      <br><br>
      <cube-checkbox class="with-click" v-model="checked2">
        Agree <a href="javascript:;" @click.stop>《xxx》</a>
      </cube-checkbox>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        bCheckedF: false,
        bCheckedT: true,
        checked: true,
        checked2: 'optionValue',
        optionValue: {
          label: 'Option Checkbox',
          value: 'optionValue',
          disabled: false
        }
      }
    },
    components: {
      CubePage
    },
    methods: {
      fnddd() {
        console.log(1111)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-view
    .content
      >
        *
          margin: 10px 0
    .cube-checkbox
      background-color: #fff
    .with-click
      .cube-checkbox-label
        a
          position: relative
          z-index: 1
    .checkbox 
      overflow hidden
      li
        float left
      .cube-checkbox 
        color #666
        padding:0 0.5rem
    .title {
      padding:1rem
      border-top 1px solid #e4e4e4
      border-bottom 1px solid #e4e4e4
      background rgba(245,245,245,1)
      color #666
    }
    .list
      li
        margin-left 1rem
        border-bottom 1px solid #e4e4e4
      .cube-checkbox
        padding 0 1rem 0 0
</style>
