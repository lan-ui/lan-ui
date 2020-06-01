## Address 详细地址

> 1.0.0 新增通用组件

详细地址组件。支持使用v-model对数据双向绑定，支持一键清空内容，支持详细地址格式校验,支持高度自适应，支持根据项目需要配置字体左/右对齐。

### 示例

- 基本用法

  ```html
   <lan-address ref="lan-address" :placeholder="'请输入街道(小区)门牌号'" :label="'详细地址'" :type="'address'" v-model="addressValue"></lan-address>
  ```


- 设置 type，自定义组件类型

  ```html
   <lan-address ref="lan-address" :placeholder="'请输入街道(小区)门牌号'" :label="'详细地址'" :type="'address'" v-model="addressValue"></lan-address>
  ```
  ```js
  export default {
    data() {
      return {
        addressValue: '',
      }
    },
  },
  ```

  `type` 为自定义组件的类型， `address` 详细地址组件

- 设置 disabled，禁用状态

  ```html
  <lan-address ref="lan-address" :placeholder="'请输入街道(小区)门牌号'" :label="'详细地址'" :type="'address'" :disabled="true" v-model="addressValue"></lan-address>
  ```
  ```js
  export default {
    data() {
      return {
        addressValue: '某某小区某某单元',
        disabled: false
      }
    }
  }
  ```

  `disabled` 为 `true` 的值 组件禁止点击

- 设置 readonly，回显数据

  ```html
  <lan-address ref="lan-address" :placeholder="'请输入街道(小区)门牌号'" :label="'详细地址'" :type="'address'" :readonly="true" v-model="addressValue"></lan-address>
  ```
  ```js
  export default {
    data() {
      return {
        addressValue: '某某小区某某单元',
        readonly: false
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显详细地址，只需要设置`addressValue`回显数据。

- 设置 字体右对齐格式 默认左对齐

  ```html
  <lan-address ref="lan-address" :placeholder="'请输入街道(小区)门牌号'" :label="'详细地址'" :type="'address'" :lanstyle="'text-align:right'" v-model="addressValue"></lan-address>
  ```
  ```js
  export default {
    data() {
      return {
        addressValue: ''  
      }
    }
  }
  ```
    `lanstyle`默认为左对齐格式 为 `text-align:right`时，字体右对齐
    
- 清空按钮

  可通过clearable配置清空按钮

  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请输入详细地址 |
| readonly | 详细地址是否只读 | Boolean | false/true | false |
| disabled | 输入框是否被禁用 | Boolean | false/true | false |
| addressValue | 输入的详细地址 | String | - | - |
| type | 组件类型 | String |  | address |
