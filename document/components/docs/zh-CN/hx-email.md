## HxEmail 邮箱地址

> 1.0.0 新增通用组件

邮箱地址组件，支持使用v-model对数据双向绑定，支持一键清空内容，支持邮箱后缀选择，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <hx-email ref="hx-email" :placeholder="'请输入邮箱地址'" :label="'邮箱地址'" :type="'email'" v-model="emailValue"></hx-email>
  ```


- 设置 type，自定义组件类型

  ```html
   <hx-email ref="hx-email" :placeholder="'请输入邮箱地址'" :label="'邮箱地址'" :type="'email'" v-model="emailValue"></hx-email>
  ```
  ```js
  export default {
    data() {
      return {
        emailValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `email` 对应邮箱地址组件

- 设置 disabled，禁用状态

  ```html
  <hx-email ref="hx-email" :placeholder="'请输入邮箱地址'" :label="'邮箱地址'" :type="'email'" :disabled="true" v-model="emailValue"></hx-email>
  ```
  ```js
  export default {
    data() {
      return {
        emailValue: '5361356@qq.com',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <hx-email ref="hx-email" :placeholder="'请输入邮箱地址'" :label="'邮箱地址'" :type="'email'" :readonly="true" v-model="emailValue"></hx-email>
  ```
  ```js
  export default {
    data() {
      return {
        emailValue: '5361356@qq.com',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显手机号码，只需要设置`emailValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 设置 字体右对齐格式 默认左对齐

  ```html
  <hx-email ref="hx-email" :placeholder="'请输入邮箱地址'" :label="'邮箱地址'" :type="'email'" :hxstyle="'text-align:right'" v-model="emailValue"></hx-email>
  ```
  ```js
  export default {
    data() {
      return {
        emailValue: ''  
      }
    }
  }
  ```
    `hxstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入邮箱地址 |
| readonly | 邮箱地址是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| emailValue | 输入的邮箱地址 | String |  |  |
| type | 组件类型 | String |  | email |
