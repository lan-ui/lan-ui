<template>
  <cube-page
    type="rate-view"
    title="Rate"
    class="option-demo">
    <div slot="content">
      <p class="rate-title">基础使用：</p>
      <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify" activeColor="#f6bc4d"></cube-rate>
      <p class="rate-title">静态评分(不带文字)：</p>
      <div class="rate-wrapper rate-like">
        <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify"></cube-rate>
        <div class="rate-wrapper rate-wrapper-text">
          <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify" activeIcon="icon-lan-likefilled" icon="icon-lan-like"></cube-rate>
        </div>
        <div class="rate-wrapper rate-wrapper-text">
          <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify" activeIcon="cubeic-smile" icon="cubeic-sad" activeColor="red"></cube-rate>
        </div>
      </div>
      <p class="rate-title">静态评分(带文字)：</p>
      <div class="rate-wrapper rate-like">
        <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify" activeColor="#f6bc4d" color="#f6bc4d"><i slot="append">评分</i></cube-rate>
        <div class="rate-wrapper rate-wrapper-text">
          <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify" activeIcon="icon-lan-likefilled" icon="icon-lan-like" activeColor="red" color="red"><i slot="append">评价</i></cube-rate>
        </div>
      </div>
      <p class="rate-title">其他使用：</p>
      <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify"></cube-rate>
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <switch-option class="item" name="disabled" :value="disabled"
                            @update:value="updateDisabled"></switch-option>
          <select-option class="item" name="star numbers" :value="max"
                            @update:value="updateStarNumbers" :options="options"></select-option>
          <switch-option class="item" name="Justify" :value="justify"
                            @update:value="updateJustify"></switch-option>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import SwitchOption from '../components/switch-option.vue'
  import SelectOption from '../components/select-option'

  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3,
        image: 'https://p3.pstatp.com/large/593c0006340abbabefa0',
        customStar: false,
        justify: false,
        options: [
          {
            text: '5',
            value: 5
          },
          {
            text: '10',
            value: 10
          }
        ]
      }
    },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      updateStarNumbers(val) {
        this.max = val
      },
      updateJustify(val) {
        this.justify = val
      },
      updateRateItem(val) {
        this.customStar = val
      }
    },
    components: {
      CubePage,
      CubeButtonGroup,
      SwitchOption,
      SelectOption
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rate-wrapper-text
    line-height:32px
  .rate-title
    font-size: 12px
    color: #999
    line-height: 36px
  .rate-wrapper
    .rate-text
      text-align: center
      margin-top: 25px
      vertical-align: middle
    .rate-item
      width: 100%
      height: 100%
      background-size: 100%
      background-color: grey
  .cube-rate-item.active
    .rate-item
      background-color: orange
  .title 
    margin-top:10px
    padding:16px
    border-top: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    background: rgba(245,245,245,1)
    color: #666
</style>
