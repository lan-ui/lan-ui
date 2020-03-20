<template>
  <cube-page
    type="input-view"
    title="HxEmail"
    class="option-demo">
    <div slot="content">
      <hx-input-email 
        ref="hx-input-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        v-model="emailValue" 
      ></hx-input-email>
      <hx-input-email 
        ref="hx-input-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        :disabled="true"
        v-model="emailValue1" 
      ></hx-input-email>
      <hx-input-email 
        ref="hx-input-email"
        :placeholder="'请输入邮箱地址'"
        :label="'邮箱地址'"
        :type="'email'" 
        :readonly="true"
        v-model="emailValue1" 
      ></hx-input-email>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  // import WithConsole from '@/components/input/hoc.js'
  import HxInputEmail from '@/components/hx-email/hx-email.vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'

  // const CubeInputWithConsole = WithConsole('cube-input-with-console', CubeInput)

  export default {
    data() {
      return {
        type: '',
        // type: 'email',
        value: '',
        emailValue: '',
        emailValue1: '23456666@qq.com',
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
      HxInputEmail,
      CubePage,
      SwitchOption
    }
  }
</script>

<style lang="stylus">
.cube-page.option-demo.input-view .wrapper
  background-color: #fff
  .group
    background-color: white
  .value
    margin: 15px 5px
</style>
