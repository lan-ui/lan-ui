<template>
  <hx-input
    ref="hx-input"
    class="hx-input-foundation"
    :class="{'hx-input_disabled': disabled}"
    :value="value"
    :placeholder="placeholder"
    :clearable="false"
    :autocomplete="true"
    :readonly="readonly"
    :disabled="disabled"
    :eye="eye"
    :type='type'
    :maxlength='maxlength'
    :hxstyle="hxstyle"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
    @clickEye="clickEye"
  >
    <template v-slot:append>
      <!-- 功能按钮 | 清空、输入错误、输入正确 -->
      <div class="hx-input-clear" @touchend="() => (inputStatus.callback() || null)">
        <i :class="inputStatus.btnClass" :style="inputStatus.btnStyle"></i>
      </div>
    </template>
    <template v-if="label" v-slot:prepend>
      {{label}}
      <!-- 投保人姓名 -->
    </template>
    <template v-if="type=='phone'&&!readonly&&!disabled" v-slot:phone>
      <p @click="showPicker">{{defaultVal}}</p>
      <p class="phone-icon"></p>
    </template>
    <template v-if="inputStatus.isShowErrorInfo" v-slot:rule-error>
      {{errorInfo}}
      <!-- 请输入投保人姓名 -->
    </template>
    <template v-if="type=='email'&&emailShow" v-slot:emailSuffix>
      <div class="hx-email-div" v-for="(item, i) in domainList" :key='i' v-on:touchend='clickTap(item)'>{{item}}</div>
    </template>
    <!-- 验证码 -->
    <template v-if="type=='verification'&&!readonly&&!disabled" v-slot:verification>
      <p class="hx-phone-send" v-if="resend==false" v-on:click='countdown(send)'>{{send}}</p>
      <p class="hx-phone-send hx-phone-resend" v-else>{{send}}</p>
    </template>
  </hx-input> 
</template>

<script>
import HxInput from '../hx-input/hx-input'
// import CubePage from 'example/components/cube-page.vue'
// import CubeButtonGroup from 'example/components/cube-button-group.vue'

const BindInputStatusStrategy = ctx => ({
  'normal': {
    btnClass: 'cubeic-wrong',
    callback: () => ctx.$refs['hx-input'].handleClear(),
    isShowErrorInfo: false
  },
  'corrent': {
    // btnClass: 'cubeic-right',
    btnClass: '',
    btnStyle: {
      color: '#08af16'
    },
    callback: () => { },
    isShowErrorInfo: false
  },
  'wrong': {
    btnClass: 'cubeic-warn',
    // btnClass: '',
    btnStyle: {
      color: '#d81e06'
    },
    callback: () => { },
    isShowErrorInfo: true
  }
})

