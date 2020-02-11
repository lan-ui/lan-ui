<template>
  <div
    class="hx-bank"
    :class="disabled?'hx-bank-disabled':''"
    :readonly="readonly"
    :readValue="readValue"
    :disabled="disabled"
  >
    <p class="hx-bank-title">银行</p>
    <div class="hx_bank_main" v-if="!readonly">
      <p class="bank_main_info" @click="showPicker">
        <span>{{bank}}</span>
        <i class="cubeic-credit-card"></i>
      </p>
      <p class="main_tips" v-if="tips">{{tips}}</p>
    </div>
    <p class="bank_main_info" v-else>{{readValue.text}}</p>
  </div>
</template>

<script>
const COMPONENT_NAME = 'hx-bank'

export default {
  name: COMPONENT_NAME,
  props: {
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      require: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    },
    readValue: {
      type: Object
    },
    tips: {
      type: String
    }
  },
  data() {
    return {
      banks: this.options,
      bank: this.value ? this.value.text : this.placeholder
    }
  },
  watch: {},
  methods: {
    showPicker() {
      var that = this
      if (!this.disabled) {
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: '银行',
            cancelTxt: '取消',
            confirmTxt: '确定',
            data: [that.banks],
            onSelect: this.selectHandle
          })
        }
        this.picker.show()
      }
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.bank = selectedText[0]
      var value = []
      value.push(selectedText[0])
      value.push(selectedVal[0])
      this.$emit('selectBank', value)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@require '../../common/stylus/variable.styl';
@require '../../common/stylus/mixin.styl';

$color-light-grey-s, .cube-page {
  background: #fff;
}

.hx-bank {
  margin: 0 20px;
  line-height: 50px;
  font-size: 16px;
  color: $color-dark-grey;

  .hx-bank-title {
    float: left;
    width: 112px;
  }

  i {
    color: #1890FF;
  }

  input::-webkit-input-placeholder {
    color: $color-light-grey-s;
  }

  .bank_main_info {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    span {
      display: inline-block;
      width: 180px;
    }
  }

  .main_tips {
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    color: $validator-msg-def-color;
  }
}

.hx-bank-disabled, .hx-bank-disabled i, .hx-bank-disabled input, .hx-bank-disabled input::-webkit-input-placeholder {
  color: $color-light-grey-s;
}
</style>
