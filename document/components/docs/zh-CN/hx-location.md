## HxLocation 所在地区

> 1.0.0 新增通用组件

选择所在地区，提供了2种所在地区的展示（选择，回显值），选择银行提供不同状态，选项不同状态

### 示例

- 基本用法

  ```html
  <hx-location :readonly="false"  @selected="selected" ref="hxValidate"></hx-location>
  ```

  默认核心数据库中通用的所在地区省市区数据

- 设置 options，自定义证件所在地区省市区数据

  ```html
  <hx-location :readonly="false" :options="types"  @selected="selected" ref="hxValidate"></hx-location>
  ```
  ```js
  export default {
    data() {
      return {
        types: [
          {
            value: '110000',
            text: '北京市',
            children: [
              {
                value: '110100',
                text: '北京市'
                children: [
                  {
                    value: '110101',
                    text: '东城区'
                  }
                ]
              }
            ]
          }
        ]
    }
  }
  ```

  默认核心数据库中通用的所在地区省市区数据

- 设置 disabled，禁用状态

  ```html
  <hx-location :readonly="false" :disabled="true" :value="value1"></hx-location>
  ```
  ```js
  export default {
    data() {
      return {
         value1: {
          text: ['北京市', '北京市', '东城区'],
          value: ['110000', '110100', '110101']
        }
      }
    }
  }
  ```

  设置 `text` 和 `value` 分别代表的是显示所在地区和所在地区对应的编码的数组值

- 设置 readonly，回显数据

  ```html
  <hx-location :readonly="true" :readValue="readType"></hx-location>
  ```
  ```js
  export default {
    data() {
      return {
        readType: {
          text: ['山西省', '阳泉市', '市辖区'],
          value: ['140000', '140300', '140301']
        }
      }
    }
  }
  ```

  `readonly` 为 `true` 的值，回显所在地区值，只需要设置`readValue`回显数据对象。
  
### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| placeholder | 选择默认提示信息 | String | - | 请选择所在地区 |
| options | 选项数组 | Array | - | - |
| readonly | 性别是否只读 | Boolean | false/true | false |
| disabled | 单选框是否被禁用 | Boolean | false/true | false |
| value | 当前选中值 | Object | text,value |  |
| position | 图标位置 | String | left/right | left |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| text | 下拉框显示文字 | String |
| value | 下拉框的值 | String/Number |

### 自定义事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| selected | 选择所在地区确认后获取选择信息 | data-选中数组信息data.text:text值 data.value:value值,data.index:选择的位置索引值 |