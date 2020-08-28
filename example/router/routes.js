import Button from '../pages/button.vue'
import Checkbox from '../pages/checkbox.vue'
import CheckboxGroup from '../pages/checkbox-group.vue'
import Radio from '../pages/radio.vue'
import Switch from '../pages/switch/index.vue'
import SwitchIOS from '../pages/switch/ios.vue'
import SwitchAndroid from '../pages/switch/android.vue'
import Loading from '../pages/loading/index.vue'
import LoadingDefault from '../pages/loading/default.vue'
import LoadingProcess from '../pages/loading/process.vue'
import LoadingButton from '../pages/loading/button.vue'
import LoadingEmpty from '../pages/loading/empty.vue'
import LoadingModal from '../pages/loading/modal.vue'
import Tip from '../pages/tip/index.vue'
import TipDefault from '../pages/tip/default.vue'
import TipDemo from '../pages/tip/tip.vue'
import TipDemo1 from '../pages/tip/tip1.vue'
import TipDemo2 from '../pages/tip/tip2.vue'
import Popup from '../pages/popup.vue'
import Toast from '../pages/toast.vue'
import Input from '../pages/input/index.vue'
import InputDefault from '../pages/input/default.vue'
import InputCustomList from '../pages/input/custom-list.vue'
import InputCustom from '../pages/input/custom.vue'
import Textarea from '../pages/textarea.vue'
import Rate from '../pages/rate.vue'
import Form from '../pages/form/index.vue'
import FormDefault from '../pages/form/default.vue'
import FormCustom from '../pages/form/custom.vue'
import FormClassic from '../pages/form/classic.vue'
import FormFresh from '../pages/form/fresh.vue'
import Picker from '../pages/picker.vue'
import CascadePicker from '../pages/cascade-picker.vue'
import SegmentPicker from '../pages/segment-picker.vue'
import DatePicker from '../pages/date-picker.vue'
import TimePicker from '../pages/time-picker.vue'
import Select from '../pages/select.vue'
import Dialog from '../pages/dialog.vue'
import ActionSheet from '../pages/action-sheet.vue'
import Scroll from '../pages/scroll/index.vue'
import ScrollDefault from '../pages/scroll/default.vue'
import ScrollConfig from '../pages/scroll/config.vue'
import ScrollJd from '../pages/scroll/jd.vue'
import ScrollHorizontal from '../pages/scroll/horizontal.vue'
import ScrollToutiao from '../pages/scroll/toutiao.vue'
import VScrolls from '../pages/scroll/vertical-scrolls.vue'
import HScrolls from '../pages/scroll/horizontal-scrolls.vue'
import TextareaInScroll from '../pages/scroll/textarea.vue'
import IndexList from '../pages/index-list/index.vue'
import IndexListDefault from '../pages/index-list/default.vue'
import IndexListCustom from '../pages/index-list/custom.vue'
import IndexListPullUpLoad from '../pages/index-list/pull-up-load.vue'
import IndexListPullDownRefresh from '../pages/index-list/pull-down-refresh.vue'
import Upload from '../pages/upload/index.vue'
import UploadDefault from '../pages/upload/default.vue'
import UploadCompress from '../pages/upload/compress.vue'
import UploadCustom from '../pages/upload/custom.vue'
import Validator from '../pages/validator.vue'
import Swipe from '../pages/swipe/index.vue'
import SwipeDefault from '../pages/swipe/default.vue'
import SwipeCustom from '../pages/swipe/custom.vue'
import Drawer from '../pages/drawer/index.vue'
import DrawerDefault from '../pages/drawer/default.vue'
import DrawerCustom from '../pages/drawer/custom.vue'
import Slide from '../pages/slide/index.vue'
import SlideVertical from '../pages/slide/vertical.vue'
import SlideHorizontal from '../pages/slide/horizontal.vue'
import Toolbar from '../pages/toolbar.vue'
import Sticky from '../pages/sticky/index.vue'
import StickyScroll from '../pages/sticky/scroll.vue'
import StickyNative from '../pages/sticky/native.vue'
import StickyWechat from '../pages/sticky/wechat.vue'
import ScrollNavBar from '../pages/scroll-nav-bar.vue'
import ScrollNav from '../pages/scroll-nav/index.vue'
import ScrollNavDefault from '../pages/scroll-nav/default.vue'
import ScrollNavSide from '../pages/scroll-nav/side.vue'
import ImagePreviewIndex from '../pages/image-preview/index.vue'
import MultiImagesPreview from '../pages/image-preview/multi-images-preview.vue'
import TabBarIndex from '../pages/tab-bar/index.vue'
import TabBar from '../pages/tab-bar/tab-bar.vue'
import Tab from '../pages/tab-bar/tab-entry.vue'
import TabBasic from '../pages/tab-bar/tab-basic.vue'
import TabBottom from '../pages/tab-bar/tab-bottom.vue'
import TabScroll from '../pages/tab-bar/tab-scroll.vue'
import TabVertical from '../pages/tab-bar/tab-vertical.vue'
import TabIcon from '../pages/tab-bar/tab-icon.vue'
import TabComposite from '../pages/tab-bar/tab-composite.vue'
import ScrollTab from '../pages/tab-bar/scroll-tab.vue'
import Checker from '../pages/checker.vue'
import RecycleList from '../pages/recycle-list/index.vue'
import RecycleListDefault from '../pages/recycle-list/recycle-list-default.vue'
import RecycleListTombstone from '../pages/recycle-list/recycle-list-tombstone.vue'
import Sex from '../pages/sex.vue'
import Bank from '../pages/bank.vue'
import Certificatetype from '../pages/certificatetype.vue'
import Nationality from '../pages/nationality.vue'
import Location from '../pages/location.vue'
import Provinces from '../pages/provinces.vue'
import Birthdate from '../pages/birthdate.vue'
import Validity from '../pages/validity.vue'
import PhoneNumber from '../pages/phone-number.vue'
import Email from '../pages/email.vue'
import IdNumber from '../pages/id-number.vue'
import Address from '../pages/address.vue'
import AccountName from '../pages/account-name.vue'
import AccountNumber from '../pages/account-number.vue'
import PhoneVerification from '../pages/phone-verification.vue'