export default {
  name: 'hx-input-foundation',
  components: {
    HxInput
    // CubePage,
    // CubeButtonGroup
  },
  props: {
    inputCheck: Function,
    label: String,
    errorInfo: String,
    type: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
    eye: {
      type: [Boolean, Object],
      default: false
    },
    hxstyle: String,
    // 透传 props
    ...HxInput.props
  },
  data() {
    return {
      status: {
        get() {
          return this.status || 'normal'
        },
        set(status) {
          if (status !== 'normal' && status !== 'corrent' && status !== 'wrong') {
            // 错误处理
            throw new Error('[hx-input-foundation] - Input status must be the enum: "normal" | "corrent" | "wrong"')
          }
          this.status = status
        }
      },
      // value2: this.value,
      // show: false,
      domainList: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
      domainList1: ['@qq.com', '@gmail.com', '@163.com', '@yahoo.com', '@sina.com', '@hotmail.com', '@outlook.com', '@sohu.com', '@vip.163.com', '@vip.126.com', '@188.com', '@foxmail.com', '@live.cn', '@yeah.net', '@live.com', '@tom.com', '@aliyun.com', '@21.cn', '@corp.netease.com', '@msn.com', '@letv.com'],
      send: '获取验证码',
      resend: false,
      emailShow: false,
      defaultVal: '+86',
      column1: [
        {
          text: '中国大陆+86',
          value: '+86'
        }, {
          text: '中国香港+852',
          value: '+852'
        }, {
          text: '中国澳门+853',
          value: '+853'
        }, {
          text: '中国台湾+886',
          value: '+886'
        }
      ]
    }
  },
  computed: {
    inputStatus() {
      // debugger
      return this.inputStatusStrategy ? (this.inputStatusStrategy[this.status] || {}) : {}
    }
  },
  created() {
    // 挂载输入框状态
    this.inputStatusStrategy = BindInputStatusStrategy(this)
  },
  methods: {
    calcStatus(value) {
      return this.inputCheck
        ? this.inputCheck(value) ? 'corrent' : 'wrong'
        : 'normal'
    },
    handleFocus(e) {
      this.$emit('focus', e)
      this.status = 'normal'
    },
    handleBlur(e) {
      this.status = this.calcStatus(this.value)
      this.$emit('focus', e)
      setTimeout(() => {
        this.emailShow = false
      }, 50)
    },
    handleInput(e) {
      // debugger
      if (this.type === 'email') {
        this.$emit('input', e.toLocaleLowerCase())
      } else {
        this.$emit('input', e)
      }
      this.$emit('defaultPhone', this.defaultVal)
      var value2 = this.value
      value2 = e
      if (value2.length > 0) {
        this.emailShow = true
      }
      this.domainList = this.domainList1.map(item => {
        item = '' + e + item
        return item
      })
      for (var i = 0; i < this.domainList.length; i++) {
        if (this.domainList[i].split('@').length >= 3) {
          var index2 = this.find(this.domainList[i], '@', 1)
          var index1 = this.find(this.domainList[i], '@', 0)
          this.domainList[i] = this.domainList[i].substring(0, index1) + this.domainList[i].substring(index2)
        }
      }
    },
    find (str, cha, num) {
      var x = str.indexOf(cha)
      for (var i = 0; i < num; i++) {
        x = str.indexOf(cha, x + 1)
      }
      return x
    },
    clickTap(val) {
      // console.log(val)
      this.status = this.calcStatus(val)
      setTimeout(() => {
        this.emailShow = false
      }, 10)
      this.$emit('input', val)
    },
    countdown: function() {
      var nsecond = 60
      var that = this
      var appCount = setInterval(function() {
        nsecond -= 1
        that.send = '重新发送(' + nsecond + 's)'
        that.resend = true
        if (nsecond < 1) {
          clearInterval(appCount)
          that.send = '发送验证码'
          that.resend = false
        }
        // console.log(that.send)
      }, 1000)
    },
    // 号码归属地picker组件
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '号码归属地',
          data: [this.column1],
          onSelect: this.selectHandle
        })
      }
      this.picker.show()
    },
    // 选择号码归属地点击确认
    selectHandle(selectedVal, selectedIndex, selectedText) {
      // console.log(selectedVal, selectedIndex, selectedText)
      this.defaultVal = selectedVal[0]
    },
    // 是否全部可见
    clickEye(e) {
      console.log(e)
      this.$emit('clickEye', e)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .hx-input-foundation
    line-height: 1;
    font-size: 16px;
    border-radius: 0;
    color: rgba(51,51,51,1)
    .hx-input-prepend
      font-size:16px;
      width: 112px;
      line-height: 50px
    .hx-input-field
      &::-webkit-input-placeholder
        color: #ccc;
  .phone-icon
    border-width :0.3rem
    margin-top :0.3rem
    margin-left :9px
    margin-right: 18px
    border-style:solid
    border-color: #000 transparent transparent transparent
  .hx-input_disabled
    color: rgba(204,204,204,1) !important 
</style>