<template>
    <div :class="{warning:warning}" @click="handleClick">
      <div class="birth">
        <span class="title" :class="{tips:disabled}">
          <slot>出生日期</slot>
        </span>
        <span class="text" :class="{tips:!birth ||disabled}">{{birth?birth:shownText}}</span>
        <span class="icon" v-if="!readonly && !disabled">
            <i class="icon-hualife-date"></i>
        </span>
    </div>
  </div>
</template>
<script>
  const COMPONENT_NAME = 'lan-birthdate'
  export default {
    name: COMPONENT_NAME,
    data () {
      return {
        warning: false
      }
    },
    props: {
      birth: {
        type: String
      },
      readonly: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      }
    },
    computed: {
      min() {
        return new Date(2010, 0, 1)
      },
      max() {
        return new Date(2020, 11, 31)
      },
      shownText() {
        var shownText = this.birth ? this.birth : '请填写出生日期'
        return shownText
      }
    },
    methods: {
      showDatePicker() {
        this.warning = false
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: '日期选择',
            min: this.min,
            max: this.max,
            value: new Date(this.birth),
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle,
            onChange: () => {
              console.log('change')
            }
          })
        }
        this.datePicker.show()
      },
      selectHandle(date, selectedVal, selectedText) {
        this.$emit('receive', selectedVal, selectedText)
      },
      cancelHandle() {
        if (!this.birth) {
          this.warning = true
        }
      },
      handleClick(event) {
        if (this.disabled || this.readonly) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        this.showDatePicker()
      }
    }
  }
</script>
<style lang="stylus" scoped>
    myblue=#1890ff
    mygrey=#ccc
    myblack=#333
    myred=#db1e06
    .warning
      height:74px
    .birth
      background-color:white
      font-size:16px
      height:50px
      text-align:left
      border-bottom:1px solid #efefef
    .title
      float:left
      display:inline-block
      color:myblack
      width:112px
      line-height:50px
    .text
      width:14px
      line-height:50px
    .tips
      color:mygrey
    .icon
      color:myblue
      float:right
      font-size:22px
      line-height:50px
    .warning::after
      content:'请填写出生日期'
      color:myred
      font-size:12px
      display:block
      line-height:32px
      text-align:left
</style>
