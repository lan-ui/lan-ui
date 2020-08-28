<template>
  <cube-page type="tabs-basic-view" title="tab-basic">
    <div slot="content">
      <div class="tabs_main">
        <cube-tab-bar v-model="selectedLabel" show-slider>
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label" :tips="item.tips"></cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="selectedLabel">
          <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            <div class="tab_content">{{item.content}}</div>
          </cube-tab-panel>
        </cube-tab-panels>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  export default {
    data() {
      return {
        selectedLabel: '标签一',
        tabs: [
          {
            label: '标签一',
            content: '标签一的内容',
            tips: '5'
          },
          {
            label: '标签二',
            content: '标签二的内容'
          },
          {
            label: '标签三',
            content: '标签三的内容'
          },
          {
            label: '标签四',
            content: '标签四的内容'
          }
        ]
      }
    },
    components: {
      CubePage
    },
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tabs_main
    margin: -10px
  .tabs-basic-view
    .cube-tab-bar
      background-color: #fff
    .cube-tab-panels
      background-color: #fff
  .tab_content
    margin: 30px 20px
    color: #999
    
</style>
