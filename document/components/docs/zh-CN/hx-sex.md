## HxSex 性别

> 1.0.0 新增通用组件

性别组件，提供了2种性别的展示（选择，回显值），选择性别提供不同状态，选项不同状态

### 示例

- 基本用法

  ```html
  <hx-sex :options="sexs" v-model="sexSelect"></hx-sex>
  ```
  ```js
  export default {
    data() {
      return {
       sexs: [
          {
            text: '男',
            value: 0
          },
          {
            text: '女',
            value: 1
          }
        ],
        sexSelect: 0
    }
  }
  ```

  `options` 为选项数组， `text` 和 `value` 分别代表的是显示文案和单选框的值

- 设置 disabled，禁用状态

  ```html
  <hx-sex :options="sexs2" v-model="sexSelect2" :disabled="true" ></hx-sex>
  ```
  ```js
  export default {
    data() {
      return {
        sexs2: [
          {
            text: '男',
            value: 0,
            disabled: true
          },
          {
            text: '女',
            value: 1
          }
        ],
        sexSelect2: 1
      }
    }
  }
  ```

  `options` 的值可以是对象组成的数组，默认可以设置 `text` 和 `value` 分别代表的是显示文案和单选框的值，如果对象中包含了 `disabled` 为 `true` 的值，那么此性别就处于禁用状态。

- 设置 readonly，回显数据

  ```html
  <hx-sex :readonly="true" :readValue="readSex"></hx-sex>
  ```
  ```js
  export default {
    data() {
      return {
        readSex: {
          text: '女',
          value: 1
        }
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显性别值，只需要设置`readSex`回显数据对象。
  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 选项数组 | Array | - | - |
| readonly | 性别是否只读 | Boolean | false/true | false |
| disabled | 单选框是否被禁用 | Boolean | false/true | false |
| position | 图标位置 | String | left/right | left |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| text | 单选框显示文字 | String |
| value | 单选框的值 | String/Number |
| disabled | 单选框是否被禁用 | Boolean |
