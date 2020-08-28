<template>
  <cube-page type="input-view" title="Input" class="option-demo">
    <div slot="content" class="input-view-default">
      <p class="input_title">基本使用：</p>
      <cube-input
        :type="type"
        placeholder="请在这里输入......"
        :eye="eye"
        v-model="value"
      ></cube-input>
      <cube-input
        type="input"
        placeholder="请在这里输入......"
        :disabled="true"
        value="禁止状态"
      ></cube-input>
      <cube-input
        type="input"
        placeholder="请在这里输入......"
        :readonly="true"
        value="只读状态"
      ></cube-input>
      <cube-input
        type="input"
        placeholder="请在这里输入......"
        :maxlength=6
        value="最大输入长度"
      ></cube-input>
      <cube-input
        :type="type"
        placeholder="请在这里输入......"
        :eye="eye"
        value="使用密码眼睛"
      ></cube-input>
      <cube-input
        type="input"
        placeholder="请在这里输入......"
        :clearable="clearable"
        value="清空按钮"
      ></cube-input>
      <cube-input
        :type="type"
        placeholder="please type here..."
        :disabled="disabled"
        :readonly="readonly"
        :clearable="clearable"
        :autocomplete="true"
        :eye="eye"
        v-model="value"
      ></cube-input>
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
.input-view-default
  .cube-input
    margin: 10px 0
    height:49px
    border-radius: 6px
  .input_title
    padding:16px
    font-size: 12px
    background: rgba(245,245,245,1)
    color: #666
</style>
