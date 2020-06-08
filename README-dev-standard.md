# lan-ui业务组件库开发标准规范

为组件库开发人员提供统一的开发标准，请大家严格按照标准规范进行组件的开发

### git注册权限申请

- [注册gitlab用户](https://github.com)
- 添加组件开发权限（请联系管理员）

### clone项目

```shell
$ git config --global user.name "gitlab用户名"
$ git config --global user.email "gitlab邮箱"
$ git clone https://github.com/lan-ui/lan-ui.git
```

### 安装

```shell
cd lan-ui
npm install
```

### 组件开发目录结构

```bash
.
├── document                      # 文档说明源文件
│   ├── common                  
│       ├── config               
│          └── menu.json          # 添加中文文档说明左侧菜单配置【统一管理员调整】
│   ├── components               
│       ├── docs                 
│           ├── zh-CN            
│               └── XXXXX.md      # 添加业务组件对应的中文文档说明
│
├── example                       # 示例源文件
│   ├── pages               
│       └── XXXXX.vue             # 添加业务组件对应的示例
│   ├── router              
│       └── router.js             # 添加业务组件导入，配置示例路由
│   └── App.vue                   # 添加示例菜单配置【统一管理员调整】
│
├── src                           # 组件源码目录
│   ├── common                    
│       └── data                  # 存放组件用到的数据源（js格式）     
│   ├── components               
│       ├── XXXXX组件           # 新建组件源码文件（组件资源就近原则，放到该文件夹中）
│           └── XXXXX.vue      
│   ├── modules                   
│       ├── XXXXX组件           # 新建模块导出文件夹
│           └── index.js
│   ├── index.js                  # 添加组件导入及导出模块
│   └── module.js                # 添加组件模块导出模块
│
├── tests/unit                    # 测试目录
│   ├── specs                
│       └──  xxxx.specs.js    #  添加组件单元测试（组件测试通过率85%以上）
```

### 开发标准规范

- 统一配置文件，如需修改请联系管理员
- 开启ESLint代码检测功能，严格执行eslint规则校验
- 完整组件功能的开发包括（组件本身，单元测试，示例，文档说明）
- 完整组件开发完成，单元测试通过，开发测试通过，联系管理员安排测试
- 测试通过后，使用npm run cm 标准化提交git，推送新建的远程分支（以开发人员姓名缩写命名）
- 管理员review 组件通过后，即合并到组件库中（需开发人员配合）
- 组件应用到项目中，如有问题，组件开发人员进行修复维护