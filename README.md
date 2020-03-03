# 华夏移动端通用组件库hx-ui

## REM适配 

```bash
安装：npm install postcss-pxtorem --save
设计稿尺寸统一：750px
切图标准：设计稿尺寸/2（如750/2）
```
## Npm scripts

```bash
$ npm run build             # 打包编译代码
$ npm run dev               # 启动本地开发服务
$ npm run doc-dev           # 启动本地开发服务（说明文档）
$ npm run doc-build         # 打包编译代码（说明文档）
$ npm run demo-build        # 打包编译代码（demo示例）
$ npm run doc-demo-build    # 打包编译代码（同时打包demo示例及说明文档）
$ npm run release           # git发版（含npm publish）
$ npm run release-docs      # git发版 docs
$ npm run lint              # 使用eslint来检查并修复代码
$ npm run unit              # 单元测试
$ npm run codecov           # 代码覆盖率
$ npm run test              # 单元测试+代码覆盖率
$ npm run cm                # Commitizen规范化git提交（git cz代替git commit）
```

## 目录结构说明

```bash
.
├── assets                      # 图片资源（未压缩未打包）
├── build                       # webpack打包文件
│   ├── docment                 # 文档打包文件配置
│   ├── example                 # 示例打包文件配置
│   ├── release                 # 
│   ├── build.js                # 
│   ├── check-versions.js       # 
│   ├── dev-client.js           # 
│   ├── dev-server.js           # 
│   ├── util.js                 # 
│   ├── vue-loader.conf.js      # 
│   ├── webpack.base.conf.js    # 
│   ├── webpack.dev.conf.js     # 
│   ├── webpack.modules.conf.js # 
│   ├── webpack.prod.conf.js    # 
│   ├── webpack.test.conf.js    # 
│   └── build.js                # 
│
├── config                      # 
│   ├── dev.env.js              # 
│   ├── index.js                # 
│   ├── prod.env.js             # 
│   └── test.env.js             # 
│
├── docs                    # 打包后文档说明文件(含示例) --需要放到服务期中（并与组件开发同时更新）
│   ├── css                  
│   ├── example             # 打包后示例文件
│       ├── css              
│       ├── fonts            
│       ├── js               
│       └── index.html	     
│   ├── fonts                
│   ├── img                  
│   ├── js                   
│   └── index.html       
│    
├── document                     # 文档说明源文件
│   ├── common                   # 通用
│       ├── config               # 菜单配置 
│          └── menu.json         # * 文档说明左侧菜单配置（需要修改配置）
│       ├── js                   # 通用js
│           ├── ajax             # 封装的数据请求方法（ajax(url),默认get方式）
│           ├── directive        # 引用lighlight
│           ├── lighlight        # web语法突出显示
│           └── utils            # * 通用方法（设置获取本地缓存，获取当前的使用语言，设置文档的链接地址，需要修改）
│       ├── stylus               # 样式
│           ├── base             # 基础样式表（引用组件通用的variable）
│           ├── index            # 样式表引用入口（引用组件通用的reset，base，md）
│           └── md               # * 文档说明样式（可修改文档样式）
│   ├── components               # 组件
│       ├── back                 
│           ├── back.svg         # 返回图标
│           └── back.vue         # 返回首页组件
│       ├── badge                
│           └── badge.vue        # github数据展示（stars,forks,watchers）
│       ├── display              
│           ├── display.vue      # 文档中示例的外层的框架
│           ├── iphoneX.png      # 示例iphone的底图
│           └── phone.png        # 
│       ├── docs                 # 文档模块
│           ├── en-US            # * 英文文档说明（含所有组件的md文件，如需要英文文档，新增组件需要添加）
│           ├── zh-CN            # * 中文文档说明（需要添加）
│           ├── en-US.vue        # 英文入口
│           └── zh-CN.vue        # 中文入口  
│       ├── example              # 示例
│           ├── example-QR.png   # * 示例二维码（需要修改）
│           └── example.vue      # 示例页面  
│       ├── footer         
│           └── footer.vue       # *底部通用版权说明（需要修改）
│       ├── home                 # 首页入口
│           ├── didi-logo.svg    # didi logo图标（暂未使用）
│           ├── en-US.vue        # 英文导航菜单
│           ├── home.vue         # * 首页入口组件（有修改，屏蔽了语言切换，目前文档只做了中文）
│           ├── logo.png         # * cube ui logo（需要修改）
│           ├── nav.svg          # 菜单图标（同menu.svg）
│           └── zh-CN.vue        # 中文导航菜单
│       ├── index                # * 文档首页
│           ├── cube.png         # 首页banner图（已修改）
│           ├── en-US.vue        # 英文首页内容
│           ├── experience.png   # 体验极致图片（已修改）
│           ├── index.vue        # 首页组件（已修改）
│           ├── quality.png      # 质量可靠图片（已修改）
│           ├── scalability.png  # 扩展性想图片（已修改）
│           ├── standard.png     # 标准规范图片（已修改）
│           ├── zh-CN.vue        # 中文首页内容（需要修改）

│       ├── lang            
│           └── lang.vue         # 获取当前语言（中英文切换）
│       ├── nav-loading     
│           └── nav-loading.vue  # 导航底部页面加载loading效果
│       ├── side-list       
│           └── side-list        # 侧导航入口引用路由跳转
│       ├── side-nav        
│           └── side-nav         # 侧导航菜单组件
│       ├── viewport             # 文档主要内容组件
│           ├── close.svg        # 关闭图标        
│           ├── menu.svg         # 菜单图标   
│           └── viewport.vue     # 说明文档主要内容区     
│   ├── router                   # 路由
│       ├── index.js             # example中英文，首页路由配置
│       ├── router.js            # 文档菜单路由引入配置
│   ├── App.vue                  # 组件入口
│   ├── Cube-ui_logo.ico         # * 地址栏ico（需要修改）
│   ├── index.html               # * 文档页面入口（需要修改ico）
│   └── main.js                  # 文档入口文件配置
│
├── example                 # 示例源文件
│   ├── components          # 示例通用组件（包括布局，通用的组件）
│   ├── data                # * 用于示例使用的数据有js和json文件2种形式（组件有需要可以添加）
│   ├── modules             # 对图片的处理（检查图片是否被压扁，转base，图片压缩等，直接引用腾讯的js）
│   ├── pages               # * 组件的示例页面（需要编写）
│   ├── router              # 
│       ├── index.js        # 路由配置入口
│       ├── router.js       # * 示例路由配置（需要编写）
│   ├── App.vue             # * 组件入口，示例菜单配置（需要修改）
│   ├── index.html          # 示例入口页面（需要修改ico）
│   └── main.js             # 示例入口文件配置
│
├── lib                     # 组件打包编译文件
│   ├── XXXX                # 组件文件
│       ├── XXXXX.min.js    # 组件压缩后js
│       ├── XXXXX.min.css   # 组件压缩后css
│       ├── index.js        # 组件打包后js
│       └── style.css       # 组件打包后css
│   ├── fonts               # 打包后字体包
│   ├── cube.min.css        # * 整个组件库压缩后css (需要改配置)
│   ├── cube.min.js         # * 整个组件库压缩后js (需要改配置)
│   ├── index.js            # 整个组件库打包后css
│   └── style.css           # 整个组件库打包后js
│
├── node_modules            # 包源文件
│
├── src                           # 组件源码目录
│   ├── common                    # 
│       ├── data                  # * 组件用到的数据源（银行，证件类型，所在地区，国籍/地区，所在省市）
│       ├── helpers               # 通用方法（具体需要细看作用）
│       ├── icon                  # 字体icon
│           ├── cube-icon.styl    # 自定义cube ui字体icon样式
│           ├── cubeic.tff        # 自定义cube ui tff格式字体icon
│           ├── cubeic.woff       # 自定义cube ui woff格式字体icon
│           ├── hualife-icon.styl # * 自定义华夏字体icon样式 （新增）
│           ├── hualifeic.tff     # * 自定义华夏tff格式字体icon （新增）
│           └── hualifeic.woff    # * 自定义华夏woff格式字体icon （新增）
│       ├── lang    
│           ├── date.js           # 日期格式化方法
│           └── string.js         # 字符串大小写转化方法            
│       ├── locale
│           └── index.js          # 本地化配置（包括语言、提示语）   
│       ├── mixins                # * 混合对象配置（basic-picker,deprecated.js,group-col,input,locale,picker,popup,scroll,visibility）
│       └── stylus                # 组件样式
│           ├── theme             # 主题样式
│               ├── default.styl  # 默认的主题样式
│           ├── var               # 样式变量（含颜色、字体大小、盒子阴影）
│           ├── base.styl         # 基础样式
│           ├── common.styl       # 组件公共样式 （新增）
│           ├── index.styl        # * 样式配置入口（校验，混合，重置，基础，cube ui icon，hualife自定义样式）
│           ├── mixin.styl        # 混合样式
│           ├── reset.styl        # 重置样式
│           └── variable.styl     # * 校验样式配置入口（颜色、大小、盒子阴影、主题默认样式）          
│   ├── components                # * 组件源码文件（组件vue,相关的js，图片（2倍图，3倍图））
│   └── locale/lang               # 本地化中英文语言配置
│       ├── en-US.js              # 英文配置
│		└── zh-CN.js              # 中文配置
│   ├── modules                   # * 组件模块导出单文件（模块导出文件，每个组件对应一个文件夹）
│       ├── XXXXXXX组件
│           └── index.js
│   ├── index.js                  # * 整体模块导出（cube）
│   ├── module.js                 # * 组件模块导出总文件（单独模块导出）
│   └── rem.js                    # 适配，设置根字体大小
│
├── tests/unit              # 测试目录
│   ├── coverage            # 生成的代码覆盖率浏览网页
│   ├── fake                # 单元测试
│   ├── specs               # * 单元测试主要代码目录（每个组件一个单元测试文件）
│   ├── utils               # 单元测试通用方法（create-vue创建vue对象，event事件封装，file文件封装，xhr请求封装）
│   ├── .eslintrc           # eslint配置
│   ├── index.js            # * 单元测试入口配置（可以通过修改后缀名只测试当前开发组件）
│   └── karma.conf.js       # 单元测试配置
│
├── types                   # 
│   ├── component.d.ts      # 
│   ├── cube-ui.d.ts        # 
│   └── index.d.ts          # 
│
├── .babelrc                # 
├── .editorconfig           # 代码规范配置
├── .eslintignore           # eslint忽略文件配置
├── .eslintrc.js            # eslint配置
├── .gitignore              # git忽略文件配置
├── .travis.yml             # 持续集成构建项目（git push时自动进行编译以及运行单测）
├── CONTRIBUTING.md         # 
├── LINCENSE                # 版权说明
├── package-lock.json       # 锁定当前安装包的版本号
├── package.json            # 包配置文件
├── postcss.config.js       # * css预处理(适配)
├── README_zh-CN.md         # * 中文文档说明（需要修改）
├── README.md               # * 说明文档
└── yarn.lock               # 
```
