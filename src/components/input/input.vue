<template>
<div class="hx-box">
  <div class="hx-input" :class="{'hx-input_active': isFocus && !readonly}">
    <div class="hx-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="hx-input-title" :class="{'hx-input_disabled': disabled}" v-if="title!=''">{{title}}</div>
    <input
      class="hx-input-field"
      :class="{'hx-input_disabled': disabled}"
      ref="input"
      v-model="inputValue"
      v-bind="$props"
      :type="_type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :phone="phone"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander"
    >
    <div class="hx-input-append">
      <div class="hx-input-clear" v-if="_showClear && !phonefalse && !phonetrue" @touchend="handleClear">
        <i class="cubeic-wrong"></i>
      </div>
      <div class="hx-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <div class="hx-input-eye" v-if="phonefalse&&!readonly">
        <i class="cubeic-warn" style="color:#D81E06"></i>
      </div>
      <div class="hx-input-eye" v-if="phonetrue&&!readonly">
        <i class="cubeic-right" style="color:#08AF16"></i>
      </div>
      <div class="hx-input-eye" v-if="this.type ==='phone' && readonly" @click="handlePwdEye">
        <i :class="eyeClass"></i>
      </div>
      <slot name="append"></slot>
    </div>  
  </div>
  <div v-if="warnMsg!='' && !readonly" class="hx-input-warn">{{warnMsg}}</div>
  <div class="domain" v-if="domainShow == true">
    <p v-for="(item, i) in domainList" :key='i' v-on:click='clickTap(item)'>{{item}}</p>
  </div>
</div>
  
</template>

