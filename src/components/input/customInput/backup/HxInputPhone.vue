<template>
  <binding-status-input
    ref="bindingStatusInput"
    :clearable="false"
    :autocomplete="true"
    :inputCheck="inputCheckPhone"
    @statusChange="statusChange"
  >
    <template v-slot:append>
      <!-- 功能按钮 | 清空、输入错误、输入正确 -->
      <div class="hx-input-clear" @touchend="inputStatus.callback || (() => {})">
        <i :class="inputStatus.btnClass" :style="inputStatus.btnStyle"></i>
      </div>
    </template>
    <template v-if="label" v-slot:prepend>
      {{label}}
      <!-- 投保人姓名 -->
    </template>
    <template v-if="inputStatus.isShowErrorInfo" v-slot:rule-error>
      {{errorInfo}}
      <!-- 请输入投保人姓名 -->
    </template>
  </binding-status-input>
</template>

<script>
import BindingStatusInput from './bindingStatusInput.js'

const REGEXP_PHONE = /^1[3456789]\d{1}\d{4}\d{4}$/

export default {
  name: 'hx-input-phone',
  components: {
    BindingStatusInput
  },
  props: {
    // 透传 props
    ...BindingStatusInput.props,
    label: String
  },
  data() {
    return {
      phoneErrorInfo: '',
      inputStatus: {}
      // status: {
      //   get() {
      //     return this.status || 'normal'
      //   },
      //   set(status) {
      //     if (status !== 'normal' && status !== 'corrent' && status !== 'wrong') {
      //       // 错误处理
      //       throw new Error('[hx-input-foundation] - Input status must be the enum: "normal" | "corrent" | "wrong"')
      //     }
      //     this.status = status
      //   }
      // }
    }
  },
  created() {},
  computed: {
    // inputStatus() {
    //   const nativeInput = this.$refs.bindingStatusInput
    //   return nativeInput ? nativeInput.inputStatus : {
    //     btnClass: 'cubeic-wrong',
    //     callback: null,
    //     isShowErrorInfo: false
    //   }
    // }
  },
  methods: {
    /**
     * 手机号码装饰器
     * @example
     *
     * formatPhone('17610242070') -> '176 1024 2070'
     * formatPhone('1761024207086235') -> '176 1024 2070 8623 5'
     *
     */
    formatPhone(phone) {
      return Array.prototype.reduce.call(phone, (temp, num, i) => temp + num + ((i % 4 === 2) ? ' ' : ''))
    },
    inputCheckPhone() {
      if (!this.value /* 值校验不通过 */) {
        this.phoneErrorInfo = '请输入手机号码！'
        return false
      } else if (!REGEXP_PHONE.test(this.value) || (this.value + '').length !== 11 /* 格式校验不通过 */) {
        this.phoneErrorInfo = '请输入正确的手机号码！'
        return false
      } else {
        return true
      }
    },
    statusChange(status) {
      const nativeInput = this.$refs.bindingStatusInput
      this.inputStatus = nativeInput ? nativeInput.inputStatus : {
        btnClass: 'cubeic-wrong',
        callback: null,
        isShowErrorInfo: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hx-input {
  line-height: 1;
  border: unset;
  border-bottom: 1px solid #efefef;
  font-weight: lighter;
  font-size: 16px;
}

.hx-input-prepend {
  // width: 94px;
  // color: #333;
  font-size:16px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(51,51,51,1);
  width: 114px;
}

.hx-input-field {
  padding: 18px 10px;
  color: #333;
  font-weight: 500;

  &::-webkit-input-placeholder {
    color: #ccc;
  }
}

.hx-input_active {
  &::after {
    border: unset;
    border-bottom: 3px solid #1890ff;
  }
}
</style>