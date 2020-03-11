import HxInput from '../../input.vue'
import hoc from './hoc.js'

const BindInputStatusStrategy = ctx => ({
  'normal': {
    btnClass: 'cubeic-wrong',
    callback: () => ctx.$refs['hx-input'].handleClear(),
    isShowErrorInfo: false
  },
  'corrent': {
    btnClass: 'cubeic-right',
    btnStyle: {
      color: '#08af16'
    },
    callback: () => { },
    isShowErrorInfo: false
  },
  'wrong': {
    btnClass: 'cubeic-warn',
    btnStyle: {
      color: '#d81e06'
    },
    callback: () => { },
    isShowErrorInfo: true
  }
})
// let setStatus = status => (this.status = status)
// let handleFocus = e => setStatus('normal')
// let handleBlur = e => {
//   if (this.inputCheck) {
//     setStatus(this.inputCheck() ? 'corrent' : 'wrong')
//   } else {
//     setStatus('normal')
//   }
// }

let setStatus = function (status) {
  this.status = status
  this.$emit('statusChange', this.status)
}
let handleFocus = function (e) {
  setStatus('normal')
}
let handleBlur = function (e) {
  if (this.inputCheck) {
    setStatus(this.inputCheck() ? 'corrent' : 'wrong')
  } else {
    setStatus('normal')
  }
}

export default hoc(HxInput)({
  name: 'binding-status-input',
  props: {
    inputCheck: Function
  },
  data() {
    return {
      tesssssssssssst: '111',
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
      }
    }
  },
  computed: {
    inputStatus() {
      return this.inputStatusStrategy[this.status || 'normal']
    }
    // isFocus() {
    //   const hxInput = this.$refs['hx-input']
    //   return hxInput ? hxInput.isFocus : false
    // }
  },
  created() {
    this.$nextTick(() => {
      console.log('this', this)
      console.log("this.$refs['hx-input']", this.$refs['hx-input'])
      console.log('this.isFocus', this.isFocus)
      debugger
    })
    // 挂载输入框状态
    this.inputStatusStrategy = BindInputStatusStrategy(this)
    // 为状态操作绑定上下文
    setStatus = setStatus.bind(this)
    handleFocus = handleFocus.bind(this)
    handleBlur = handleBlur.bind(this)
  },
  listeners: {
    focus: e => handleFocus(e),
    blur: e => handleBlur(e)
  }
  // watch: {
  //   isFocus(focus) {
  //     debugger
  //     if (focus) {
  //       this.status = 'normal'
  //     } else {
  //       this.status = this.inputCheck
  //         ? this.inputCheck() ? 'corrent' : 'wrong'
  //         : 'normal'
  //     }
  //   }
  // }
})
