/* eslint-disable no-undef */
import {
  /* eslint-disable no-unused-vars */
  Style,
  // locale
  Locale,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
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
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList,
  // module
  BetterScroll,
  createAPI,
  // hx
  HxBank,
  HxCertificatetype,
  HxNationality,
  HxSex,
  HxLocation,
  HxProvinces,
  HxValidity,
  HxBirthdate,
  // xwb
  HxPhoneNumber,
  HxPhoneVerification,
  HxAccountName,
  HxAccountNumber,
  HxAddress,
  HxIdNumber,
  HxEmail,
  HxInput,
  HxInputFdn
} from './module'
import { processComponentName } from './common/helpers/util'
import './rem'

const components = [
  // locale
  Locale,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  TabBar,
  TabPanels,
  // form
  Checkbox,
  CheckboxGroup,
  Checker,
  Radio,
  RadioGroup,
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
  ImagePreview,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Sticky,
  ScrollNav,
  ScrollNavBar,
  RecycleList,
  //  hx
  HxBank,
  HxCertificatetype,
  HxNationality,
  HxSex,
  HxLocation,
  HxProvinces,
  HxValidity,
  HxBirthdate,
  // // input
  // HxInputFoundation,
  // HxInputPhone,
  // HxInputEmail,
  // HxInputIdcard,
  // HxInputAddress,
  // HxInputAccount,
  // HxInputAccountName,
  // HxInputPhoneverification
  HxPhoneNumber,
  HxPhoneVerification,
  HxAccountName,
  HxAccountNumber,
  HxAddress,
  HxIdNumber,
  HxEmail,
  HxInput,
  HxInputFdn
]

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    // ignore radio
    if (Component === Radio) {
      return
    }
    Component.install(Vue)
  })
}
const Hx = {
  /* eslint-disable no-undef */
  version: (typeof __VERSION__ !== 'undefined') ? __VERSION__ : '',
  install,
  BScroll: BetterScroll,
  createAPI
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Hx[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Hx
