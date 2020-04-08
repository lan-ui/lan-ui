## HxIdNumber 身份证号码

> 1.0.0 新增通用组件

身份证号码组件。支持使用v-model对数据双向绑定，支持一键清空内容，支持身份证号码校验，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <hx-id-number ref="hx-id-number" :placeholder="'请输入身份证号码'" :label="'身份证号码'" :type="'idcard'" :maxlength='18' v-model="idcardValue"></hx-id-number>
  ```


- 设置 type，自定义组件类型

  ```html
   <hx-id-number ref="hx-id-number" :placeholder="'请输入身份证号码'" :label="'身份证号码'" :type="'idcard'" :maxlength='18' v-model="idcardValue"></hx-id-number>
  ```
  ```js
  export default {
    data() {
      return {
        idcardValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `idcard` 对应身份证号码组件

- 设置 disabled，禁用状态

  ```html
  <hx-id-number ref="hx-id-number" :placeholder="'请输入身份证号码'" :label="'身份证号码'" :type="'idcard'" :disabled="true" :maxlength='18' v-model="idcardValue"></hx-id-number>
  ```
  ```js
  export default {
    data() {
      return {
        idcardValue: '230229199608042020',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <hx-id-number ref="hx-id-number" :placeholder="'请输入身份证号码'" :label="'身份证号码'" :type="'idcard'" :readonly="true" :eye="eye" :maxlength='18' v-model="idcardValue"></hx-id-number>
  ```
  ```js
  export default {
    data() {
      return {
        idcardValue: '230229199608042020',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显身份证号码，只需要设置`idcardValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 可见配置

  可通过eye设置icon眼睛。
  点击icon可切换身份证号全部可见`230229199608042020`和身份证号码部分可见`2302**********2020`两种状态。

- 输入框输入位数限制

  可通过maxlength配置输入位数

- 设置 字体右对齐格式 默认左对齐

  ```html
  <hx-id-number ref="hx-id-number" :placeholder="'请输入身份证号码'" :label="'身份证号码'" :type="'idcard'" :hxstyle="'text-align:right'" :maxlength='18' v-model="idcardValue"></hx-id-number>
  ```
  ```js
  export default {
    data() {
      return {
        idcardValue: ''  
      }
    }
  }
  ```
    `hxstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入身份证号码 |
| readonly | 身份证号码是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| idcardValue | 输入的身份证号码 | String |  |  |
| type | 组件类型 | String |  | idcard |
| maxlength | 最长输入位数 | Number |  | 18 |

