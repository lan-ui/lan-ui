## Rate

> 1.5.0 新增

评分组件。你可以自定义星星个数，可以禁用交互，以用作评价展示，可以通过插槽自定义星星样式。

### 示例

- 基本用法

  使用 v-model 对评分值双向绑定。

  ```html
  <cube-rate v-model="value"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
  ```

- 多项配置

  例如，使用`disabled`使评分组件只读，使用`max`自定义评分等级，使用 `justify` 决定是否自动适应容器宽度。

  ```html
  <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3,
        justify: false
      }
    }
  }
  ```

- 自定义星星样式（采用iconfont字体图标形式）

  使用activeIcon定义活跃iconfont的class，icon定义普通的iconfont的class，并且可以设置activeColor,color分别定义活跃和普通的图标颜色
  

  ```html
  <cube-rate v-model="value" activeIcon="icon-lan-likefilled" icon="icon-lan-like" activeColor="red" color="red">
  </cube-rate>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 绑定的评分值 | Number | - | 0 |
| max | 星星个数 | Number | - | 5 |
| disabled | 禁用状态 | Boolean | true/false | false |
| justify | 是否自适应容器宽度（通过在星星之间增加空隙） | Boolean | true/false | false |
| activeIcon | 活跃icon的class | String | - | icon-lan-starfilled 活跃星星 |
| icon | 普通icon的class | String | - | icon-lan-star 普通星星 |
| activeColor | 活跃icon的颜色 | String | - | #999 |
| color | 普通icon的颜色 | String | - | #999 |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认是 cube-rate-item 组件 | - |

### cube-rate-item 的插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| append | 组件后文字 | - |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 手指从 rate item 移开时触发（当设置了 disabled 属性时，该事件不触发） | 当前移开的 rate item 的值 |
