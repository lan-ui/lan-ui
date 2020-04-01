# hx-ui

> 基于Vue.js实现的精致移动端组件库

### 导航

- [首页](http://sales-int.ihxlife.com/hualifeui/docs/index.html)
- [文档](http://sales-int.ihxlife.com/hualifeui/docs/index.html#/zh-CN)
- [示例](http://sales-int.ihxlife.com/hualifeui/docs/index.html#/zh-CN/example)

  ![示例二维码](./assets/example-qr.png)

### 新项目？

- vue cli > 3
  推荐使用vue-cli-plugin-hx-ui插件，创建项目及配置，说明文档详见[vue-cli-plugin-hx-ui](http://106.38.93.196:8081/hualife/vue-cli-plugin-hx-ui)

- vue cli < 3
  推荐使用hx-ui模版创建项目，创建项目及配置，说明文档详见[hx-ui-template](http://106.38.93.196:8081/hualife/hx-ui-template)

### 安装

```shell
npm install hx-ui --save
```

### 使用

```js
import Vue from 'vue'
import Hx from 'hx-ui'

Vue.use(Hx)
```

#### 按需使用

```js
import Vue from 'vue'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  ActionSheet
} from 'hx-ui'

Vue.use(Button)
Vue.use(ActionSheet)
```

注：  
上述使用依赖插件 [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules)  
详细内容请看 [快速上手文档](http://sales-int.ihxlife.com/hualifeui/docs/index.html#/zh-CN/docs/quick-start)

### ToDo

- 更多组件

- 主题支持

### Development

```shell
git clone http://106.38.93.196:8081/hualife/hx-ui.git
cd hx-ui
npm install
npm run dev
# or run document development
npm run doc-dev
```

### Changelog

详细日志请看[发布日志]
