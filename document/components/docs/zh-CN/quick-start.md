### 脚手架
> 新创建的项目快速使用hx-ui组件库，因目前使用私有npm，私有git，请按照说明文档进行安装

#### vue-cli >= 3

推荐使用vue-cli-plugin-hx-ui插件，创建项目及配置，说明文档详见[vue-cli-plugin-hx-ui](http://106.38.93.196:8081/hx-ui/vue-cli-plugin-hx-ui)  
执行完成后，你可以直接进入<a href="#cube-使用-anchor" class="anchor">使用部分</a>。

#### vue-cli < 3

推荐使用hx-ui模版创建项目，创建项目及配置，说明文档详见[hx-ui-template](http://106.38.93.196:8081/hx-ui/hx-ui-template)，这样你就可以忽略<a href="#cube-安装-anchor" class="anchor">安装</a>步骤，直接看<a href="#cube-使用-anchor" class="anchor">使用部分</a>。

### CDN
> 主要应用在老的项目，及非脚手架搭建项目，强依赖vue，使用前请先引入vuejs

```html
<link rel="stylesheet" href="http://sales-int.ihxlife.com/hualifeui/lib/hx.min.css" />
<script src="http://sales-int.ihxlife.com/hualifeui/lib/hx.min.js"></script>
```

### 安装
> 此安装部分只针对于 vue-cli > 3 的情况，并且已经存在的项目中使用hx-ui，参考脚手架配置

```shell
$ vue add hx-ui
```

> 此安装部分只针对于 vue-cli < 3 的情况，并且已经存在的项目中使用hx-ui，需要自己手动配置

#### npm

```shell
$ npm install hx-ui --save
```

hx-ui 搭配 webpack 2+ 支持[后编译](#/zh-CN/docs/post-compile)和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

- 后编译

  1. 修改 package.json 并安装依赖

    ```json
    {
      // webpack-transform-modules-plugin 依赖 transformModules
      "transformModules": {
        "hx-ui": {
          "transform": "hx-ui/src/modules/${member}",
          "kebabCase": true
        }
      },
      "devDependencies": {
        // 新增 stylus 相关依赖
        "stylus": "^0.54.5",
        "stylus-loader": "^2.1.1",
        "webpack-post-compile-plugin": "^1.0.0",
        "webpack-transform-modules-plugin": "^0.4.3"
      }
    }
    ```

  2. 修改 webpack.base.conf.js

    ```js
    var PostCompilePlugin = require('webpack-post-compile-plugin')
    var TransformModulesPlugin = require('webpack-transform-modules-plugin')
    module.exports = {
      // ...
      plugins: [
        // ...
        new PostCompilePlugin(),
        new TransformModulesPlugin()
      ]
      // ...
    }
    ```

  3. 修改 build/utils.js 中的 `exports.cssLoaders` 函数

    ```js
    exports.cssLoaders = function (options) {
      // ...
      const stylusOptions = {
        'resolve url': true
      }
      // https://vue-loader.vuejs.org/en/configurations/extract-css.html
      return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus', stylusOptions),
        styl: generateLoaders('stylus', stylusOptions)
      }
    }
    ```

  4. 修改 vue-loader.conf.js

    ```javascript
    module.exports = {
      loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: false
      }),
      // ...
    }
    ```

- 普通编译

  1. 修改 package.json 并安装依赖
    ```json
    {
      // webpack-transform-modules-plugin 依赖 transformModules
      "transformModules": {
        "hx-ui": {
          "transform": "hx-ui/lib/${member}",
          "kebabCase": true,
          "style": {
            "ignore": ["create-api", "better-scroll", "locale"]
          }
        }
      },
      "devDependencies": {
        "webpack-transform-modules-plugin": "^0.4.3"
      }
    }
    ```

  2. 修改 webpack 配置：

    ```js
    // webpack.config.js
    var TransformModulesPlugin = require('webpack-transform-modules-plugin')
    module.exports = {
      // ...
      resolve: {
        // ...
        alias: {
          // ...
          'hx-ui': 'hx-ui/lib'
          // ...
        }
        // ...
      }
      // ...
      plugins: [
        // ...
        new TransformModulesPlugin()
      ]
      // ...
    }
    ```

### 使用

#### 全部引入

一般在入口文件中：

```javascript
import Vue from 'vue'
import Hx from 'hx-ui'

Vue.use(Hx)
```

#### 按需引入

```javascript
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'hx-ui'
```

**注意：** 按需引入的话，是不会打包[基础样式](#/zh-CN/docs/style)部分的，所以在使用的时候需要引入 style 模块。

我们推荐直接全局注册：

```js
// 全局注册
Vue.use(Button)
// ...
```

所有的可按需引入的组件以及模块：

```js
import {
  // 基础样式
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  Checker,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  // common
  HxBank,
  HxCertificatetype,
  HxNationality,
  HxSex,
  HxLocation,
  HxProvinces,
  HxValidity,
  HxBirthdate,
  HxInputPhone,
  HxInputEmail,
  HxInputIdcard,
  HxInputAddress,
  HxInputAccount,
  HxInputAccountName,
  HxInputVerification
} from 'hx-ui'
```

也可以引入[create-api](#/zh-CN/docs/create-api)和[better-scroll](#/zh-CN/docs/better-scroll)模块：

```js
import { createAPI, BetterScroll, Locale } from 'hx-ui'
```

#### 示例

```html
<template>
  <cube-button @click="showDialog">show dialog</cube-button>
</template>

<script>
  export default {
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      }
    }
  }
</script>
```
