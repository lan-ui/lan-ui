<template>
  <cube-page  title="Certificatetype" class="lan">
    <div slot="content">
      <div class="lan-sex-wrapper">
        <lan-certificatetype :readonly="false"  @selected="selected" ref="lanValidate"></lan-certificatetype>
        <lan-certificatetype :readonly="false" :options="types"  @selected="selected" ref="lanValidate"></lan-certificatetype>
        <lan-certificatetype :readonly="false" :disabled="true" :value="value1"></lan-certificatetype>
        <lan-certificatetype :readonly="true" :readValue="readType"></lan-certificatetype>
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
            text: '居民身份证',
            value: '00001'
          },
          {
            text: '居民户口薄',
            value: '00002'
          },
          {
            text: '军官证',
            value: '00003'
          },
          {
            text: '护照',
            value: '00004'
          }
        ],
        readType: {
          text: '居民身份证',
          value: '00001'
        },
        value1: {
          value: '17',
          text: '港澳台居民居住证'
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
