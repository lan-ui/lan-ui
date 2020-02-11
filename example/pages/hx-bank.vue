<template>
  <cube-page  title="华夏组件库-银行">
    <div slot="content">
      <div>
        <hx-bank :readonly="false" :options="banks" :placeholder="placeholder"  @selectBank="selectBank"></hx-bank>
        <hx-bank :readonly="false" :options="banks" :disabled="disabled" :value="value1"></hx-bank>
        <hx-bank :readonly="true" :readValue="readBank"></hx-bank>
        <cube-button class="hx-submit" @click="fnsumbit">提交</cube-button>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        placeholder: '请选择银行',
        banks: [
          {
            text: '中国银行',
            value: '00001'
          },
          {
            text: '建设银行',
            value: '00002'
          },
          {
            text: '工商银行',
            value: '00003'
          },
          {
            text: '招商银行',
            value: '00004'
          },
          {
            text: '农业银行',
            value: '00005'
          }
        ],
        readBank: {
          text: '工商银行',
          value: '00003'
        },
        value1: {
          text: '建设银行',
          value: '00002'
        },
        value2: {},
        disabled: true
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      selectBank (data) {
        console.log(data[0])
        console.log(data[1])
        this.value2 = {
          text: data[0],
          value: data[1]
        }
      },
      fnsumbit () {
        console.log(this.value2.text + ':' + this.value2.value)
        console.log(this.value1.text + ':' + this.value1.value)
        console.log(this.readBank.text + ':' + this.readBank.value)
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus">
  .hx-submit.cube-btn
    margin-top: 20px
</style>