<script type="text/ecmascript-6">
  import inputMixin from '../../common/mixins/input'
  const COMPONENT_NAME = 'hx-input'
  const EVENT_INPUT = 'input'
  const EVENT_BLUR = 'blur'
  const EVENT_FOCUS = 'focus'

  export default {
    name: COMPONENT_NAME,
    mixins: [inputMixin],
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      readonly: {
        type: Boolean,
        default: false
      },
      phone: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
        type: [Boolean, String],
        default: false
      },
      name: String,
      id: String,
      form: String,
      minlength: Number,
      maxlength: Number,
      resize: String,
      min: Number,
      max: Number,
      step: Number,
      tabindex: String,
      clearable: {
        type: [Boolean, Object],
        default: false
      },
      eye: {
        type: [Boolean, Object],
        default: false
      }
    },
    data() {
      return {
        inputValue: this.value,
        isFocus: false,
        formatedClearable: {
          visible: false,
          blurHidden: true
        },
        formatedEye: {
          open: false,
          reverse: false
        },
        phonefalse: false,
        phonetrue: false,
        title: '',
        warnMsg: '',
        eyeVal: [],
        domainList: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
        domainShow: false
      }
    },
    computed: {
      _type() {
        const type = this.type
        console.log('hx---%s', type)
        if (type === 'password' && this.eye && this.pwdVisible) {
          return 'text'
        }
        if (type === 'phone') {
          this.title = '手机号码'
        } else if (type === 'email') {
          this.title = '邮箱地址'
        } else if (type === 'idcard') {
          this.title = '身份证'
        } else {
          this.title = ''
        }
        return type
      },
      _showClear() {
        let visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled
        if (this.formatedClearable.blurHidden && !this.isFocus) {
          visible = false
        }
        return visible
      },
      _showPwdEye() {
        return this.type === 'password' && this.eye && !this.disabled
      },
      pwdVisible() {
        const eye = this.formatedEye
        return eye.reverse ? !eye.open : eye.open
      },
      eyeClass() {
        return this.formatedEye.open ? 'cubeic-eye-visible' : 'cubeic-eye-invisible'
      }
    },
    watch: {
      value(newValue) {
        if (this.type === 'phone') {
          // 手机号码344格式
          if (newValue.length > 3) {
            newValue = newValue.replace(/\s*/g, '')
            if (newValue.length > 7) {
              newValue = newValue.replace(/^(...)(....)/g, '$1 $2 ')
            } else if (newValue.length > 3) {
              newValue = newValue.replace(/^(...)/g, '$1 ')
            }
          }
          this.inputValue = newValue.slice(0, 13)
        }
        if (this.type === 'email') {
          this.inputValue = newValue.toLocaleLowerCase()
          // console.log(newValue)
        }
        // console.log(this.inputValue)
      },
      inputValue(newValue) {
        this.warnMsg = ''
        this.$emit(EVENT_INPUT, newValue)
        // 手机号校验
        if (this.type === 'phone') {
          newValue = newValue.replace(/\s/g, '')
          var regPhone = /^1[3456789]\d{9}$/
          if (newValue.length === 11) {
            if (!(regPhone.test(newValue))) {
              this.phonefalse = true
              this.phonetrue = false
              this.warnMsg = '请输入正确的手机号码！'
            } else {
              this.phonetrue = true
              this.phonefalse = false
              this.warnMsg = ''
            }
          } else if (newValue.length > 11) {
            this.phonefalse = true
            this.phonetrue = false
            this.warnMsg = '请输入正确的手机号码！'
          } else {
            this.phonefalse = false
            this.phonetrue = false
            this.warnMsg = ''
          }
          if (newValue === '') {
            this.warnMsg = '请输入手机号码！'
          }
        }
        // 身份证校验
        if (this.type === 'idcard') {
          var regIdCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
          if (newValue.length === 18) {
            if (!(regIdCard.test(newValue))) {
              this.phonefalse = true
              this.phonetrue = false
              this.warnMsg = '您输入的身份证号码长度或者格式错误'
            } else {
              this.phonetrue = true
              this.phonefalse = false
              this.warnMsg = ''
            }
          } else if (newValue.length > 18) {
            this.phonefalse = true
            this.phonetrue = false
            this.warnMsg = '您输入的身份证号码长度或者格式错误'
          } else {
            this.phonefalse = false
            this.phonetrue = false
            this.warnMsg = ''
          }
          if (newValue === '') {
            this.warnMsg = '请输入身份证号！'
          }
        }
      },
      clearable: {
        handler() {
          this.formatClearable()
        },
        deep: true,
        immediate: true
      },
      eye: {
        handler() {
          this.formateEye()
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      formatClearable() {
        if (typeof this.clearable === 'boolean') {
          this.formatedClearable.visible = this.clearable
        } else {
          Object.assign(this.formatedClearable, this.clearable)
        }
      },
      formateEye() {
        if (typeof this.eye === 'boolean') {
          this.formatedEye.open = this.eye
        } else {
          Object.assign(this.formatedEye, this.eye)
        }
      },
      handleFocus(e) {
        this.$emit(EVENT_FOCUS, e)
        this.isFocus = true
        if (this.eyeVal.length !== 0) {
          this.inputValue = this.eyeVal[0]
        }
        this.eyeVal = []
        this.formatedEye.open = true
        if (this.type === 'email') {
          this.domainShow = true
          this.phonefalse = false
          this.phonetrue = false
        }
        // if (this.type === 'phone' && this.inputValue === '') {
        //   this.warnMsg = '请输入手机号码!'
        // }
      },
      handleBlur(e) {
        console.log('失焦')
        // 失焦校验
        if (this.type === 'phone') {
          // debugger
          this.checkPhone()
        }
        if (this.type === 'email') {
          // debugger
          this.domainShow = false
          this.checkEmail()
        }
        if (this.type === 'idcard') {
          // debugger
          this.checkIdcard()
        }
        this.$emit(EVENT_BLUR, e)
        this.isFocus = false
        // this.warnMsg = ''
      },
      handleClear(e) {
        this.inputValue = ''
        this.$refs.input.focus()
      },
      handlePwdEye() {
        this.formatedEye.open = !this.formatedEye.open
        if (this.type === 'phone') {
          this.eyeVal.push(this.inputValue)
          console.log(this.eyeVal[0])
          var str1 = this.inputValue.slice(0, 4)
          var str3 = this.inputValue.slice(8, 13)
          if (this.formatedEye.open === false) {
            this.inputValue = str1 + '****' + str3
          } else if (this.formatedEye.open === true) {
            this.inputValue = this.eyeVal[0]
          }
          // this.eyeVal = []
        }
      },
      // 失焦校验手机号
      checkPhone() {
        var regPhone = /^1[3456789]\d{1}\s\d{4}\s\d{4}$/
        if (this.inputValue.length === 13) {
          if (!(regPhone.test(this.inputValue))) {
            this.phonefalse = true
            this.phonetrue = false
            this.warnMsg = '请输入正确的手机号码！'
          } else {
            this.phonetrue = true
            this.phonefalse = false
            this.warnMsg = ''
          }
          console.log(this.phonetrue + '\n' + this.phonefalse + '\n' + this.warnMsg)
        } else if (this.inputValue === '') {
          this.warnMsg = '请输入手机号码！'
          console.log(this.warnMsg + '失焦')
        } else {
          this.phonefalse = true
          this.phonetrue = false
          this.warnMsg = '请输入正确的手机号码！'
          console.log(this.phonetrue + '\n' + this.phonefalse + '\n' + this.warnMsg)
        }
      },
      // 失焦校验身份证号
      checkIdcard() {
        var regIdCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        if (this.inputValue.length === 18) {
          if (!(regIdCard.test(this.inputValue))) {
            this.phonefalse = true
            this.phonetrue = false
            this.warnMsg = '您输入的身份证号码长度或者格式错误'
          } else {
            this.phonetrue = true
            this.phonefalse = false
            this.warnMsg = ''
          }
        } else if (this.inputValue === '') {
          this.warnMsg = '请输入身份证号！'
        } else {
          this.phonefalse = true
          this.phonetrue = false
          this.warnMsg = '您输入的身份证号码长度或者格式错误'
        }
      },
      // 邮箱域名点击事件
      clickTap(val) {
        this.inputValue = this.inputValue + val
        console.log(this.inputValue)
        this.domainShow = false
        // console.log(this.domainShow)
        var regEmail = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/
        if (!(regEmail.test(this.inputValue))) {
          this.phonefalse = true
          this.phonetrue = false
          this.warnMsg = '请输入正确的邮箱地址！'
          // console.log(this.phonefalse + '\n' + this.phonetrue + '\n' + this.warnMsg)
        } else {
          this.phonefalse = false
          this.phonetrue = true
          this.warnMsg = ''
          // console.log(this.phonefalse + '\n' + this.phonetrue + '\n' + this.warnMsg)
        }
        if (this.inputValue === '') {
          this.warnMsg = '请输入邮箱地址！'
          // console.log(this.warnMsg)
        }
      },
      // 失焦校验邮箱
      checkEmail() {
        console.log(this.inputValue)
        var regEmail = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/
        if (!(regEmail.test(this.inputValue))) {
          this.phonefalse = true
          this.phonetrue = false
          this.warnMsg = '请输入正确的邮箱地址！'
          // console.log(this.phonefalse + '\n' + this.phonetrue + '\n' + this.warnMsg)
        } else {
          this.phonefalse = false
          this.phonetrue = true
          this.warnMsg = ''
          // console.log(this.phonefalse + '\n' + this.phonetrue + '\n' + this.warnMsg)
        }
        if (this.inputValue === '') {
          this.warnMsg = '请输入邮箱地址！'
          // console.log(this.warnMsg)
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .hx-box
    position :relative
    padding:0 0 20px 0
  .hx-input
    display: flex
    align-items: center
    font-size: $fontsize-medium
    line-height: 1.429
    border-1px($input-border-color)
    border-bottom: 1px solid #efefef
    height:40px
  .hx-input-title
    padding: 0px 20px
    color : #545454
  .hx-input_disabled
    color: #BEBEBE !important 
  .hx-input-field
    display: block
    flex: 1
    width: 100%
    min-width: 0
    padding: 10px
    box-sizing: border-box
    color: #545454
    line-height: inherit
    background-color: inherit
    border-radius: 2px
    outline: none
    &::-webkit-input-placeholder
      color: $input-placeholder-color
      text-overflow: ellipsis
    + .hx-input-append
      .hx-input-clear, .hx-input-eye
        &:first-child
          margin-left: -5px
  .hx-input_active
    border-bottom: 1px solid #1890ff
  .hx-input-prepend, .hx-input-append
    display: flex
    align-items: center
  .hx-input-clear, .hx-input-eye
    width: 1em
    height: 1em
    line-height: 1
    padding: 10px
    box-sizing: content-box
    color: $input-clear-icon-color
    > i
      display: inline-block
      transform: scale(1.2)
  .hx-input-eye
    >
      .cubeic-eye-invisible, .cubeic-eye-visible
        transform: scale(1.4)
  .hx-input-warn
    color: #DC3925
    position:absolute
    bottom: 0
    left:0
    font-size :10px
    padding:0 0 0 20px
  .domain
    position:absolute
    top:42px
    background:#fff
    z-index :10
    padding:0 20px
    width:100%
    height:300px
    overflow:scroll
  .domain p
    line-height:46px
    border-bottom:1px solid #efefef
</style>
