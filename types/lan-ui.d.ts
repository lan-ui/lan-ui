import Vue from 'vue'

import { LanUIComponent } from './component'

/**
 * LanUI 组件
 * LanUI component common definition
 */
export type Component = LanUIComponent

/**
 * 版本
 *
 * The version of lan-ui
 */
export const version: string

/**
 * 需通过 `Vue.use(Lan)` 来安装
 *
 * Call `Vue.use(Lan)` to install
 */
export function install (vue: typeof Vue): void

/**
 * BetterScroll, https://github.com/ustbhuangyi/better-scroll
 */
export class BScroll {}

/**
 * 可以通过 `createAPI` 创建自己的通过
 * API 形式实例化的组件
 *
 * You use it to create your own API component
 * more details: https://didi.github.io/Lan-ui/#/en-US/docs/create-api
 */
export function createAPI (vue: typeof Vue, Component: LanUIComponent, events?: string[], single?: boolean) : object

/** Local Module */
export class Locale {
  install (vue: typeof Vue): void
  use (lang: string, messages: object): void
}

/** Style Module */
export class Style {}

// basic
/** Button Component */
export class Button extends LanUIComponent {}
/** Loading Component */
export class Loading extends LanUIComponent {}
/** Tip Component */
export class Tip extends LanUIComponent {}
/** Toolbar Component */
export class Toolbar extends LanUIComponent {}
/** TabBar Component */
export class TabBar extends LanUIComponent {}
/** TabPanels Component */
export class TabPanels extends LanUIComponent {}
// form
/** Checkbox Component */
export class Checkbox extends LanUIComponent {}
/** Checkbox Group Component */
export class CheckboxGroup extends LanUIComponent {}
/** Checker Component */
export class Checker extends LanUIComponent {}
/** Radio Component */
export class Radio extends LanUIComponent {}
/** Radio Group Component */
export class RadioGroup extends LanUIComponent {}
/** Input Component */
export class Input extends LanUIComponent {}
/** Textarea Component */
export class Textarea extends LanUIComponent {}
/** Select Component */
export class Select extends LanUIComponent {}
/** Switch Component */
export class Switch extends LanUIComponent {}
/** Rate Component */
export class Rate extends LanUIComponent {}
/** Validator Component */
export class Validator extends LanUIComponent {}
/** Upload Component */
export class Upload extends LanUIComponent {}
/** Form Component */
export class Form extends LanUIComponent {}
// popup
/** Popup Component */
export class Popup extends LanUIComponent {
  show(): any
  hide(): any
  remove(): any
}
/** Toast Component */
export class Toast extends Popup {}
/** Picker Component */
export class Picker extends Popup {}
/** Cascade Picker Component */
export class CascadePicker extends Popup {}
/** Date Picker Component */
export class DatePicker extends Popup {}
/** Time Picker Component */
export class TimePicker extends Popup {}
/** Segment Picker Component */
export class SegmentPicker extends Popup {}
/** Dialog Component */
export class Dialog extends Popup {}
/** Action Sheet Component */
export class ActionSheet extends Popup {}
/** ImagePreview Component */
export class ImagePreview extends Popup {}
/** Drawer Component */
export class Drawer extends LanUIComponent {
  show(): void
  hide(): void
}
// scroll
/** Scroll Component */
export class Scroll extends LanUIComponent {}
/** Slide Component */
export class Slide extends LanUIComponent {}
/** Index List Component */
export class IndexList extends LanUIComponent {}
/** Swipe Component */
export class Swipe extends LanUIComponent {}
/** Sticky Component */
export class Sticky extends LanUIComponent {}
/** ScrollNavBar Component */
export class ScrollNavBar extends LanUIComponent {}
/** ScrollNav Component */
export class ScrollNav extends LanUIComponent {}
/** RecycleList Component */
export class RecycleList extends LanUIComponent {}
/** Bank Component */
export class Bank extends LanUIComponent {}
/** Certificatetype Component */
export class LanCertificatetype extends LanUIComponent {}
/** LanNationality Component */
export class Nationality extends LanUIComponent {}
/** Sex Component */
export class Sex extends LanUIComponent {}
/** Location Component */
export class Location extends LanUIComponent {}
/** Provinces Component */
export class Provinces extends LanUIComponent {}
/** Validity Component */
export class Validity extends LanUIComponent {}
/** Birthdate Component */
export class Birthdate extends LanUIComponent {}

// Vue prototype $createXx
declare module 'vue/types/vue' {
  interface Vue {
    /** create Toast instance */
    $createToast(options: object): Toast
    /** create Picker instance */
    $createPicker(options: object): Picker
    /** create CascadePicker instance */
    $createCascadePicker(options: object): CascadePicker
    /** create DatePicker instance */
    $createDatePicker(options: object): DatePicker
    /** create TimePicker instance */
    $createTimePicker(options: object): TimePicker
    /** create SegmentPicker instance */
    $createSegmentPicker(options: object): SegmentPicker
    /** create Dialog instance */
    $createDialog(options: object): Dialog
    /** create ActionSheet instance */
    $createActionSheet(options: object): ActionSheet
    /** create ImagePreview instance */
    $createImagePreview(options: object): ImagePreview
  }
}
