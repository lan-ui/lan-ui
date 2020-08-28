## Toolbar

> 1.9.0 新增

工具栏，可以组合多个按钮，复选框操作为一个工具栏。

### 示例

- 基础使用

  通过 `actions`设置toolbar各项内容，其中text为文本内容，icon为iconfont字体图标class
  `toolbarStyle` 定义toolbar不同风格，`dark`为黑、`grey`为灰、`light`为白 可选，默认`light`

  ```html
  <cube-toolbar :actions="actions" @click="clickHandler"></cube-toolbar>
  <cube-toolbar :actions="actions" toolbarStyle="dark" @click="clickHandler"></cube-toolbar>
  <cube-toolbar :actions="actions" toolbarStyle="grey" @click="clickHandler"></cube-toolbar>
  ```
  ```js
  export default {
    data() {
      return {
        money: 10,
        actions: [
          {
            text: '评论',
            icon: 'icon-lan-comment-filled',
            action: 'comment'
          },
          {
            text: '点赞',
            icon: 'icon-lan-fabulous',
            action: 'fabulous'
          },
          {
            text: '喜欢',
            icon: 'icon-lan-like',
            action: 'like'
          },
          {
            text: '收藏',
            icon: 'icon-lan-star',
            action: 'collection'
          }
        ]
      }
    }
  }

- 更多操作

  你还可以通过 `moreActions` 属性传入更多操作，就会把工具栏扩展成可展开收起的双层工具栏。

  ```html
  <cube-toolbar
    :actions="actions"
    :more-actions="moreActions" toolbarStyle="grey"
    @click="clickHandler">
  </cube-toolbar>
  ```
  ```js
  export default {
    data() {
      return {
        money: 10,
        actions: [
          {
            text: '评论',
            icon: 'icon-lan-comment-filled',
            action: 'comment'
          },
          {
            text: '点赞',
            icon: 'icon-lan-fabulous',
            action: 'fabulous'
          },
          {
            text: '喜欢',
            icon: 'icon-lan-like',
            action: 'like'
          }
        ],
        moreActions: [
          {
            text: '操作文字',
            icon: 'icon-lan-share',
            action: 'showText'
          },
          {
            text: '操作文字',
            icon: 'icon-lan-like',
            action: 'showText'
          },
          {
            text: '操作文字',
            icon: 'icon-lan-star',
            action: 'showText'
          }
        ]
      }
    },
    methods: {
      clickHandler(item) {
        if (item.action) {
          this[item.action](item)
        }
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| actions | 定义一组操作 | Array | [] | [ {text: '完成订单' } ] |
| moreActions | 定义更多的一组操作 | Array | [] | [ {text: '完成订单' } ] |
| toolbarStyle | 定义toolbar风格 | String | dark/grey/light | light |

* `actions` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 类型，包括 button 和 checkbox | String | button/checkbox | button |
| text | 文案，支持写入 html | String | - | '' |
| icon | iconfont字体图标 | String | - | - |
| checked | 当为 checkbox 类型时，checkbox的初始状态 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击某一项触发 | 该项 item 的值 |
| more-click | 当有更多操作时，点击更多按钮时触发 | 更多操作是否是显示状态 |
