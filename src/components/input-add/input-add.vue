<template>
  <div class="lan">
    <div class="lan-input lan-input_normal" :class="{'lan-input_active': isFocus&&!readonly}">
      <div class="lan-input-prepend" v-if="$slots.prepend">
       <slot name="prepend"></slot>
      </div>
      <p class="lan-phone-section">
        <slot name="phone"></slot>
      </p>
      <input v-if="type!='address'"
        class="lan-input-field"
        :class="{'lan-input_disabled': disabled}"
        ref="input"
        v-model="inputValue"
        v-bind="$props"
        :type="_type"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :maxlength="maxlength"
        :style="lanstyle"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="changeHander"
      >
      <textarea v-if="type=='address'"
        onfocus="window.activeobj=this;this.clock=setInterval(function(){activeobj.style.height=activeobj.scrollHeight+'px';},10);" 
        onblur="clearInterval(this.clock);"
        id="textarea"
        class="lan-input-textarea"
        :class="{'lan-input_disabled': disabled}"
        ref="input"
        v-model="inputValue"
        v-bind="$props"
        :type="_type"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :maxlength="maxlength"
        :style="lanstyle"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="changeHander"
      />
      <div class="lan-input-append" v-if="$slots.append || _showClear || _showPwdEye">
        <div class="lan-input-clear" v-if="_showClear&&!readonly" @touchend="handleClear">
          <i class="cubeic-wrong"></i>
          <!-- <i class="icon-hualife-certificates"></i> -->
        </div>
        <div class="lan-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
          <i :class="eyeClass"></i>
        </div>
        <slot name="append" v-if="!_showPwdEye&&!readonly"></slot>
      </div>
      <!-- 获取验证码 -->
      <p > 
        <slot name="verification"></slot>
      </p>
    </div>
    <!-- 增加 slot 错误信息 | start -->
    <p class="lan-rule-error">
      <slot name="rule-error"></slot>
    </p>
    <!-- 增加 slot 错误信息 | end -->
    <!-- 邮箱后缀 -->
    <p class="lan-email-suffix"> 
      <slot name="emailSuffix"></slot>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import inputMixin from '../../common/mixins/input'
  const EVENT_INPUT = 'input'
  const EVENT_BLUR = 'blur'
  const EVENT_FOCUS = 'focus'

  export default {
    name: 'lan-input-add',
    mixins: [inputMixin],
    props: {
      value: [String, Number],
      format: Function,
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
      },
      lanstyle: {
        type: String,
        default: 'text-align:left'
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
        }
      }
    },
    computed: {
      _type() {
        const type = this.type
        if (type === 'password' && this.eye && this.pwdVisible) {
          return 'text'
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
        return (this.type === 'password' || this.type === 'phone' || this.type === 'idcard' || this.type === 'account') && this.eye && !this.disabled
      },
      pwdVisible() {
        const eye = this.formatedEye
        return eye.reverse ? !eye.open : eye.open
      },
      eyeClass() {
        return this.formatedEye.open ? 'lan-icon-yanjing-keyikan' : 'lan-icon-bukejian1'
        // return this.formatedEye.open ? 'icon-hualife-visible' : 'icon-hualife-invisible'
      }
      // inputValueFormat: {
      //   get() {
      //     return this.inputValue
      //   },
      //   set(val) {
      //     this.inputValue = this.format ? this.format(val) : val
      //   }
      // }
    },
    mounted() {
      // debugger
      if (this.type === 'address') {
        var text = document.getElementsByTagName('textarea')
        for (var i = 0; i < text.length; i++) {
          this.autoTextarea(text[i])
        }
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue) {
        this.$emit(EVENT_INPUT, newValue)
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
        console.log(e)
        this.$emit(EVENT_FOCUS, e)
        this.isFocus = true
      },
      handleBlur(e) {
         // console.log(e)
        this.$emit(EVENT_BLUR, e)
        this.isFocus = false
      },
      handleClear(e) {
        // console.log(e)
        this.inputValue = ''
        this.$refs.input.focus()
      },
      handlePwdEye() {
        this.formatedEye.open = !this.formatedEye.open
        this.$emit('clickEye', this.formatedEye.open)
      },
      // textarea高度自适应
      autoTextarea(elem, extra, maxHeight) {
        extra = extra || 0
        var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window
        var isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera')
        var addEvent = function (type, callback) {
          elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type, callback)
        }
        var getStyle = elem.currentStyle ? function (name) {
          var val = elem.currentStyle[name]
          if (name === 'height' && val.search(/px/i) !== 1) {
            var rect = elem.getBoundingClientRect()
            return rect.bottom - rect.top - parseFloat(getStyle('paddingTop')) - parseFloat(getStyle('paddingBottom')) + 'px'
          }
          return val
        } : function (name) {
          return window.getComputedStyle(elem, null)[name]
        }
        var minHeight = parseFloat(getStyle('height'))
        elem.style.resize = 'none'
        var change = function () {
          var scrollTop
          var height
          var padding = 0
          var style = elem.style
          if (elem._length === elem.value.length) return
          elem._length = elem.value.length
          if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'))
          }
          scrollTop = document.body.scrollTop || document.documentElement.scrollTop
          elem.style.height = minHeight + 'px'
          if (elem.scrollHeight > minHeight) {
            if (maxHeight && elem.scrollHeight > maxHeight) {
              height = maxHeight - padding
              style.overflowY = 'auto'
            } else {
              height = elem.scrollHeight - padding
              style.overflowY = 'hidden'
            }
            style.height = height + extra + 'px'
            scrollTop += parseInt(style.height) - elem.currHeight
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            elem.currHeight = parseInt(style.height)
          }
        }
        addEvent('propertychange', change)
        addEvent('input', change)
        addEvent('focus', change)
        change()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .lan-input
    // margin-left:20px
    // margin-right :20px
    display: flex
    align-items: center
    font-size: $fontsize-medium
    line-height: 1.429
    background-color: $input-bgc
    border-1px($input-border-color)
    // padding-left: 0.3rem
    &.lan-input_normal
      &::after
        border: unset;
        border-bottom: 2px solid rgba(239,239,239,1);
    &.lan-input_active
      &::after
        border: unset;
        border-bottom: 2px solid #1890ff;
  .lan-input::after
    border-radius:0
  .lan-input-field
    display: block
    flex: 1
    width: 100%
    min-width: 0
    font-size:16px
    box-sizing: border-box
    color: $input-color
    line-height: inherit
    background-color: inherit
    border-radius: 2px
    outline: none
    &::-webkit-input-placeholder
      color: $input-placeholder-color
      text-overflow: ellipsis
    + .lan-input-append
      .lan-input-clear, .lan-input-eye
        &:first-child
          margin-left: -5px
  .lan-input-textarea
    display: block
    flex: 1
    padding:0
    width: 100%
    min-width: 0
    font-size:16px
    box-sizing: border-box
    color: $input-color
    line-height: inherit
    background-color: inherit
    resize:none
    height: 26px;
    margin: 12.5px 0;
    &::-webkit-input-placeholder
      color: $input-placeholder-color
      text-overflow: ellipsis
    + .lan-input-append
      .lan-input-clear, .lan-input-eye
        &:first-child
          // margin-left: -5px
  textarea:focus {
    outline:none
  }
  textarea 
    border:none
  .lan-input_active
    &::after
      border-color: $input-focus-border-color
  .lan-input-prepend, .lan-input-append
    display: flex
    align-items: center
    width: 22px
  .lan-input-clear, .lan-input-eye
    // width: 1em
    // height: 1em
    line-height: 1
    font-size 22px
    // padding: 10px
    box-sizing: content-box
    color: $input-clear-icon-color
    > i
      display: inline-block
      transform: scale(1.2)
  .lan-input-eye
    font-size: 1rem;
    color:#ccc;
    >
      .lan-icon-kejian, .lan-icon-bukejian
        transform: scale(1.4)
  // slot 错误信息样式 | start
  .lan-rule-error
    // position: absolute
    bottom: -22px
    font-size: 12px
    font-family: PingFang SC;
    color: rgba(216,30,6,1);
    text-align: left
    line-height:32px
  // slot 错误信息样式 | end
  // 邮箱后缀
  .lan-email-suffix
    // position: absolute
    top: 60px
    font-size: 16px
    color: #333
    overflow:scroll 
    max-height: 250px
    font-weight:normal 
    // width: 100%
    z-index: 100
    margin:0 1.25rem;
  .lan-email-div
    // height: 55px
    border-bottom: 1px solid #eaeaea
    background: #ffffff
    line-height: 47px
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
  .lan-phone-send
    border-radius: 20px
    background :#f1f6f5
    font-size: 12px
    // color: #1890ff
    padding:6px 0
    width :85px
    // font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(24,144,255,1);
    text-align: center
    // padding:7px 10px
  .lan-phone-resend
    border-radius: 20px
    background :#f1f6f5
    font-size: 12px
    color: #ccc
    padding:6px 0
    width :85px
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(204,204,204,1);
    // padding:7px 5px
  .lan-phone-section
    max-width:60px
    display :flex
    justify-content :flex-start
    align-items :center
    font-size:16px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
</style>
