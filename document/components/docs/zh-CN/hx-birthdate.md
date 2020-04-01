## hx-birthdate 出生日期

出生日期，可设置其状态、可选择出生日期

### 示例

- 基本用法
  ```html
  <hx-birthdate :birth="birth" :readonly="readonly" :disabled="disabled" @receive="handleSelect"></hx-birthdate>
  ```
  ```js
  export default {
    data() {
      return {
        birth: '2018-04-20',
        birthArray: [],
        readonly: false,
        disabled: false
      }
    },
    methods: {
      handleSelect: function(val, txt) {
        this.birthArray = val
        this.birth = txt.join('-')
      }
    }
  }
  ```
### props配置
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| birth | 出生日期 | String | '2018-04-20' | '2018-04-20' |
| birthArray | 返回选择日期数组ps（[2018,04,20]） | Array | Array | Array |
| readonly | 只读 | Boolean | true/false| false |
| disabled | 禁用 | Boolean | true/false| false |