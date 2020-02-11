## Hx-sex 性别组件

> 1.4.0 新增

华夏组件库-性别组件

### 示例

- 基本用法

  ```html
  <hx-sex :readonly="false" :options="sexs" v-model="sexSelect"></hx-sex>
  ```
  ```js
  export default {
    data() {
      return {
        sexs: [
          {
            label: '男',
            value: 0
          },
          {
            label: '女',
            value: 1
          }
        ],
        sexSelect: 0
      }
    }
  }
  ```

  `options` 为选项数组，默认不选中任何的选项，点击其中一个，则对应的 `selected` 的值就为选中项的值。

- 设置 value，禁用状态，图标样式

  ```html
  <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
  ```
  ```js
  export default {
    data() {
      return {
        selected2: 3,
        options2: [
          {
            label: 'Option1',
            value: 1
          },
          {
            label: 'Option2',
            value: 2
          },
          {
            label: 'Option3',
            value: 3,
            disabled: true
          }
        ]
      }
    }
  }
  ```

  `options` 的值可以是对象组成的数组，默认可以设置 `label` 和 `value` 分别代表的是显示文案和单选框的值，如果对象中包含了 `disabled` 为 `true` 的值，那么此单选框就处于禁用状态。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 选项数组 | Array | - | - |
| position | 图标位置 | String | left/right | left |
| horizontal | 是否水平排列 | Boolean | true/false | false |
| colNum<sup>1.12.28</sup> | 一行有几列 | Number | - | 1 |
| hollowStyle | 是否是镂空样式的 | Boolean | true/false | false |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 单选框显示文字 | String |
| value | 单选框的值 | String/Number |
| disabled | 单选框是否被禁用 | Boolean |

注：如果 `options` 中的项为字符串也是可以的，此时默认 `label` 和 `value` 的值都为该字符串的值。

### cube-radio Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| option | 选项配置 | Object/String | - | - |
| position | 图标位置 | String | left/right | left |
| hollow-style | 是否是镂空样式的 | Boolean | true/false | false |

* `option` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 单选框显示文字 | String |
| value | 单选框的值 | String/Number |
| disabled | 单选框是否被禁用 | Boolean |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 绑定值变化时触发 | 选中的单选框value值 |
