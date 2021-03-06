## PhoneNumber 手机号码

> 1.0.0 新增通用组件

手机号码组件，支持使用v-model对数据双向绑定，支持一键清空内容，支持手机号码号段选择，支持根据不同区间进行手机号码校验，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <lan-phone-number ref="lan-phone-number" :placeholder="'请输入手机号'" :label="'手机号'" :type="'phone'" v-model="phoneValue"></lan-phone-number>
  ```


- 设置 type，自定义组件类型

  ```html
   <lan-phone-number ref="lan-phone-number" :placeholder="'请输入手机号'" :label="'手机号'" :type="'phone'" v-model="phoneValue"></lan-phone-number>
  ```
  ```js
  export default {
    data() {
      return {
        phoneValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `phone` 对应手机号码组件

- 设置 disabled，禁用状态

  ```html
  <lan-phone-number ref="lan-phone-number" :placeholder="'请输入手机号'" :label="'手机号'" :type="'phone'" :disabled="true" v-model="phoneValue"></lan-phone-number>
  ```
  ```js
  export default {
    data() {
      return {
        phoneValue: '132 4565 4433',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <lan-phone-number ref="lan-phone-number" :placeholder="'请输入手机号'" :label="'手机号'" :type="'phone'" :readonly="true" :eye="eye" v-model="phoneValue"></lan-phone-number>
  ```
  ```js
  export default {
    data() {
      return {
        phoneValue: '132 4565 4433',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显手机号码，只需要设置`phoneValue`回显数据。

- 清空按钮

  可通过clearable配置清空按钮

- 可见配置

  可通过eye设置icon眼睛。
  点击icon可切换手机号码全部可见`13245657686`和手机号码部分可见`132****7686`两种状态。

- 设置 字体右对齐格式 默认左对齐

  ```html
  <lan-phone-number ref="lan-phone-number" :placeholder="'请输入手机号'" :label="'手机号'" :type="'phone'" :lanstyle="'text-align:right'" v-model="phoneValue"></lan-phone-number>
  ```
  ```js
  export default {
    data() {
      return {
        phoneValue: ''  
      }
    }
  }
  ```
    `lanstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐
  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入手机号码 |
| readonly | 手机号码是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| phoneValue | 输入的手机号码 | String |  |  |
| type | 组件类型 | String |  | phone |
