## HxPhoneverification 验证码

> 1.0.0 新增通用组件

手机验证码组件。支持使用v-model对数据双向绑定，支持一键清空内容，支持验证码格式校验，点击发送按钮后60s方可再次点击，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <hx-input-verification ref="hx-input-verification" :placeholder="'请输入验证码'" :label="'手机验证码'" :type="'verification'" :maxlength='4' v-model="verificationValue"></hx-input-verification>
  ```


- 设置 type，自定义组件类型

  ```html
   <hx-input-verification ref="hx-input-verification" :placeholder="'请输入验证码'" :label="'手机验证码'" :type="'verification'" :maxlength='4' v-model="verificationValue"></hx-input-verification>
  ```
  ```js
  export default {
    data() {
      return {
        verificationValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `verification` 对应验证码组件

- 设置 disabled，禁用状态

  ```html
  <hx-input-verification ref="hx-input-verification" :placeholder="'请输入验证码'" :label="'手机验证码'" :type="'verification'" :disabled="true" :maxlength='4' v-model="verificationValue"></hx-input-verification>
  ```
  ```js
  export default {
    data() {
      return {
        verificationValue: '3321',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <hx-input-verification ref="hx-input-verification" :placeholder="'请输入验证码'" :label="'手机验证码'" :type="'verification'" :readonly="true" :eye="eye" :maxlength='4' v-model="verificationValue"></hx-input-verification>

  ```
  ```js
  export default {
    data() {
      return {
        verificationValue: '3321',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显验证码，只需要设置`verificationValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 输入框输入位数限制

  可通过maxlength配置输入位数

- 设置 字体右对齐格式 默认左对齐

  ```html
  <hx-input-verification ref="hx-input-verification" :placeholder="'请输入验证码'" :label="'手机验证码'" :type="'verification'" :maxlength='4' :hxstyle="'text-align:right'" 
  v-model="verificationValue"></hx-input-verification>
  ```
  ```js
  export default {
    data() {
      return {
        verificationValue: ''  
      }
    }
  }
  ```
    `hxstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐
  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入验证码 |
| readonly | 验证码是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| accountValue | 输入的验证码 | String | - | - |
| type | 组件类型 | String |  | verification |
| maxlength | 最长输入位数 | Number |- | 4 |

