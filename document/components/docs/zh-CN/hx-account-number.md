## HxAccountNumber 账号

> 1.0.0 新增通用组件

账号组件，支持使用v-model对数据双向绑定，支持一键清空内容，支持账号格式校验，支持输入前四到五位进行开户行判断，支持4-4-4-4格式，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <hx-account-number ref="hx-account-number" :placeholder="'请输入账号'" :label="'账号'" :type="'account'" @binkList="binkList" v-model="accountValue"></hx-account-number>
  ```


- 设置 type，自定义组件类型

  ```html
   <hx-account-number ref="hx-account-number" :placeholder="'请输入账号'" :label="'账号'" :type="'account'" @binkList="binkList" v-model="accountValue"></hx-account-number>
  ```
  ```js
  export default {
    data() {
      return {
        accountValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `account` 对应账号组件

- 设置 disabled，禁用状态

  ```html
  <hx-account-number ref="hx-account-number" :placeholder="'请输入账号'" :label="'账号'" :type="'account'" :disabled="true" @binkList="binkList" v-model="accountValue"></hx-account-number>
  ```
  ```js
  export default {
    data() {
      return {
        accountValue: '6225 5526 8798 1625',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <hx-account-number ref="hx-account-number" :placeholder="'请输入账号'" :label="'账号'" :type="'account'" :readonly="true" :eye="eye" @binkList="binkList" v-model="accountValue"></hx-account-number>
  ```
  ```js
  export default {
    data() {
      return {
        accountValue: '6225 5526 8798 1625',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显账号，只需要设置`accountValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 可见配置

  可通过eye设置icon眼睛。
  点击icon可切换账号全部可见`6225 5526 8798 1625`和账号部分可见`6225 ******** 1625`两种状态。

- 设置 字体右对齐格式 默认左对齐

  ```html
  <hx-account-number ref="hx-account-number" :placeholder="'请输入账号'" :label="'账号'" :type="'account'" @binkList="binkList" 
  :hxstyle="'text-align:right'"  v-model="accountValue"></hx-account-number>
  ```
  ```js
  export default {
    data() {
      return {
        accountValue: ''  
      }
    }
  }
  ```
    `hxstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐 
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入账号 |
| readonly | 账号是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| accountValue | 输入的账号 | String |  |  |
| type | 组件类型 | String |  | account |

### 自定义事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| binkList | 输入账号返回的对应开户行信息 | e.text|