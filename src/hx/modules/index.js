import utils from './utils.js'

import HxInputFoundation from '../components/HxInputFoundation.vue'
import HxInputPhone from '../components/HxInputPhone.vue'
import HxInputEmail from '../components/HxInputEmail.vue'
import HxInputIdcard from '../components/HxInputIdcard.vue'
import HxInputAddress from '../components/HxInputAddress.vue'
import HxInputAccount from '../components/HxInputAccount.vue'
import HxInputAccountName from '../components/HxInputAccountName.vue'
import HxInputPhoneverification from '../components/HxInputPhoneverification.vue'

// import { ... } from '../components/...'

const components = {
  // Input
  HxInputFoundation,
  HxInputPhone,
  HxInputEmail,
  HxInputIdcard,
  HxInputAddress,
  HxInputAccount,
  HxInputAccountName,
  HxInputPhoneverification
  // ...
}

// 统一挂载组件挂载器
utils.mountInstallerOnComponents(components)

// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// // console.log('==== components ====', '\n', components)
// Object.keys(components).forEach(key => {
//   const component = components[key]
//   console.log('name:', component.name, 'install:', component.install)
// })
// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')

export default components
