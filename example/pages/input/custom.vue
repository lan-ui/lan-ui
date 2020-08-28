<template>
  <cube-page type="input-view" title="Input" class="option-demo">
    <div slot="content" class="input-custom">
      <p class="input_title">输入框(常规效果)</p>
      <cube-input
        type="input"
        placeholder="请输入用户名称"
        v-model="value"
      ></cube-input>
      <cube-input
        type="input"
        placeholder="请输入登录密码"
        v-model="value"
      ></cube-input>
      <p class="input_title">输入框(图标效果)</p>
      <cube-input
        type="input"
        placeholder="请输入用户名称"
        v-model="value"
      ><i slot="prepend" class="icon-lan-account"></i></cube-input>
      <cube-input
        type="input"
        placeholder="请输入登录密码"
        v-model="value"
      ><i slot="prepend" class="icon-lan-lock"></i></cube-input>
      <p class="input_title">输入框(带清除按钮)</p>
      <cube-input
        type="input"
        placeholder="请输入用户名称"
        :clearable="clearable"
        v-model="value"
      ><i slot="prepend" class="icon-lan-account"></i></cube-input>
      <cube-input
        type="input"
        placeholder="请输入登录密码"
        :clearable="clearable"
        v-model="value"
      ><i slot="prepend" class="icon-lan-lock"></i></cube-input>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import SwitchOption from 'example/components/switch-option'

  export default {
    data() {
      return {
        type: 'password',
        value: '',
        disabled: false,
        useClear: true,
        maxlength10: false,
        clearBlurHidden: true,
        readonly: false,
        isPwd: true,
        showEye: true,
        pwdVisible: true,
        reverse: false
      }
    },
    computed: {
      clearable() {
        return {
          visible: this.useClear,
          blurHidden: this.clearBlurHidden
        }
      },
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
    watch: {
      value(newV) {
        if (this.maxlength10 && newV.length > 10) {
          newV = newV.slice(0, 10)
          this.$nextTick(() => {
            this.value = newV
          })
        }
      }
    },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      updateReadonly(val) {
        this.readonly = val
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
      },
      updateShowEye(val) {
        this.showEye = val
      },
      updatePwdVisible(val) {
        this.pwdVisible = val
      },
      updateReverse(val) {
        this.reverse = val
      }
    },
    components: {
      CubePage,
      SwitchOption
    }
  }
</script>

<style lang="stylus">
.cube-page.option-demo.input-view .wrapper
  .group
    background-color: white
  .value
    margin: 15px 5px
.input-custom
  .cube-input
    margin:10px 0
    padding:0 20px
    .cube-input-prepend
      i 
        display: inline-block
        width: 30px
        font-style: normal
    .cube-input-append
      i   
        font-style: normal
  .input_title
    padding:16px
    border-bottom:1px solid #e4e4e4
    background: rgba(245,245,245,1)
    color: #666
    font-size: 12px
</style>
