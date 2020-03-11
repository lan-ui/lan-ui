<template>
  <cube-page
    type="input-view"
    title="Input"
    class="option-demo">
    <div slot="content">
      <!-- <hx-input
        type="phone"
      ></hx-input>
      <hx-input
        type="idcard"
      ></hx-input>
      <hx-input
        type="email"
      ></hx-input> -->
      <cube-input 
        :type="'password'" 
        placeholder="请输入密码" 
        :clearable="clearable" 
        :autocomplete="true" 
        :eye="eye" 
        v-model="value" 
      >
        <template v-slot:prepend>
          slot-prepend
        </template>
      </cube-input>
      <hx-input-phone 
        ref="hx-input-phone"
        :placeholder="'请输入手机号'"
        :label="'手机号'"
        :type="'phone'"
        v-model="phoneValue" 
      ></hx-input-phone>
      <!-- xwb -->
      <hx-input-email 
        ref="hx-input-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        v-model="emailValue" 
      ></hx-input-email>
      <hx-input-idcard 
        ref="hx-input-idcard"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :type="'idcard'"
        v-model="idcardValue" 
      ></hx-input-idcard>
      <hx-input-address 
        ref="hx-input-address"
        :placeholder="'请输入街道(小区)门牌号'"
        :label="'详细地址'"
        :type="'address'"
        v-model="addressValue" 
      ></hx-input-address>
      <hx-input-accountName
        ref="hx-input-accountName"
        :placeholder="'请输入账号名'"
        :label="'账号名'"
        :type="'accountName'"
        v-model="accountNameValue" 
      ></hx-input-accountName>
      <hx-input-account
        ref="hx-input-account"
        :placeholder="'请输入账号'"
        :label="'账号'"
        :type="'account'"
        @binkList="binkList"
        v-model="accountValue" 
      ></hx-input-account>
      <hx-input-verification 
        ref="hx-input-verification"
        :placeholder="'请输入手机验证码'"
        :label="'手机验证码'"
        :type="'verification'"
        v-model="verificationValue" 
      ></hx-input-verification>
      <!-- xwb --> 
      <div class="value">value: {{value}}</div>
      <div class="options">
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="disabled" :value="disabled"
                            @update:value="updateDisabled"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="readonly" :value="readonly"
                            @update:value="updateReadonly"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="phone" :value="phone"
                            @update:value="updatephone"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="maxlength:10" :value="maxlength10"
                            @update:value="updateMaxLength"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="clearable" :value="useClear"
                            @update:value="updateUseClear"></switch-option>
            <switch-option class="item" name="blur hiden" :value="clearBlurHidden"
                            @update:value="updateBlurHidden" v-if="useClear"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="password" :value="isPwd"
                            @update:value="updatePwd"></switch-option>
            <switch-option class="item" name="show eye" :value="showEye"
                            @update:value="updateShowEye" v-if="isPwd"></switch-option>
            <switch-option class="item" name="reverse" :value="reverse"
                            @update:value="updateReverse" v-if="isPwd && showEye"></switch-option>
            <switch-option class="item" name="password visible" :value="pwdVisible"
                            @update:value="updatePwdVisible" v-if="isPwd && showEye"></switch-option>
          </div>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  // import WithConsole from '@/components/input/hoc.js'
  import CubeInput from '@/components/input/input.vue'
  import { HxInputPhone, HxInputEmail, HxInputIdcard, HxInputAddress, HxInputAccount, HxInputVerification, HxInputAccountName } from '@/components/input/customInput/index.js'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'

  // const CubeInputWithConsole = WithConsole('cube-input-with-console', CubeInput)

  export default {
    data() {
      return {
        type: '',
        // type: 'email',
        value: '',
        phoneValue: '',
        emailValue: '',
        idcardValue: '',
        addressValue: '',
        accountValue: '',
        accountNameValue: '',
        verificationValue: '',
        disabled: false,
        useClear: true,
        maxlength10: false,
        clearBlurHidden: true,
        readonly: false,
        isPwd: true,
        phone: false,
        showEye: true,
        pwdVisible: true,
        reverse: false,
        placeholder: 'please type here...'
      }
    },
    computed: {
      // phoneValueFormated: {
      //   set(val) {
      //     this.phoneValue = this.$refs['hx-input-phone'].formatPhone(val)
      //   },
      //   get() {
      //     return this.phoneValue
      //   }
      // },
      clearable() {
        if (this.type === 'phone') {
          this.placeholder = '请输入手机号码'
          // this.phoneStyle = true
        } else if (this.type === 'email') {
          this.placeholder = '请输入邮箱地址'
        } else if (this.type === 'idcard') {
          this.placeholder = '请输入身份证号'
        } else {
          this.placeholder = 'please type here...'
          // this.phoneStyle = false
        }
        console.log(this.placeholder)
        return {
          visible: this.useClear,
          blurHidden: this.clearBlurHidden
        }
      },
      // phone() {
      //   console.log('yss%s', this.phone)
      //   if (this.phone) {
      //     return false
      //   }
      //   return true
      // },
      eye() {
        if (this.isPwd && this.showEye) {
          return {
            open: this.reverse ? !this.pwdVisible : this.pwdVisible,
            reverse: this.reverse
          }
        } else {
          return false
        }
      }
    },
    // watch: {
    //   value(newV) {
    //     if (this.maxlength10 && newV.length > 10) {
    //       newV = newV.slice(0, 10)
    //       this.$nextTick(() => {
    //         this.value = newV
    //       })
    //     }
    //   }
    // },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      updateReadonly(val) {
        this.readonly = val
      },
      updatephone(val) {
        this.phone = val
        this.type = this.phone ? 'phone' : 'text'
        console.log(this.type)
      },
      updateUseClear(val) {
        this.useClear = val
      },
      updateBlurHidden(val) {
        this.clearBlurHidden = val
      },
      updateMaxLength(val) {
        this.maxlength10 = val
      },
      updatePwd(val) {
        this.isPwd = val
        this.type = this.isPwd ? 'password' : 'text'
        console.log('yss pass %s', this.type)
      },
      updateShowEye(val) {
        this.showEye = val
      },
      updatePwdVisible(val) {
        this.pwdVisible = val
      },
      updateReverse(val) {
        this.reverse = val
      },
      // 子组件传的开户行名称
      binkList(e) {
        var bankList = {}
        bankList = e
        console.log(bankList.text)
      }
    },
    components: {
      CubeInput,
      HxInputPhone,
      HxInputEmail,
      HxInputIdcard,
      HxInputAddress,
      HxInputAccount,
      HxInputAccountName,
      HxInputVerification,
      CubePage,
      SwitchOption
    }
  }
</script>

<style lang="stylus">
.cube-page.option-demo.input-view .wrapper
  background-color: #efeff4
  .group
    background-color: white
  .value
    margin: 15px 5px
</style>
