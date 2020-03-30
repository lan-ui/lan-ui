## 证件有效期

证件有效期，可设置其状态、可传入年龄、可选择证件有效日期。

### 示例
- 基本用法
  ```html
  <hx-validity :age="age" :validity="validity" :validityArray="validityArray" :readonly="readonly" :disabled="disabled" @receive="handleSelect" :isLongTerm="isLongTerm"></hx-validity>
  ```
  ```js
  export default {
    data() {
      return {
        age: 65,
        validity: '',
        validityArray: [],
        readonly: false,
        disabled: false
      }
    },
    computed: {
      isLongTerm() {
        if (this.age >= 45) {
          this.validity = '长期有效'
        }
        return this.age >= 45
      }
    },
    methods: {
      handleSelect: function(val, txt) {
        this.validityArray = val
        this.validity = txt.join('-')
      }
    }
  }
  ```
### props配置项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| age | 年龄 | Number | Number | Number |
| validity | 证件有效日期 | String | String | String |
| validityArray | 返回选择日期数组ps（[2018,04,20]） | Array | Array | Array |
| readonly | 只读 | Boolean | true/false| false |
| disabled | 禁用 | Boolean | true/false| false |