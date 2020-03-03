## HxCertificatetype

> 1.0.0 新增通用组件

选择证件类型，提供了2种证件类型的展示（选择，回显值），选择银行提供不同状态，选项不同状态

### 示例


- 基本用法

  ```html
  <hx-certificatetype :readonly="false"  @selected="selected" ref="hxValidate"></hx-certificatetype>
  ```

  默认核心数据库中通用的证件类型数据

- 设置 options，自定义证件类型数据

  ```html
  <hx-certificatetype :readonly="false" :options="types"  @selected="selected" ref="hxValidate"></hx-certificatetype>
  ```
  ```js
  export default {
    data() {
      return {
        types: [
          {
            text: '居民身份证',
            value: '00001'
          }
        ]
    }
  }
  ```

  `options` 为选项数组， `text` 和 `value` 分别代表的是显示文案和下拉框的值

- 设置 disabled，禁用状态

  ```html
  <hx-certificatetype :readonly="false" :options="types" :disabled="true" :value="value1"></hx-certificatetype>
  ```
  ```js
  export default {
    data() {
      return {
         types: [
          {
            text: '居民身份证',
            value: '00001'
          }
        ],
        value1: {
          text: '居民身份证',
          value: '00001'
        }
      }
    }
  }
  ```

  `options` 的值可以是对象组成的数组，默认可以设置 `text` 和 `value` 分别代表的是显示文案和下拉框的值

- 设置 readonly，回显数据

  ```html
  <hx-certificatetype :readonly="true" :readValue="readType"></hx-certificatetype>
  ```
  ```js
  export default {
    data() {
      return {
        readType: {
          text: '居民身份证',
          value: '00001'
        }
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显证件类别值，只需要设置`readValue`回显数据对象。
  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请选择证件类型 |
| options | 选项数组 | Array | - | - |
| readonly | 性别是否只读 | Boolean | false/true | false |
| disabled | 单选框是否被禁用 | Boolean | false/true | false |
| value | 当前选中值 | Object | text,value |  |
| position | 图标位置 | String | left/right | left |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| text | 下拉框显示文字 | String |
| value | 下拉框的值 | String/Number |

### 自定义事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| selected | 选择证件类型确认后获取选择信息 | data-选中数组信息data[0]:text值 data[1]:value值 |