const routes = [
  {
    path: '/phone-number',
    component: PhoneNumber
  },
  {
    path: '/email',
    component: Email
  },
  {
    path: '/id-number',
    component: IdNumber
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/account-name',
    component: AccountName
  },
  {
    path: '/account-number',
    component: AccountNumber
  },
  {
    path: '/phone-verification',
    component: PhoneVerification
  },
  {
    path: '/sex',
    component: Sex
  },
  {
    path: '/bank',
    component: Bank
  },
  {
    path: '/certificatetype',
    component: Certificatetype
  },
  {
    path: '/nationality',
    component: Nationality
  },
  {
    path: '/location',
    component: Location
  },
  {
    path: '/provinces',
    component: Provinces
  },
  {
    path: '/validity',
    component: Validity
  },
  {
    path: '/birthdate',
    component: Birthdate
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/checkbox-group',
    component: CheckboxGroup
  },
  {
    path: '/checker',
    component: Checker
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/input',
    component: Input,
    children: [
      {
        path: 'default',
        component: InputDefault
      },
      {
        path: 'custom-list',
        component: InputCustomList
      },
      {
        path: 'custom',
        component: InputCustom
      }
    ]
  },
  {
    path: '/textarea',
    component: Textarea
  },
  {
    path: '/switch',
    component: Switch,
    children: [
      {
        path: 'ios',
        component: SwitchIOS
      },
      {
        path: 'android',
        component: SwitchAndroid
      }
    ]
  },
  {
    path: '/form',
    component: Form,
    children: [
      {
        path: 'default',
        component: FormDefault
      },
      {
        path: 'custom',
        component: FormCustom
      },
      {
        path: 'classic',
        component: FormClassic
      },
      {
        path: 'fresh',
        component: FormFresh
      }
    ]
  },
  {
    path: '/loading',
    component: Loading,
    children: [
      {
        path: 'default',
        component: LoadingDefault
      },
      {
        path: 'process',
        component: LoadingProcess
      },
      {
        path: 'button',
        component: LoadingButton
      },
      {
        path: 'empty',
        component: LoadingEmpty
      },
      {
        path: 'modal',
        component: LoadingModal
      }
    ]
  },
  {
    path: '/tip',
    component: Tip,
    children: [
      {
        path: 'default',
        component: TipDefault
      },
      {
        path: 'tip-demo',
        component: TipDemo
      },
      {
        path: 'tip-demo1',
        component: TipDemo1
      },
      {
        path: 'tip-demo2',
        component: TipDemo2
      }
    ]
  },
  {
    path: '/toolbar',
    component: Toolbar
  },
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/rate',
    component: Rate
  },
  {
    path: '/picker',
    component: Picker
  },
  {
    path: '/cascade-picker',
    component: CascadePicker
  },
  {
    path: '/segment-picker',
    component: SegmentPicker
  },
  {
    path: '/date-picker',
    component: DatePicker
  },
  {
    path: '/time-picker',
    component: TimePicker
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/action-sheet',
    component: ActionSheet
  },
  {
    path: '/drawer',
    component: Drawer,
    children: [
      {
        path: 'default',
        component: DrawerDefault
      },
      {
        path: 'custom',
        component: DrawerCustom
      }
    ]
  },
  {
    path: '/image-preview',
    component: ImagePreviewIndex,
    children: [
      {
        path: 'multi-images-preview',
        component: MultiImagesPreview
      }
    ]
  },
  {
    path: '/scroll',
    component: Scroll,
    children: [
      {
        path: 'default',
        component: ScrollDefault
      },
      {
        path: 'config',
        component: ScrollConfig
      },
      {
        path: 'jd',
        component: ScrollJd
      },
      {
        path: 'horizontal',
        component: ScrollHorizontal
      },
      {
        path: 'toutiao',
        component: ScrollToutiao
      },
      {
        path: 'v-scrolls',
        component: VScrolls
      },
      {
        path: 'h-scrolls',
        component: HScrolls
      },
      {
        path: 'textarea',
        component: TextareaInScroll
      }
    ]
  },
  {
    path: '/index-list',
    component: IndexList,
    children: [
      {
        path: 'default',
        component: IndexListDefault
      },
      {
        path: 'custom',
        component: IndexListCustom
      },
      {
        path: 'pull-up-load',
        component: IndexListPullUpLoad
      },
      {
        path: 'pull-down-refresh',
        component: IndexListPullDownRefresh
      }
    ]
  },
  {
    path: '/upload',
    component: Upload,
    children: [
      {
        path: 'default',
        component: UploadDefault
      },
      {
        path: 'compress',
        component: UploadCompress
      },
      {
        path: 'custom',
        component: UploadCustom
      }
    ]
  },
  {
    path: '/validator',
    component: Validator
  },
  {
    path: '/swipe',
    component: Swipe,
    children: [
      {
        path: 'default',
        component: SwipeDefault
      },
      {
        path: 'custom',
        component: SwipeCustom
      }
    ]
  },
  {
    path: '/slide',
    component: Slide,
    children: [
      {
        path: 'vertical',
        component: SlideVertical
      },
      {
        path: 'horizontal',
        component: SlideHorizontal
      }
    ]
  },
  {
    path: '/toolbar',
    component: Toolbar
  },
  {
    path: '/sticky',
    component: Sticky,
    children: [
      {
        path: 'scroll',
        component: StickyScroll
      },
      {
        path: 'native',
        component: StickyNative
      },
      {
        path: 'wechat',
        component: StickyWechat
      }
    ]
  },
  {
    path: '/scroll-nav-bar',
    component: ScrollNavBar
  },
  {
    path: '/scroll-nav',
    component: ScrollNav,
    children: [
      {
        path: 'default',
        component: ScrollNavDefault
      },
      {
        path: 'side',
        component: ScrollNavSide
      }
    ]
  },
  {
    path: '/tab-bar',
    component: TabBarIndex,
    children: [
      {
        path: 'tab-bar',
        component: TabBar
      },
      {
        path: 'scroll-tab',
        component: ScrollTab
      },
      {
        path: 'tab',
        component: Tab,
        children: [
          { path: 'basic',
            component: TabBasic
          },
          { path: 'bottom',
            component: TabBottom
          },
          { path: 'scroll',
            component: TabScroll
          },
          { path: 'vertical',
            component: TabVertical
          },
          { path: 'icon',
            component: TabIcon
          },
          { path: 'composite',
            component: TabComposite
          }
        ]
      }
    ]
  },
  {
    path: '/recycle-list',
    component: RecycleList,
    children: [
      {
        path: 'default',
        component: RecycleListDefault
      },
      {
        path: 'tombstone',
        component: RecycleListTombstone
      }
    ]
  }
]

export default routes
