<template>
    <div :class="{warning:warning}" @click="handleClick">
      <div class="validity">
        <span class="title" :class="{tips:disabled}">
          <slot>证件有效期</slot>
        </span>
        <span class="text" :class="{tips:(!validity ||disabled) && !isLongTerm}">{{validity?validity:shownText}}</span>
        <span class="icon" v-if="!readonly && !disabled">
            <i class="icon-lan-date"></i>
        </span>
    </div>
  </div>
</template>
<script>
  const COMPONENT_NAME = 'lan-validity'
  export default {
    name: COMPONENT_NAME,
    data () {
      return {
        warning: false
      }
    },
    props: {
      age: {
        type: Number
      },
      validity: {
        type: String
      },
      readonly: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      isLongTerm: {
        type: Boolean
      }
    },
    computed: {
      min() {
        var today = new Date()
        return today
      },
      max() {
        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth()
        var date = now.getDate()
        var gap = 0
        switch (true) {
          case this.age < 16 :
            gap = 5
            break
          case this.age >= 16 && this.age < 25 :
            gap = 10
            break
          case this.age >= 25 && this.age < 45 :
            gap = 20
            break
          default :
            break
        }
        return new Date(year + gap, month, date)
      },
      shownText() {
        var shownText = ''
        if (this.isLongTerm) {
          shownText = '长期有效'
        } else {
          shownText = this.validity ? this.validity : '请输入证件有效期'
        }
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
            value: new Date(),
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
        if (!this.validity) {
          this.warning = true
        }
      },
      handleClick(event) {
        if (this.disabled || this.readonly || this.isLongTerm) {
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
      text-align:left
    .validity
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
      content:'请输入证件有效期'
      color:myred
      font-size:12px
      display:block
      line-height:32px
      text-align:left
</style>
