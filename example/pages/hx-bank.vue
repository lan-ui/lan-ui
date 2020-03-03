<template>
  <cube-page  title="HxBank">
    <div slot="content">
      <div>
        <hx-bank @selected="selected" ref="hxValidate"></hx-bank>
        <hx-bank :options="banks"  @selected="selected" ref="hxValidate"></hx-bank>
        <hx-bank :options="banks" :disabled="true" :value="value1"></hx-bank>
        <hx-bank :readonly="true" :readValue="readBank"></hx-bank>
        <!-- <cube-button class="hx-submit" @click="fnsumbit">提交</cube-button> -->
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        placeholder: '',
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
          value: ''
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
      selected (data) {
        console.log(data[0])
        console.log(data[1])
        this.value2 = {
          text: data[0],
          value: data[1]
        }
      },
      fnsumbit () {
        this.$refs.hxValidate.validate()
        if (this.value2.text) {
          console.log('验证通过，提交！')
          console.log(this.value2.text + ':' + this.value2.value)
          console.log(this.value1.text + ':' + this.value1.value)
          console.log(this.readBank.text + ':' + this.readBank.value)
        }
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
