<template>
  <cube-page  title="Nationality" class="lan">
    <div slot="content">
      <div class="lan-sex-wrapper">
        <lan-nationality :readonly="false" @selected="selected" ref="lanValidate"></lan-nationality>
        <lan-nationality :readonly="false" :options="types"  @selected="selected" ref="lanValidate"></lan-nationality>
        <lan-nationality :readonly="false" :disabled="true" :value="value1"></lan-nationality>
        <lan-nationality :readonly="true" :readValue="readType"></lan-nationality>
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
        types: [
          {
            text: '中国',
            value: '00001'
          },
          {
            text: '中国（香港）',
            value: '00002'
          },
          {
            text: '中国（澳门）',
            value: '00003'
          },
          {
            text: '中国（台湾）',
            value: '00004'
          }
        ],
        readType: {
          text: '中国（香港）',
          value: '00002'
        },
        value1: {
          value: 'HK',
          text: '中国(香港)'
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
          console.log(this.readType.text + ':' + this.readType.value)
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
