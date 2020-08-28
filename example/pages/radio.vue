<template>
  <cube-page type="radio-view" title="Radio">
    <template slot="content">
      <p class="title">基本使用：</p>
      <cube-radio-group v-model="selected" :options="options" />
      <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
      <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
      <cube-radio-group v-model="selected4">
        <cube-radio
          v-for="(option, index) in options4"
          :key="index"
          :option="option">
          <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/ZHI7AC/48/ea/64/48ea64ed79924569a815def5b16c913c/images/%E5%8D%95%E9%80%89%E6%A1%86_radio/u780.png?token=4d9bd601f6cf6e08d34b96ac23e327a00aa53fe9b334cc88ce2c8a3abda27e39">
        </cube-radio>
      </cube-radio-group>
      <p class="title">独立使用（动态）：</p>
      <cube-radio-group v-model="selected10" >
        <cube-radio
          v-for="(option, index) in options10"
          :key="index"
          :option="option" :hollow-style="true">
          <span>勾选同意<a href="" @click.stop>《用户服务协议》</a></span>
        </cube-radio>
      </cube-radio-group>
      <p class="title">独立使用（静态）：</p>
      <cube-radio-group v-model="selected9" :options="options9" :hollow-style="true"/>
      <cube-radio-group v-model="selected5" :options="options5" :col-num="Math.floor(colNum)" />
      <p class="title">单选列表1：</p>
      <cube-radio-group v-model="selected6" :options="options6" position="right" :right-style="true" />
      <p class="title">单选列表2：</p>
      <cube-radio-group v-model="selected7">
        <cube-radio
          v-for="(option, index) in options6"
          :key="index"
          :option="option" :right-style="true" position="right">
          <span>{{option.label}}<em>辅助描述文字</em></span>
        </cube-radio>
      </cube-radio-group>
      <p class="title">单选列表3：</p>
      <cube-radio-group v-model="selected6" :options="options6" :hollow-style="true" />
      <p class="title">单选列表4：</p>
      <cube-radio-group v-model="selected7">
        <cube-radio
          v-for="(option, index) in options6"
          :key="index"
          :option="option" :hollow-style="true">
          <span>{{option.label}}<em>辅助描述文字</em></span>
        </cube-radio>
      </cube-radio-group>
      <p class="title">禁用使用：</p>
      <cube-radio-group v-model="selected8" :options="options8" position="right" :right-style="true"/>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        selected: '选项数组1',
        options: ['选项数组1', '选项数组2'],
        selected2: 3,
        options2: [
          {
            label: '选项数组1',
            value: 1
          },
          {
            label: '选项数组2',
            value: 2,
            disabled: true
          },
          {
            label: '选项数组3',
            value: 3,
            disabled: true
          }
        ],
        selected3: '3',
        options3: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ],
        selected4: '1',
        options4: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ],
        selected5: '6',
        options5: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4'
          },
          {
            label: '5',
            value: '5'
          },
          {
            label: '6',
            value: '6',
            disabled: true
          },
          {
            label: '7',
            value: '7'
          },
          {
            label: '8',
            value: '8'
          }
        ],
        colNum: 3,
        selected6: 'A',
        selected7: 'A',
        options6: [
          {
            label: '选项A',
            value: 'A'
          },
          {
            label: '选项B',
            value: 'B'
          },
          {
            label: '选项C',
            value: 'C'
          },
          {
            label: '选项D',
            value: 'D'
          }
        ],
        selected8: 'A',
        options8: [
          {
            label: '选项A',
            value: 'A',
            disabled: true
          },
          {
            label: '选项B',
            value: 'B',
            disabled: true
          },
          {
            label: '选项C',
            value: 'C',
            disabled: true
          },
          {
            label: '选项D',
            value: 'D',
            disabled: true
          }
        ],
        selected9: 'D',
        options9: [
          {
            label: '默认效果',
            value: 'A'
          },
          {
            label: '选中效果',
            value: 'B'
          },
          {
            label: '禁用效果',
            value: 'C',
            disabled: true
          },
          {
            label: '选中禁用',
            value: 'D',
            disabled: true
          }
        ],
        selected10: '',
        options10: ['选项数组1']
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .radio-view
    .content
      >
        *
          margin: 10px 0
    img
      width: 100px
  .title 
    margin-top:10px
    padding:16px
    border-top: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    background: rgba(245,245,245,1)
    color: #666
</style>
