<template>
    <div class="birth" :class="{warning:warning}" @click="handleClick">
        <span class="title" :class="{tips:disabled}">
          <slot>出生日期</slot>
        </span>
        <span class="text" :class="{tips:!birth ||disabled}">{{birth?birth:shownText}}</span>
        <span class="icon" v-if="!readonly && !disabled">
            <i class="cubeic-calendar"></i>
        </span>
    </div>
</template>
<script>
  const COMPONENT_NAME = 'hx-birthdate'
  export default {
    name: COMPONENT_NAME,
    props: {
      warning: {
        type: Boolean
      },
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
        console.log(event)
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
    .birth
      background-color:white
      font-size:16px
      height:50px
      border-bottom:2px solid #efefef
    .title
      color:myblack
      margin-right:50px
      line-height:50px
    .text
      width:14px
    .tips
      color:mygrey
    .icon
      color:myblue
      float:right
      line-height:50px
    .warning::after
      content:'请填写出生日期'
      color:myred
      font-size:12px
      display:block
      line-height:24px

</style>
