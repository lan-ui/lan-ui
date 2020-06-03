<template>
  <cube-page
    type="input-view"
    title="IdNumber"
    class="option-demo">
    <div slot="content">
      <lan-id-number
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :type="'idcard'"
        :maxlength='18'
        :lanstyle="'text-align:left'"
        v-model="idcardValue" 
      ></lan-id-number>
      <lan-id-number
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :type="'idcard'"
        :disabled="true"
        v-model="idcardValue1" 
      ></lan-id-number>
      <lan-id-number
        ref="lan-id-number"
        :placeholder="'请输入身份证号码'"
        :label="'身份证号码'"
        :type="'idcard'"
        :readonly="true"
        :eye="eye"
        v-model="idcardValue2" 
      ></lan-id-number>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  // import WithConsole from '@/components/input/hoc.js'
  import IdNumber from '@/components/id-number/id-number.vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'

  // const CubeInputWithConsole = WithConsole('cube-input-with-console', CubeInput)

  export default {
    data() {
      return {
        type: '',
        // type: 'email',
        value: '',
        idcardValue: '',
        idcardValue1: '230229199608042020',
        idcardValue2: '230229199608042020',
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
      IdNumber,
      CubePage,
      SwitchOption
    }
  }
</script>

<style lang="stylus">
  .cube-page.option-demo.input-view .wrapper
    background-color: #fff
  .cube-page.option-demo >.wrapper .content 
    margin: 10px 30px
  .group
    background-color: white
  .value
    margin: 15px 5px
</style>
