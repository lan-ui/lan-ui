const mountInstallerOnComponent = (ComponentsOptions = {}) => {
  // 此处挂载器挂载策略
  // 若当前组件原始选项中存在挂载器（install），则保留原先使用原先的挂载器，统一的挂载器不会覆盖
  // 实际开发中可在组件中进行覆盖操作
  !ComponentsOptions.install && (ComponentsOptions.install = function (Vue) {
    Vue.component(ComponentsOptions.name, ComponentsOptions)
  })
}

const mountInstallerOnComponents = (components = []) => {
  if (Array.isArray(components)) {
    // 入参为组件数组，使用 forEach 递归的挂载组件挂载器
    components.forEach(ComponentsOptions => {
      mountInstallerOnComponent(ComponentsOptions)
    })
  } else if (Object.prototype.toString.call(components).slice(8, -1) === 'Object') {
    // 入参为对象，获取组件所有的索引数组，再递归的挂载组件挂载器
    Object.keys(components).forEach(key => {
      mountInstallerOnComponent(components[key])
    })
  }
}

export default {
  mountInstallerOnComponent,
  mountInstallerOnComponents
}
