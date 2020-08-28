## Loading

加载，提供了可自定义大小的加载动画。

### 示例

- 图标大小

  默认大小为`24px`，可通过`size`属性配置

  ```html
  <cube-loading></cube-loading>
  <cube-loading :size="35"></cube-loading>
  <cube-loading :size="43"></cube-loading>
  <cube-loading :size="52"></cube-loading>
  ```

- loading按钮

  结合cube-button实现loading按钮

  ```html
  <cube-button><cube-loading :size="20"></cube-loading>操作按钮</cube-button>
  ```

- loading加载状态提示

  结合cube-popup实现页面加载提示

  ```html
  <cube-popup type="my-popup" ref="myPopup" class="empty">
    <cube-loading :size="36"></cube-loading>
    <p>正在加载</p>
  </cube-popup>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| size | 加载图标的大小，单位px | Number | 24 |
