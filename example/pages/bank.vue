<template>
  <cube-page  title="Bank" class="lan">
    <div slot="content">
      <div class="lan-sex-wrapper">
        <lan-bank @selected="selected" ref="hxValidate"></lan-bank>
        <lan-bank :options="banks"  @selected="selected" ref="lanValidate"></lan-bank>
        <lan-bank :options="banks" :disabled="true" :value="value1"></lan-bank>
        <lan-bank :readonly="true" :readValue="readBank"></lan-bank>
        <!-- <cube-button class="lan-submit" @click="fnsumbit">提交</cube-button> -->
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
        this.$refs.lanValidate.validate()
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
  .cube-page.lan >.wrapper .content 
    margin: 10px 30px
  .lan-submit.cube-btn
    margin-top: 20px
</style>
