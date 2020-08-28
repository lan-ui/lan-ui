<template>
  <cube-page type="button-view" title="Button">
    <div slot="content">
      <form action="/">
        <p>常用按钮：</p>
        <cube-button-group>
          <cube-button>主要按钮</cube-button>
          <cube-button corner="medium">主要按钮</cube-button>
          <cube-button corner="big">主要按钮</cube-button>
          <cube-button :minor="true" >次要按钮</cube-button>
          <cube-button :minor="true" corner="medium">次要按钮</cube-button>
          <cube-button :minor="true" corner="big">次要按钮</cube-button>
          <cube-button :minor="true" >次要按钮<span slot="sub-title">按纽副文本</span></cube-button>
        </cube-button-group>
        <p>按钮状态：</p>
        <cube-button-group>
          <cube-button state="general">普通按钮</cube-button>
          <cube-button state="danger">危险按钮</cube-button>
          <cube-button state="warn">警告按钮</cube-button>
          <cube-button state="dotted">虚线按钮</cube-button>
          <cube-button state="invalid">失效按钮</cube-button>
        </cube-button-group>
        <p>按钮尺寸：</p>
        <cube-button-group>
          <ul class="btn-size">
            <li>
              <cube-button size="big">大型按钮</cube-button>
              <cube-button size="big" corner="medium">大型按钮</cube-button>
              <cube-button size="big" corner="big">大型按钮</cube-button>
            </li>
            <li>
              <cube-button size="medium">中型按钮</cube-button>
              <cube-button size="medium" corner="medium">中型按钮</cube-button>
              <cube-button size="medium" corner="big">中型按钮</cube-button>
            </li>
            <li>
              <cube-button size="small">小型按钮</cube-button>
              <cube-button size="small" corner="medium">小型按钮</cube-button>
              <cube-button size="small" corner="big">小型按钮</cube-button>
            </li>
          </ul>
        </cube-button-group>
        <p>图标按钮：</p>
        <cube-button-group>
          <ul class="ico-size">
            <li><cube-button icon="icon-lan-searchtwo" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-camera-filled" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-speech-filled" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-add" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-reduce" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-fabulous" :ico="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-searchtwo" :ico="true"  :minor="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-camera-filled" :ico="true" :minor="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-speech-filled" :ico="true" :minor="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-add" :ico="true" :minor="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-reduce" :ico="true" :minor="true" corner="big"></cube-button></li>
            <li><cube-button icon="icon-lan-fabulous" :ico="true" :minor="true" corner="big"></cube-button></li>
          </ul>
        </cube-button-group>
        <p>更多按钮：</p>
        <cube-button-group>
          <ul class="more-btn">
            <li><cube-button icon="icon-lan-searchtwo" corner="medium">搜索内容</cube-button></li>
            <li><cube-button icon="icon-lan-refresh" corner="medium">立即刷新</cube-button></li>
            <li><cube-button icon="icon-lan-image" corner="medium">选择图像</cube-button></li>
            <li><cube-button icon="icon-lan-folder" corner="medium">选择文件</cube-button></li>
            <li><cube-button icon="icon-lan-likefilled" corner="medium">收藏主题</cube-button></li>
            <li><cube-button icon="icon-lan-reply" corner="medium">回复话题</cube-button></li>
          </ul>
        </cube-button-group>
        <p>其他按钮：</p>
        <cube-button-group>
          <cube-button :active="true">Active Button</cube-button>
          <cube-button :disabled="true">Disabled Button</cube-button>
          <cube-button icon="cubeic-right">Button With Icon</cube-button>
        </cube-button-group>
        <cube-button-group>
          <cube-button :light="true">Light Button</cube-button>
          <cube-button :inline="true">Inline Button</cube-button>
          <cube-button :outline="true">Outline Button</cube-button>
          <cube-button :primary="true">Primary Button</cube-button>
        </cube-button-group>
        <div>
          <cube-checkbox-group v-model="buttonStyle" :horizontal="true">
            <cube-checkbox label="inline">Inline</cube-checkbox>
            <cube-checkbox label="outline">Outline</cube-checkbox>
            <cube-checkbox label="primary">Primary</cube-checkbox>
          </cube-checkbox-group>
          <cube-button-group>
            <cube-button :inline="inlineStyle" :outline="outlineStyle" :primary="primaryStyle">Demo Button</cube-button>
          </cube-button-group>
        </div>
      </form>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        buttonStyle: ['inline', 'outline', 'primary']
      }
    },
    computed: {
      inlineStyle() {
        return this.buttonStyle.indexOf('inline') >= 0
      },
      outlineStyle() {
        return this.buttonStyle.indexOf('outline') >= 0
      },
      primaryStyle() {
        return this.buttonStyle.indexOf('primary') >= 0
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>
<style lang="stylus" scoped>
  .btn-size
    margin-top: 10px
    overflow: hidden
    li
      float: left
      margin-right: 10px
      button
        margin-bottom: 10px
  .ico-size
    margin-top: 10px
    overflow: hidden
    li
      float: left
      margin-right: 9px
      button
        margin-bottom: 10px
  .more-btn
    margin-top: 10px
    overflow: hidden
    li
      float: left
      width:50%;
      padding:0 10px
      margin-bottom: 10px
      box-sizing:border-box
      button
        padding: 7.5px 0
</style>
