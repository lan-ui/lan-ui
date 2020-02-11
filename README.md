# 华夏移动端组件库hx

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
$ npm run release           # 
$ npm run release-docs      # 
$ npm run lint              # 使用eslint来检查并修复代码
$ npm run unit              # 单元测试
$ npm run codecov           # 单测覆盖率
$ npm run test              # 单元测试+单测覆盖率
$ npm run cm                # Commitizen规范化git提交
```

## 目录结构说明

```bash
.
├── assets                  # 图片资源（未压缩未打包）
├── build                   # webpack打包文件
│   ├── docment             # 文档打包文件配置
│   ├── example             # 示例打包文件配置
│   ├── release             # 
│   ├── build.js            # 
│   ├── check-versions.js   # 
│   ├── dev-client.js       # 
│   ├── dev-server.js       # 
│   ├── util.js             # 
│   ├── vue-loader.conf.js  # 
│   ├── webpack.base.conf.js # 
│   ├── webpack.dev.conf.js # 
│   ├── webpack.modules.conf.js # 
│   ├── webpack.prod.conf.js # 
│   ├── webpack.test.conf.js # 
│   └── build.js            # 
├── config                  # 
│   ├── dev.env.js          # 
│   ├── index.js            # 
│   ├── prod.env.js         # 
│   └── test.env.js         # 
├── docs                    # 打包后文档说明文件
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
├── document                # 文档说明源文件
│   ├── common              # 
│   ├── components          # 
│   ├── router              # 
│   ├── App.vue             # 
│   ├── Cube-UI_logo.ico    # 
│   ├── index.html          # 
│   └── main.js             # 
├── example                 # 示例源文件
│   ├── components          # 
│   ├── data                # 
│   ├── modules             # 
│   ├── pages               # 
│   ├── router              # 
│   ├── App.vue             # 
│   ├── index.html          # 
│   └── main.js             # 
├── lib                     # 组件打包编译文件
├── node_modules            # 包源文件
├── src                     # 组件源码目录
│   ├── common              # 
│   ├── components          # 组件源码文件
│   └── locale              # 本地化
│		└── lang	        # 中英文语言配置
│   ├── modules             # 组件模块导出单文件
│   ├── index.js            # 
│   └── module.js           # 组件模块导出总文件
├── tests                   # 测试目录
│   └── unit                # 单元测试
├── types                   # 
│   ├── component.d.ts      # 
│   ├── cube-ui.d.ts        # 
│   └── index.d.ts          # 
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
├── postcss.config.js       # css预处理
├── README_zh-CN.md         # 中文文档说明
├── README.md               # 说明文档
└── yarn.lock               # 
```
