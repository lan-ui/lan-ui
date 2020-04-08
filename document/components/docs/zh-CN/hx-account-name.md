## HxAccountName 账号名

> 1.0.0 新增通用组件

账号名组件。支持使用v-model对数据双向绑定，支持一键清空内容，支持账号名格式校验，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <hx-account-name ref="hx-account-name" :placeholder="'请输入账号名'" :label="'账号名'" :type="'accountName'" v-model="accountNameValue"></hx-account-name>
  ```


- 设置 type，自定义组件类型

  ```html
   <hx-account-name ref="hx-account-name" :placeholder="'请输入账号名'" :label="'账号名'" :type="'accountName'" v-model="accountNameValue"></hx-account-name>
  ```
  ```js
  export default {
    data() {
      return {
        accountNameValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `accountName` 账号名组件

- 设置 disabled，禁用状态

  ```html
  <hx-account-name ref="hx-account-name" :placeholder="'请输入账号名'" :label="'账号名'" :type="'accountName'" :disabled="true" v-model="accountNameValue"></hx-account-name>
  ```
  ```js
  export default {
    data() {
      return {
        accountNameValue: '测试账号',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <hx-account-name ref="hx-account-name" :placeholder="'请输入账号名'" :label="'账号名'" :type="'accountName'" :readonly="true"  v-model="accountNameValue"></hx-account-name>
  ```
  ```js
  export default {
    data() {
      return {
        accountNameValue: '测试账号',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显账号名，只需要设置`accountNameValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 设置 字体右对齐格式 默认左对齐

  ```html
  <hx-account-name ref="hx-account-name" :placeholder="'请输入账号名'" :label="'账号名'" :type="'accountName'" :readonly="true" :hxstyle="'text-align:right'" v-model="accountNameValue"></hx-account-name>
  ```
  ```js
  export default {
    data() {
      return {
        accountNameValue: ''  
      }
    }
  }
  ```
    `hxstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐
      
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入账号名 |
| readonly | 账号名是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| accountNameValue | 输入的账号名 | String | - | - |
| type | 组件类型 | String |  | accountName |
