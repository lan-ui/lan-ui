import Vue from 'vue'

import { HxComponent } from './component'

/**
 * CubeUI 组件
 * CubeUI component common definition
 */
export type Component = HxComponent

/**
 * 版本
 *
 * The version of cube-ui
 */
export const version: string

/**
 * 需通过 `Vue.use(Cube)` 来安装
 *
 * Call `Vue.use(Cube)` to install
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
 * more details: https://didi.github.io/cube-ui/#/en-US/docs/create-api
 */
export function createAPI (vue: typeof Vue, Component: HxComponent, events?: string[], single?: boolean) : object

/** Local Module */
export class Locale {
  install (vue: typeof Vue): void
  use (lang: string, messages: object): void
}

/** Style Module */
export class Style {}

// basic
/** Button Component */
export class Button extends HxComponent {}
/** Loading Component */
export class Loading extends HxComponent {}
/** Tip Component */
export class Tip extends HxComponent {}
/** Toolbar Component */
export class Toolbar extends HxComponent {}
/** TabBar Component */
export class TabBar extends HxComponent {}
/** TabPanels Component */
export class TabPanels extends HxComponent {}
// form
/** Checkbox Component */
export class Checkbox extends HxComponent {}
/** Checkbox Group Component */
export class CheckboxGroup extends HxComponent {}
/** Checker Component */
export class Checker extends HxComponent {}
/** Radio Component */
export class Radio extends HxComponent {}
/** Radio Group Component */
export class RadioGroup extends HxComponent {}
/** Input Component */
export class Input extends HxComponent {}
/** Textarea Component */
export class Textarea extends HxComponent {}
/** Select Component */
export class Select extends HxComponent {}
/** Switch Component */
export class Switch extends HxComponent {}
/** Rate Component */
export class Rate extends HxComponent {}
/** Validator Component */
export class Validator extends HxComponent {}
/** Upload Component */
export class Upload extends HxComponent {}
/** Form Component */
export class Form extends HxComponent {}
// popup
/** Popup Component */
export class Popup extends HxComponent {
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
export class Drawer extends HxComponent {
  show(): void
  hide(): void
}
// scroll
/** Scroll Component */
export class Scroll extends HxComponent {}
/** Slide Component */
export class Slide extends HxComponent {}
/** Index List Component */
export class IndexList extends HxComponent {}
/** Swipe Component */
export class Swipe extends HxComponent {}
/** Sticky Component */
export class Sticky extends HxComponent {}
/** ScrollNavBar Component */
export class ScrollNavBar extends HxComponent {}
/** ScrollNav Component */
export class ScrollNav extends HxComponent {}
/** RecycleList Component */
export class RecycleList extends HxComponent {}

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
