## Button

按钮，提供了各种类型、样子、状态以及图标。

### 示例

- 常用按钮

  默认主要按钮，设置`:minor="true"`为次要按钮，`corner`设置按钮圆角大小（默认直角、`medium`方角、`big`圆角）
  ```html
  <cube-button>主要按钮</cube-button>
  <cube-button corner="medium">主要按钮</cube-button>
  <cube-button corner="big">主要按钮</cube-button>
  <cube-button :minor="true" >次要按钮</cube-button>
  <cube-button :minor="true" corner="medium">次要按钮</cube-button>
  <cube-button :minor="true" corner="big">次要按钮</cube-button>
  <cube-button :minor="true" >次要按钮<span slot="sub-title">按纽副文本</span></cube-button>
  ```

- 按钮状态

  默认主要按钮，设置`:minor="true"`为次要按钮，`corner`设置按钮圆角大小（默认直角、`medium`方角、`big`圆角）
  通过`state`设置不同状态的按钮，`general`为普通按钮，`danger`为危险按钮，`warn`为警告按钮，`dotted`为虚线按钮，`invalid`为失效按钮
  ```html
  <cube-button state="general">普通按钮</cube-button>
  <cube-button state="danger">危险按钮</cube-button>
  <cube-button state="warn">警告按钮</cube-button>
  <cube-button state="dotted">虚线按钮</cube-button>
  <cube-button state="invalid">失效按钮</cube-button>
  ```
- 按钮大小

  通过`size`设置按钮大小，`big`为大型按钮，`medium`为中型按钮，`small`为小型按钮
  ```html
  <cube-button size="big">大型按钮</cube-button>
  <cube-button size="medium">中型按钮</cube-button>
  <cube-button size="small">小型按钮</cube-button>
  ```
- 纯图标按钮

  设置`:ico="true"`纯图标按钮，无文字，通过`icon`添加字体图标
  ```html
  <cube-button icon="icon-lan-searchtwo" :ico="true" corner="big"></cube-button>
  <cube-button icon="icon-lan-camera-filled" :ico="true" corner="big"></cube-button>
  <cube-button icon="icon-lan-speech-filled" :ico="true" corner="big"></cube-button>
  ```

- 按钮类型

  默认类型为 `button`，还可设置为 `submit` 用于表单中
  ```html
  <cube-button>Button</cube-button>
  <cube-button type="submit">Submit Button</cube-button>
  ```

- 按钮状态

  默认正常，可设置激活、禁用状态
  ```html
  <cube-button :active="true">Active Button</cube-button>
  <cube-button :disabled="true">Disabled Button</cube-button>
  ```
- 图标

  可设置 icon 的 class
  ```html
  <cube-button icon="cubeic-right">Button With Icon</cube-button>
  ```

- 样子

  可以通过设置 `light`、`inline`、`outline`、`primary` 属性来改变按钮样子
  ```html
  <cube-button :light="true">Light Button</cube-button>
  <cube-button :inline="true">Inline Button</cube-button>
  <cube-button :outline="true">Outline Button</cube-button>
  <cube-button :primary="true">Primary Button</cube-button>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 按钮类型 | String | button/submit | button |
| minor | 次按钮 | Boolean | true/false | false |
| ico | 图标按钮 | Boolean | true/false | false |
| corner | 按钮圆角 | String | medium/big | - |
| state | 按钮状态 | Boolean | general/danger/warn/dotted/invalid | - |
| size | 按钮大小 | String | big/medium/small | - |
| active | 激活状态 | Boolean | true/false | false |
| disabled | 禁用状态 | Boolean | true/false | false |
| icon | 图表 Icon | String | icon 的 class 值 | - |
| light | 亮色 | Boolean | true/false | false |
| inline | 是否内联 | Boolean | true/false | false |
| outline | 外边框 | Boolean | true/false | false |
| primary | 主要的 | Boolean | true/false | false |


### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击按钮后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
