<template>
  <cube-page type="checkbox-group-view" title="CheckboxGroup">
    <template slot="content">
      <p class="title">基本使用：</p><br/>
      <cube-checkbox-group v-model="checkList" :options="options" />
      <br>
      <cube-checkbox-group v-model="checkList" :options="options" :horizontal="true" position="right" shape="square" :hollow-style="true" />
      <br>
      <cube-checkbox-group v-model="checkList">
        <cube-checkbox option="1">复选框</cube-checkbox>
        <cube-checkbox option="2">复选框</cube-checkbox>
        <cube-checkbox :option="{value: '3', disabled: true}">禁用复选框</cube-checkbox>
        <cube-checkbox :option="{value: '4', disabled: true}">禁用当前勾选的复选框</cube-checkbox>
      </cube-checkbox-group>
      <cube-checkbox-group v-model="colCheckList" :options="colOptions" :col-num="Math.floor(colNum)" />
      <p class="title">列表模式1：</p>
      <cube-checkbox-group v-model="checkList" :options="lists" position="right" />
      <p class="title">列表模式2：</p>
      <cube-checkbox-group v-model="checkList">
        <cube-checkbox position="right" option="1">选项A<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox position="right" option="2">选项B<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox position="right" option="3">选项C<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox position="right" option="4">选项D<em>辅助描述文字</em></cube-checkbox>
      </cube-checkbox-group>
      <p class="title">列表模式3：</p>
      <cube-checkbox-group v-model="checkList" :options="lists" shape="square" />
      <p class="title">列表模式4：</p>
      <cube-checkbox-group v-model="checkList">
        <cube-checkbox option="1" shape="square">选项A<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox option="2" shape="square">选项B<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox :option="{value: '3', disabled: true}" shape="square">选项C<em>辅助描述文字</em></cube-checkbox>
        <cube-checkbox :option="{value: '4', disabled: true}" shape="square">选项D<em>辅助描述文字</em></cube-checkbox>
      </cube-checkbox-group>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        checkList: ['1', '4'],
        options: [
          '1',
          '2',
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4',
            disabled: true
          }
        ],
        colOptions: ['1', '2', '3', '4', '5', '6', '7', '8'],
        colNum: 3,
        colCheckList: [],
        lists: [
          {
            label: '选项A',
            value: '1'
          },
          {
            label: '选项B',
            value: '2'
          },
          {
            label: '选项C',
            value: '3'
          },
          {
            label: '选项D',
            value: '4'
          }
        ]
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-group-view
    .title {
      margin-top:10px
      padding:16px
      border-top 1px solid #e4e4e4
      border-bottom 1px solid #e4e4e4
      background rgba(245,245,245,1)
      color #666
    }
</style>
